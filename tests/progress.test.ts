import { beforeEach, describe, expect, it } from "vitest";
import type { PrepContent } from "../src/types";
import {
  createDayProgress,
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
});
