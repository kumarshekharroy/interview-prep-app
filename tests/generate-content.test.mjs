import { beforeAll, describe, expect, it } from "vitest";
import { buildPrepContent } from "../scripts/generate-content.mjs";

let prepContent;

beforeAll(async () => {
  prepContent = await buildPrepContent(process.cwd());
}, 30000);

describe("content generator", () => {
  it("extracts the full curriculum shape", () => {
    expect(prepContent.months).toHaveLength(6);
    expect(prepContent.weeks).toHaveLength(24);
    expect(prepContent.days).toHaveLength(168);
  });

  it("parses Day 1 metadata, sections, checklist, and artifacts", () => {
    const day = prepContent.days.find((candidate) => candidate.id === "day-001");
    expect(day).toBeTruthy();
    expect(day.title).toMatch(/Environment Reset/);
    expect(day.metadata.Week).toBe("1");
    expect(day.metadata.Month).toBe("1");
    expect(day.sections.some((section) => section.kind === "practical")).toBe(true);
    expect(day.sections.some((section) => section.kind === "mini-test")).toBe(true);
    expect(day.checklistItems.length).toBeGreaterThan(5);
    expect(day.outputArtifacts.join(" ")).toContain("day-001-baseline.md");
  });

  it("includes supporting material in the library", () => {
    const categories = new Set(prepContent.documents.map((document) => document.category));
    expect(categories.has("Banks")).toBe(true);
    expect(categories.has("Projects")).toBe(true);
    expect(categories.has("Career")).toBe(true);
    expect(categories.has("Tracking")).toBe(true);
    expect(categories.has("Foundation")).toBe(true);
  });

  it("builds search records for common lookup terms", () => {
    const searchText = prepContent.searchRecords.map((record) => `${record.title} ${record.text}`).join(" ");
    expect(searchText).toContain("DSA-001");
    expect(searchText).toContain("RabbitMQ");
    expect(searchText).toContain("ProblemDetails");
  });

  it("keeps every weekly assessment normalized to 100 points", () => {
    const scoringProblems = prepContent.weeks.flatMap((week) => {
      if (!week.assessment) {
        return [`Week ${week.weekNumber} is missing an assessment`];
      }

      const scoring = assessmentScoring(week.assessment.markdown);
      const problems = [];
      if (scoring.totalScore !== 100) {
        problems.push(`Week ${week.weekNumber} total score is ${scoring.totalScore}`);
      }
      if (scoring.passingScore !== 75) {
        problems.push(`Week ${week.weekNumber} passing score is ${scoring.passingScore}`);
      }
      if (scoring.pointSum !== 100) {
        problems.push(`Week ${week.weekNumber} point sum is ${scoring.pointSum}`);
      }
      return problems;
    });

    expect(scoringProblems).toEqual([]);
  });
});

function assessmentScoring(markdown) {
  const totalScore = Number(markdown.match(/\*\*Total score:\*\*\s*(\d+)/)?.[1]);
  const passingScore = Number(markdown.match(/\*\*Passing score:\*\*\s*(\d+)/)?.[1]);
  let pointSum = 0;

  for (const line of markdown.split("\n")) {
    if (/^\|\s*\d+\s*\|/.test(line)) {
      const cells = line.split("|").slice(1, -1).map((cell) => cell.trim());
      const points = Number(cells.at(-1));
      if (Number.isFinite(points)) {
        pointSum += points;
      }
    }

    const pointsLine = line.match(/^Points:\s*(\d+)/);
    if (pointsLine) {
      pointSum += Number(pointsLine[1]);
    }
  }

  return {
    passingScore,
    pointSum,
    totalScore
  };
}
