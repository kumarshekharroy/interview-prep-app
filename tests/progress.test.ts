import { beforeEach, describe, expect, it } from "vitest";
import type { PrepContent } from "../src/types";
import {
  createDayProgress,
  createDayNote,
  createInitialProgress,
  loadProgress,
  normalizeImportedProgress,
  saveProgress,
  validateImportedProgress
} from "../src/lib/progress";

const minimalContent: PrepContent = {
  contentHash: "new-hash",
  generatedAt: new Date().toISOString(),
  sourceRoot: "senior-fullstack-interview-prep",
  months: [],
  weeks: [],
  days: [
    {
      id: "day-001",
      dayNumber: 1,
      weekNumber: 1,
      monthNumber: 1,
      monthId: "month-01",
      weekId: "week-01",
      title: "Day 1",
      metadata: {},
      sections: [],
      checklistItems: [],
      outputArtifacts: [],
      sourcePath: "source.md",
      markdown: "",
      html: ""
    }
  ],
  documents: [],
  searchRecords: []
};

beforeEach(() => {
  window.localStorage.clear();
});

describe("progress storage", () => {
  it("persists and reloads day progress", () => {
    const progress = createInitialProgress("new-hash", "day-001");
    progress.days["day-001"] = {
      ...createDayProgress("complete"),
      notes: "Done with baseline"
    };
    saveProgress(progress);

    const loaded = loadProgress(minimalContent);
    expect(loaded.days["day-001"].status).toBe("complete");
    expect(loaded.days["day-001"].notes).toBe("Done with baseline");
    expect(loaded.days["day-001"].noteEntries[0].text).toBe("Done with baseline");
  });

  it("rejects invalid imports without accepting partial data", () => {
    expect(validateImportedProgress({ schemaVersion: 1 })).toEqual({
      valid: false,
      reason: "Missing content hash."
    });
  });

  it("normalizes imported progress to the current content hash and preserves unmatched day IDs", () => {
    const imported = createInitialProgress("old-hash", "day-999");
    imported.days["day-999"] = createDayProgress("complete");

    const normalized = normalizeImportedProgress(imported, "new-hash", "day-001");

    expect(normalized.contentHash).toBe("new-hash");
    expect(normalized.days["day-999"].status).toBe("complete");
  });

  it("preserves multiple day notes and keeps the legacy notes text readable", () => {
    const imported = createInitialProgress("old-hash", "day-001");
    imported.days["day-001"] = {
      ...createDayProgress("in-progress"),
      notes: "stale single note",
      noteEntries: [
        createDayNote({
          id: "note-1",
          text: "First note",
          createdAt: "2026-01-01T10:00:00.000Z",
          updatedAt: "2026-01-01T10:00:00.000Z"
        }),
        createDayNote({
          id: "note-2",
          text: "Second note",
          createdAt: "2026-01-01T11:00:00.000Z",
          updatedAt: "2026-01-01T11:00:00.000Z"
        })
      ]
    };

    const normalized = normalizeImportedProgress(imported, "new-hash", "day-001");

    expect(normalized.days["day-001"].noteEntries.map((note) => note.text)).toEqual([
      "First note",
      "Second note"
    ]);
    expect(normalized.days["day-001"].notes).toBe("First note\n\nSecond note");
  });

  it("strips removed weak-area category and evidence fields from imported progress", () => {
    const imported = createInitialProgress("old-hash", "day-001");
    imported.weakAreas = [
      {
        id: "WA-legacy",
        date: "2026-01-01",
        weakArea: "Needs clearer async explanation",
        rootCause: "",
        recoveryTask: "Retake async prompt",
        dueDate: "",
        status: "open",
        category: "Backend",
        evidence: "Old evidence field"
      } as any
    ];

    const normalized = normalizeImportedProgress(imported, "new-hash", "day-001");

    expect(normalized.weakAreas[0]).toMatchObject({
      id: "WA-legacy",
      weakArea: "Needs clearer async explanation",
      recoveryTask: "Retake async prompt",
      status: "open"
    });
    expect("category" in normalized.weakAreas[0]).toBe(false);
    expect("evidence" in normalized.weakAreas[0]).toBe(false);
  });
});
