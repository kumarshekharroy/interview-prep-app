import type {
  AreaProgress,
  DayContent,
  DayProgress,
  DayStatus,
  JobApplication,
  PrepContent,
  ProgressState,
  WeakArea,
  WeekProgress
} from "../types";

export const STORAGE_KEY = "interview-prep-progress:v1";
export const STORAGE_BACKUP_PREFIX = "interview-prep-progress-backup:v1:";

const DEFAULT_AREAS = [
  "C# fundamentals",
  ".NET runtime",
  "ASP.NET Core",
  "EF Core",
  "SQL",
  "React",
  "TypeScript",
  "DSA",
  "system design",
  "Azure Service Bus",
  "RabbitMQ",
  "OpenTelemetry",
  "behavioral",
  "resume"
];

export function createInitialProgress(contentHash: string, activeDayId: string): ProgressState {
  const now = nowIso();
  return {
    schemaVersion: 1,
    contentHash,
    profile: {
      displayName: "",
      startedAt: null
    },
    activeDayId,
    days: {},
    weeks: {},
    areas: Object.fromEntries(DEFAULT_AREAS.map((area) => [area, createAreaProgress(now)])),
    weakAreas: [],
    jobApplications: [],
    updatedAt: now
  };
}

export function createDayProgress(status: DayStatus = "in-progress"): DayProgress {
  const now = nowIso();
  return {
    status,
    completedSections: [],
    checklist: {},
    miniTestScore: null,
    selfScore: null,
    notes: "",
    artifactLinks: [],
    weakAreaNote: "",
    startedAt: status === "not-started" ? null : now,
    completedAt: status === "complete" ? now : null,
    updatedAt: now
  };
}

export function createWeekProgress(): WeekProgress {
  return {
    score: null,
    status: "Not taken",
    notes: "",
    updatedAt: nowIso()
  };
}

export function createJobApplication(): JobApplication {
  const timestamp = Date.now();
  return {
    id: `job-${timestamp}`,
    company: "",
    role: "",
    source: "",
    appliedDate: "",
    referral: false,
    status: "Not started",
    nextFollowUp: "",
    notes: ""
  };
}

export function createWeakArea(partial: Partial<WeakArea> = {}): WeakArea {
  return {
    id: partial.id ?? `WA-${String(Date.now()).slice(-6)}`,
    sourceDayId: partial.sourceDayId,
    date: partial.date ?? today(),
    category: partial.category ?? "General",
    weakArea: partial.weakArea ?? "",
    evidence: partial.evidence ?? "",
    rootCause: partial.rootCause ?? "",
    recoveryTask: partial.recoveryTask ?? "",
    dueDate: partial.dueDate ?? "",
    status: partial.status ?? "open"
  };
}

export function loadProgress(content: PrepContent): ProgressState {
  const firstDayId = content.days[0]?.id ?? "day-001";
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return createInitialProgress(content.contentHash, firstDayId);

  try {
    const parsed = JSON.parse(raw);
    const validation = validateImportedProgress(parsed);
    if (!validation.valid) {
      return createInitialProgress(content.contentHash, firstDayId);
    }
    return normalizeImportedProgress(parsed, content.contentHash, firstDayId);
  } catch {
    return createInitialProgress(content.contentHash, firstDayId);
  }
}

export function saveProgress(progress: ProgressState): void {
  window.localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      ...progress,
      updatedAt: nowIso()
    })
  );
}

export function backupAndReplaceProgress(imported: ProgressState, current: ProgressState): ProgressState {
  window.localStorage.setItem(`${STORAGE_BACKUP_PREFIX}${Date.now()}`, JSON.stringify(current));
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(imported));
  return imported;
}

export function validateImportedProgress(value: unknown): { valid: true } | { valid: false; reason: string } {
  if (!isRecord(value)) return { valid: false, reason: "The file is not a progress object." };
  if (value.schemaVersion !== 1) return { valid: false, reason: "Unsupported progress schema version." };
  if (typeof value.contentHash !== "string") return { valid: false, reason: "Missing content hash." };
  if (typeof value.activeDayId !== "string") return { valid: false, reason: "Missing active day." };
  if (!isRecord(value.days)) return { valid: false, reason: "Missing day progress." };
  if (!Array.isArray(value.weakAreas)) return { valid: false, reason: "Missing weak-area list." };
  if (!Array.isArray(value.jobApplications)) return { valid: false, reason: "Missing job application list." };
  return { valid: true };
}

