import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

const SOURCE_DIR = "senior-fullstack-interview-prep";
const OUTPUT_FILE = "src/data/prep-content.json";

const markdownProcessor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeStringify);

export async function markdownToHtml(markdown) {
  return String(await markdownProcessor.process(markdown));
}

export async function buildPrepContent(rootDir = process.cwd()) {
  const sourceRoot = path.join(rootDir, SOURCE_DIR);
  if (!fs.existsSync(sourceRoot)) {
    throw new Error(`Missing source folder: ${SOURCE_DIR}`);
  }

  const markdownFiles = listMarkdownFiles(sourceRoot);
  const fileRecords = markdownFiles.map((absolutePath) => {
    const relativePath = path.relative(rootDir, absolutePath).replaceAll(path.sep, "/");
    return {
      absolutePath,
      relativePath,
      markdown: fs.readFileSync(absolutePath, "utf8")
    };
  });

  const contentHash = hashFiles(fileRecords);
  const monthFiles = fileRecords.filter((file) => file.relativePath.includes("/months/"));
  const months = [];
  const weeksById = new Map();
  const days = [];

  for (const file of monthFiles) {
    const monthNumber = numberFromPath(file.relativePath, /month-(\d{2})/);
    const h1 = firstHeading(file.markdown) ?? `Month ${monthNumber}`;
    const monthId = idWithNumber("month", monthNumber);
    const level2Blocks = splitHeadingBlocks(file.markdown, /^##\s+(.+)$/gm);
    const weekTitles = parseWeekTitles(level2Blocks);
    const monthOverview = level2Blocks.find((block) => /^Month\s+\d+\s+Overview$/i.test(block.title));
    const checkpoint = level2Blocks.find((block) => new RegExp(`^Month\\s+${monthNumber}\\s+Checkpoint$`, "i").test(block.title));

    months.push({
      id: monthId,
      monthNumber,
      title: h1.replace(/^Month\s+\d+\s*[-:]\s*/i, ""),
      sourcePath: file.relativePath,
      overviewHtml: monthOverview ? await markdownToHtml(monthOverview.markdown) : "",
      checkpoint: checkpoint
        ? {
            id: `${monthId}-checkpoint`,
            title: checkpoint.title,
            markdown: checkpoint.markdown,
            html: await markdownToHtml(checkpoint.markdown)
          }
        : null,
      weekIds: []
    });

    const dayBlocks = splitHeadingBlocks(file.markdown, /^##\s+Day\s+(\d+)\s+[-\u2014]\s+(.+)$/gm);
    for (const block of dayBlocks) {
      const dayNumber = Number(block.match[1]);
      const weekNumber = Math.ceil(dayNumber / 7);
      const dayId = idWithNumber("day", dayNumber, 3);
      const weekId = idWithNumber("week", weekNumber);
      const parsedDay = await parseDayBlock({
        block,
        dayId,
        dayNumber,
        weekNumber,
        monthNumber,
        monthId,
        weekId,
        sourcePath: file.relativePath
      });
      days.push(parsedDay);

      if (!weeksById.has(weekId)) {
        const assessment = level2Blocks.find((candidate) => {
          return new RegExp(`^Week\\s+${weekNumber}\\s+Assessment$`, "i").test(candidate.title);
        });
        weeksById.set(weekId, {
          id: weekId,
          weekNumber,
          monthId,
          monthNumber,
          title: weekTitles.get(weekNumber) ?? `Week ${weekNumber}`,
          dayIds: [],
          assessment: assessment
            ? {
                id: `${weekId}-assessment`,
                title: assessment.title,
                markdown: assessment.markdown,
                html: await markdownToHtml(assessment.markdown)
              }
            : null
        });
      }
      weeksById.get(weekId).dayIds.push(dayId);
    }
  }

  months.sort((a, b) => a.monthNumber - b.monthNumber);
  const weeks = [...weeksById.values()].sort((a, b) => a.weekNumber - b.weekNumber);
  days.sort((a, b) => a.dayNumber - b.dayNumber);

  for (const month of months) {
    month.weekIds = weeks.filter((week) => week.monthId === month.id).map((week) => week.id);
  }

  const documents = [];
  for (const file of fileRecords) {
    documents.push({
      id: slugify(file.relativePath.replace(/\.md$/i, "")),
      title: firstHeading(file.markdown) ?? titleFromPath(file.relativePath),
      category: categoryForPath(file.relativePath),
      sourcePath: file.relativePath,
      markdown: file.markdown,
      html: await markdownToHtml(file.markdown)
    });
  }

  const searchRecords = buildSearchRecords({ days, documents, weeks, months });
  const content = {
    contentHash,
    generatedAt: new Date().toISOString(),
    sourceRoot: SOURCE_DIR,
    months,
    weeks,
    days,
    documents,
    searchRecords
  };

  validateContentShape(content);
  return content;
}

export async function writePrepContent(rootDir = process.cwd()) {
  const content = await buildPrepContent(rootDir);
  const outputPath = path.join(rootDir, OUTPUT_FILE);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
  return content;
}

function listMarkdownFiles(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  return entries
    .flatMap((entry) => {
      const absolutePath = path.join(directory, entry.name);
      if (entry.isDirectory()) return listMarkdownFiles(absolutePath);
      if (entry.isFile() && entry.name.endsWith(".md")) return [absolutePath];
      return [];
    })
    .sort((a, b) => a.localeCompare(b));
}

function hashFiles(files) {
  const hash = crypto.createHash("sha256");
  for (const file of files) {
    hash.update(file.relativePath);
    hash.update("\0");
    hash.update(file.markdown);
    hash.update("\0");
  }
  return hash.digest("hex").slice(0, 16);
}

function validateContentShape(content) {
  if (content.months.length !== 6) {
    throw new Error(`Expected 6 months, generated ${content.months.length}`);
  }
  if (content.weeks.length !== 24) {
    throw new Error(`Expected 24 weeks, generated ${content.weeks.length}`);
  }
  if (content.days.length !== 168) {
    throw new Error(`Expected 168 days, generated ${content.days.length}`);
  }
}

function splitHeadingBlocks(markdown, regex) {
  const matches = [...markdown.matchAll(regex)];
  return matches.map((match, index) => {
    const start = match.index ?? 0;
    const end = matches[index + 1]?.index ?? markdown.length;
    const markdownBlock = markdown.slice(start, end).trim();
    return {
      title: (match[2] ?? match[1] ?? "").trim(),
      markdown: markdownBlock,
      match
    };
  });
}

async function parseDayBlock(context) {
  const { block, dayId, dayNumber, weekNumber, monthNumber, monthId, weekId, sourcePath } = context;
  const title = block.match[2].trim();
  const body = block.markdown.replace(/^##\s+.+$/m, "").trim();
  const firstSectionIndex = body.search(/^###\s+/m);
  const metadataMarkdown = firstSectionIndex >= 0 ? body.slice(0, firstSectionIndex) : body;
  const sectionBlocks = splitHeadingBlocks(block.markdown, /^###\s+(.+)$/gm);
  const metadata = parseMetadata(metadataMarkdown);
  const sections = [];
  let checklistItems = [];
  let outputArtifacts = [];

  for (const [index, section] of sectionBlocks.entries()) {
    const sectionId = `${dayId}-${slugify(section.title)}`;
    const kind = sectionKind(section.title);
    const parsedSection = {
      id: sectionId,
      title: section.title,
      kind,
      order: index + 1,
      markdown: section.markdown,
      html: await markdownToHtml(section.markdown)
    };
    sections.push(parsedSection);

    if (kind === "checklist") {
      checklistItems = parseChecklistItems(section.markdown, dayId);
    }
    if (kind === "artifacts") {
      outputArtifacts = parseBulletItems(section.markdown);
    }
  }

  return {
    id: dayId,
    dayNumber,
    weekNumber,
    monthNumber,
    monthId,
    weekId,
    title,
    metadata,
    sections,
    checklistItems,
    outputArtifacts,
    sourcePath,
    markdown: block.markdown,
    html: await markdownToHtml(block.markdown)
  };
}

function parseMetadata(markdown) {
  const metadata = {};
  const metadataRegex = /^\*\*(.+?):\*\*\s*(.+)$/gm;
  for (const match of markdown.matchAll(metadataRegex)) {
    metadata[match[1].trim()] = match[2].trim();
  }
  return metadata;
}

function parseChecklistItems(markdown, dayId) {
  const items = [];
  const checklistRegex = /^\s*[-*]\s+\[[ xX]\]\s+(.+)$/gm;
  for (const match of markdown.matchAll(checklistRegex)) {
    items.push({
      id: `${dayId}-check-${String(items.length + 1).padStart(2, "0")}`,
      text: stripMarkdownInline(match[1].trim())
    });
  }
  return items;
}

function parseBulletItems(markdown) {
  const items = [];
  const bulletRegex = /^\s*[-*]\s+(.+)$/gm;
  for (const match of markdown.matchAll(bulletRegex)) {
    const item = stripMarkdownInline(match[1].trim());
    if (item && !item.startsWith("[ ]")) {
      items.push(item);
    }
  }
  return items;
}

function sectionKind(title) {
  if (/completion checklist/i.test(title)) return "checklist";
  if (/output artifact/i.test(title)) return "artifacts";
  if (/daily mini-test/i.test(title)) return "mini-test";
  if (/interview explanation/i.test(title)) return "explanation";
  if (/practical task/i.test(title)) return "practical";
  if (/coding|dsa/i.test(title)) return "coding";
  if (/revision/i.test(title)) return "revision";
  return "content";
}

function parseWeekTitles(blocks) {
  const titles = new Map();
  for (const block of blocks) {
    const match = block.match[0].match(/^##\s+Week\s+(\d+)\s+[-\u2014]\s+(.+)$/);
    if (match) {
      titles.set(Number(match[1]), match[2].trim());
    }
  }
  return titles;
}

function buildSearchRecords({ days, documents, weeks, months }) {
  const records = [];
  for (const day of days) {
    records.push({
      id: day.id,
      type: "day",
      title: `Day ${day.dayNumber}: ${day.title}`,
      subtitle: `Month ${day.monthNumber}, Week ${day.weekNumber}`,
      sourceId: day.id,
      text: plainSearchText(day.markdown)
    });
  }
  for (const week of weeks) {
    if (week.assessment) {
      records.push({
        id: week.assessment.id,
        type: "assessment",
        title: week.assessment.title,
        subtitle: `Week ${week.weekNumber}`,
        sourceId: week.id,
        text: plainSearchText(week.assessment.markdown)
      });
    }
  }
  for (const month of months) {
    if (month.checkpoint) {
      records.push({
        id: month.checkpoint.id,
        type: "checkpoint",
        title: month.checkpoint.title,
        subtitle: `Month ${month.monthNumber}`,
        sourceId: month.id,
        text: plainSearchText(month.checkpoint.markdown)
      });
    }
  }
  for (const document of documents) {
    records.push({
      id: document.id,
      type: "document",
      title: document.title,
      subtitle: document.category,
      sourceId: document.id,
      text: plainSearchText(document.markdown)
    });
  }
  return records;
}

function plainSearchText(markdown) {
  return markdown
    .replace(/`{1,3}/g, "")
    .replace(/[#*_>[\]|]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 12000);
}

function firstHeading(markdown) {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match?.[1].trim();
}

function numberFromPath(relativePath, regex) {
  const match = relativePath.match(regex);
  if (!match) throw new Error(`Could not parse number from ${relativePath}`);
  return Number(match[1]);
}

function idWithNumber(prefix, number, width = 2) {
  return `${prefix}-${String(number).padStart(width, "0")}`;
}

function titleFromPath(relativePath) {
  return path
    .basename(relativePath, ".md")
    .replace(/^\d+-/, "")
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function categoryForPath(relativePath) {
  if (relativePath.includes("/months/")) return "Month Plans";
  if (relativePath.includes("/banks/")) return "Banks";
  if (relativePath.includes("/projects/")) return "Projects";
  if (relativePath.includes("/career/")) return "Career";
  if (relativePath.includes("/tracking/")) return "Tracking";
  return "Foundation";
}

function stripMarkdownInline(value) {
  return value
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim();
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

const currentFile = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === currentFile) {
  writePrepContent()
    .then((content) => {
      console.log(
        `Generated ${OUTPUT_FILE}: ${content.months.length} months, ${content.weeks.length} weeks, ${content.days.length} days`
      );
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
