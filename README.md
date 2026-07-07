# Interview Prep OS

A local-first web app for working through the markdown interview-prep system in `senior-fullstack-interview-prep/`.

The goal is to keep the markdown curriculum as the durable source of truth, while giving the day-to-day experience a guided dashboard, searchable library, progress tracking, weak-area capture, and exportable local state.

## Vision

Markdown is excellent for writing and maintaining the prep material, but it is not ideal for daily execution. This app turns the 24-week plan into an interactive operating system:

- See the next study day and current readiness at a glance.
- Follow each day as a guided workflow instead of a long document.
- Track completion, scores, notes, artifacts, weak areas, and job-search activity.
- Search across days, banks, project notes, career material, and tracking files.
- Keep all personal progress local and portable through JSON export/import.

## How It Works

The app has two separate layers:

- Curriculum content: generated from markdown files in `senior-fullstack-interview-prep/`.
- Personal progress: stored locally in the browser under `interview-prep-progress:v1`.

On launch, the app runs the content generator:

```bash
npm run generate
```

That generator parses the markdown files, extracts the 6-month / 24-week / 168-day structure, converts markdown to HTML with table support, and writes:

```text
src/data/prep-content.json
```

The app imports that generated JSON and renders the dashboard, roadmap, study day, library, trackers, and settings pages.

## First-Time Setup

```bash
npm install
```

## Launch

```bash
npm start
```

This regenerates content from the markdown files, starts Vite, and opens the app in your browser.

If the default port is busy, Vite will suggest or use another local port.

## Main Screens

### Dashboard

The starting screen. It shows:

- Current suggested study day.
- Overall completion percentage.
- Active days.
- Open weak areas.
- Weekly score count.
- Month-by-month progress.

### Roadmap

Shows the full 6-month / 24-week / 168-day plan. Each day tile reflects local progress state and opens the guided study page.

### Study Day

The main execution screen for daily prep.

It includes:

- Day title, goal, progress percentage, and mark-complete action.
- Collapsible progress details for checklist, scores, notes, artifact links, and weak areas.
- One compact day-context summary instead of scattered metadata boxes.
- Full-width rendered study content.
- Previous/next day navigation.

### Library

Search and browse the source material.

Useful searches include:

- `DSA-001`
- `RabbitMQ`
- `ProblemDetails`
- `Azure Service Bus`
- `system design`

### Trackers

Vertical collapsible tracker sections for:

- Weak areas.
- Weekly scores.
- Readiness areas.
- Job applications.

Each tracker can be expanded when needed and kept out of the way when not needed.

### Settings

Use this page to:

- Export progress as JSON.
- Import a saved progress JSON file.
- Reset local progress.
- View generated content metadata.

## Progress Model

Progress is stored only in the browser. The app does not write progress back into the markdown files.

Tracked state includes:

- Active day.
- Day status: not started, in progress, complete.
- Completed sections.
- Completion checklist state.
- Mini-test score.
- Self-score.
- Notes.
- Artifact links or paths.
- Weak-area notes and saved weak areas.
- Weekly scores.
- Readiness area scores/statuses.
- Job applications.

Exported progress files are named like:

```text
interview-prep-progress-YYYY-MM-DD.json
```

Import validates the schema before replacing local progress. The app keeps stable IDs such as `day-001`, `week-01`, and `month-01` so progress can survive normal markdown edits.

## URL Flow

The app uses local hash routes, so refresh/back/forward work without a backend router.

Examples:

```text
#/dashboard
#/roadmap
#/study/day-001
#/library
#/trackers
#/settings
```

## Commands

```bash
npm run generate
```

Generate `src/data/prep-content.json` from markdown.

```bash
npm start
```

Generate content, start the local app, and open the browser.

```bash
npm run dev
```

Generate content and start Vite without forcing the browser to open.

```bash
npm run build
```

Generate content, type-check, and build the production bundle.

```bash
npm run preview
```

Preview the production build locally.

```bash
npm test
```

Generate content and run tests.

## Project Structure

```text
senior-fullstack-interview-prep/
  Source markdown curriculum.

scripts/generate-content.mjs
  Markdown parser and content generator.

src/data/prep-content.json
  Generated app content.

src/App.tsx
  Main app UI, routing, screens, and interactions.

src/lib/progress.ts
  Local progress storage, import/export validation, and progress helpers.

src/types.ts
  Content and progress data contracts.

src/styles/app.css
  Application styling and responsive layout.

tests/
  Parser and progress tests.
```

## Testing Coverage

Current tests verify:

- Exactly 6 months, 24 weeks, and 168 days are generated.
- Day 1 metadata, sections, checklist, mini-test, and artifacts parse correctly.
- Banks, projects, career, tracking, and foundation docs appear in the library.
- Search records include important terms such as `DSA-001`, `RabbitMQ`, and `ProblemDetails`.
- Progress persists and reloads from browser storage.
- Invalid progress imports are rejected.
- Imported progress is normalized to the current content hash while preserving stable IDs.

## Design Principles

- Local-first: no login, no backend, no cloud dependency.
- Markdown-first: edit curriculum in markdown, regenerate app content.
- Progress is portable: export/import JSON whenever needed.
- Study flow first: dashboard and study day are built for execution, not marketing.
- Low distraction: detailed inputs are collapsible, while status stays visible.
- Responsive by default: top navigation collapses on mobile and content stacks cleanly.

## Notes

- `src/data/prep-content.json` is generated from the markdown and can be regenerated at any time.
- `dist/`, `node_modules/`, caches, logs, local env files, and exported progress JSON files are ignored by git.
- Browser local storage is device/browser-specific, so export progress before switching browsers, clearing site data, or moving machines.