export function normalizeImportedProgress(
  imported: ProgressState,
  contentHash: string,
  fallbackDayId: string
): ProgressState {
  const now = nowIso();
  const normalized: ProgressState = {
    ...createInitialProgress(contentHash, fallbackDayId),
    ...imported,
    schemaVersion: 1,
    contentHash,
    profile: {
      displayName: imported.profile?.displayName ?? "",
      startedAt: imported.profile?.startedAt ?? null
    },
    activeDayId: imported.activeDayId || fallbackDayId,
    days: imported.days ?? {},
    weeks: imported.weeks ?? {},
    areas: {
      ...createInitialProgress(contentHash, fallbackDayId).areas,
      ...(imported.areas ?? {})
    },
    weakAreas: imported.weakAreas ?? [],
    jobApplications: imported.jobApplications ?? [],
    updatedAt: now
  };
  return normalized;
}

export function getDayProgress(progress: ProgressState, day: DayContent): DayProgress {
  return progress.days[day.id] ?? createDayProgress("not-started");
}

export function upsertDayProgress(
  progress: ProgressState,
  dayId: string,
  updater: (current: DayProgress) => DayProgress
): ProgressState {
  const current = progress.days[dayId] ?? createDayProgress();
  const updated = updater(current);
  return touchProgress({
    ...progress,
    activeDayId: dayId,
    days: {
      ...progress.days,
      [dayId]: {
        ...updated,
        startedAt: updated.startedAt ?? nowIso(),
        completedAt: updated.status === "complete" ? updated.completedAt ?? nowIso() : null,
        updatedAt: nowIso()
      }
    }
  });
}

export function updateWeekProgress(
  progress: ProgressState,
  weekId: string,
  updater: (current: WeekProgress) => WeekProgress
): ProgressState {
  const current = progress.weeks[weekId] ?? createWeekProgress();
  return touchProgress({
    ...progress,
    weeks: {
      ...progress.weeks,
      [weekId]: {
        ...updater(current),
        updatedAt: nowIso()
      }
    }
  });
}

export function updateAreaProgress(
  progress: ProgressState,
  area: string,
  updater: (current: AreaProgress) => AreaProgress
): ProgressState {
  const current = progress.areas[area] ?? createAreaProgress(nowIso());
  return touchProgress({
    ...progress,
    areas: {
      ...progress.areas,
      [area]: {
        ...updater(current),
        updatedAt: nowIso()
      }
    }
  });
}

export function calculateStats(content: PrepContent, progress: ProgressState) {
  const completedDays = content.days.filter((day) => progress.days[day.id]?.status === "complete").length;
  const inProgressDays = content.days.filter((day) => progress.days[day.id]?.status === "in-progress").length;
  const openWeakAreas = progress.weakAreas.filter((area) => area.status === "open").length;
  const scoredWeeks = Object.values(progress.weeks).filter((week) => typeof week.score === "number").length;
  const completionPercent = content.days.length === 0 ? 0 : Math.round((completedDays / content.days.length) * 100);

  return {
    completedDays,
    inProgressDays,
    totalDays: content.days.length,
    openWeakAreas,
    scoredWeeks,
    completionPercent
  };
}

export function findSuggestedDay(content: PrepContent, progress: ProgressState): DayContent {
  const active = content.days.find((day) => day.id === progress.activeDayId);
  if (active && progress.days[active.id]?.status !== "complete") return active;
  return content.days.find((day) => progress.days[day.id]?.status !== "complete") ?? content.days[0];
}

export function exportProgress(progress: ProgressState): void {
  const date = today();
  const blob = new Blob([JSON.stringify(progress, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `interview-prep-progress-${date}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

export function applyStatus(current: DayProgress, status: DayStatus): DayProgress {
  return {
    ...current,
    status,
    startedAt: current.startedAt ?? (status === "not-started" ? null : nowIso()),
    completedAt: status === "complete" ? current.completedAt ?? nowIso() : null
  };
}

export function statusLabel(status?: DayStatus): string {
  if (status === "complete") return "Complete";
  if (status === "in-progress") return "In progress";
  return "Not started";
}

function createAreaProgress(timestamp: string): AreaProgress {
  return {
    score: null,
    status: "Not started",
    nextAction: "",
    updatedAt: timestamp
  };
}

function touchProgress(progress: ProgressState): ProgressState {
  return {
    ...progress,
    updatedAt: nowIso()
  };
}

function nowIso() {
  return new Date().toISOString();
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
