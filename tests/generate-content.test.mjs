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
});
