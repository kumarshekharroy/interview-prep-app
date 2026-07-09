export type DayStatus = "not-started" | "in-progress" | "complete";

export interface PrepContent {
  contentHash: string;
  generatedAt: string;
  sourceRoot: string;
  months: MonthContent[];
  weeks: WeekContent[];
  days: DayContent[];
  documents: DocumentContent[];
  searchRecords: SearchRecord[];
}

export interface MonthContent {
  id: string;
  monthNumber: number;
  title: string;
  sourcePath: string;
  overviewHtml: string;
  checkpoint: AssessmentContent | null;
  weekIds: string[];
}

export interface WeekContent {
  id: string;
  weekNumber: number;
  monthId: string;
  monthNumber: number;
  title: string;
  dayIds: string[];
  assessment: AssessmentContent | null;
}

export interface DayContent {
  id: string;
  dayNumber: number;
  weekNumber: number;
  monthNumber: number;
  monthId: string;
  weekId: string;
  title: string;
  metadata: Record<string, string>;
  sections: DaySection[];
  checklistItems: ChecklistItem[];
  outputArtifacts: string[];
  sourcePath: string;
  markdown: string;
  html: string;
}

export interface DaySection {
  id: string;
  title: string;
  kind: string;
  order: number;
  markdown: string;
  html: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
}

export interface AssessmentContent {
  id: string;
  title: string;
  markdown: string;
  html: string;
}

export interface DocumentContent {
  id: string;
  title: string;
  category: string;
  sourcePath: string;
  markdown: string;
  html: string;
}

export interface SearchRecord {
  id: string;
  type: "day" | "assessment" | "checkpoint" | "document";
  title: string;
  subtitle: string;
  sourceId: string;
  text: string;
}

export interface ProgressState {
  schemaVersion: 1;
  contentHash: string;
  profile: {
    displayName: string;
    startedAt: string | null;
  };
  activeDayId: string;
  days: Record<string, DayProgress>;
  weeks: Record<string, WeekProgress>;
  areas: Record<string, AreaProgress>;
  weakAreas: WeakArea[];
  jobApplications: JobApplication[];
  updatedAt: string;
}

export interface DayProgress {
  status: DayStatus;
  completedSections: string[];
  checklist: Record<string, boolean>;
  miniTestScore: number | null;
  selfScore: number | null;
  noteEntries: DayNote[];
  /**
   * Legacy single-note field. New UI writes the joined note text here so older
   * exports still retain readable notes.
   */
  notes: string;
  artifactLinks: string[];
  weakAreaNote: string;
  startedAt: string | null;
  completedAt: string | null;
  updatedAt: string;
}

export interface DayNote {
  id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
}

export interface WeekProgress {
  score: number | null;
  status: string;
  notes: string;
  updatedAt: string;
}

export interface AreaProgress {
  score: number | null;
  status: "Not started" | "In progress" | "Caution" | "Ready";
  nextAction: string;
  updatedAt: string;
}

export interface WeakArea {
  id: string;
  sourceDayId?: string;
  date: string;
  weakArea: string;
  rootCause: string;
  recoveryTask: string;
  dueDate: string;
  status: "open" | "closed";
}

export interface JobApplication {
  id: string;
  company: string;
  role: string;
  source: string;
  appliedDate: string;
  referral: boolean;
  status: string;
  nextFollowUp: string;
  notes: string;
}
