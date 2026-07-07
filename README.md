# Interview Prep OS

Interview Prep OS is a local-first web app for following a markdown-based interview preparation plan.

It keeps the prep curriculum in markdown, while providing a cleaner daily experience with a dashboard, guided study pages, search, progress tracking, weak-area notes, and JSON export/import.

## Hosted App

You can use the hosted version here:

```text
https://shekharroy.com/interview-prep-app/
```

## Overview

The app is built around two parts:

* **Curriculum content**: generated from markdown files in `senior-fullstack-interview-prep/`
* **Personal progress**: stored locally in the browser

Your progress is not written back into the markdown files. It stays local and can be exported or imported as a JSON file.

## Features

* Dashboard with current progress and next study day
* Roadmap for the full prep plan
* Guided daily study pages
* Searchable prep library
* Trackers for weak areas, scores, readiness, and job applications
* Local progress storage
* Progress export/import through JSON

## Getting Started

Install dependencies:

```bash
npm install
```

Start the app:

```bash
npm start
```

This generates the app content from markdown and opens the local app in your browser.

## Commands

```bash
npm run generate
```

Generate app content from markdown.

```bash
npm start
```

Generate content, start the app, and open it in the browser.

```bash
npm run dev
```

Generate content and start the dev server.

```bash
npm run build
```

Generate content, type-check, and build the production app.

```bash
npm run preview
```

Preview the production build locally.

```bash
npm test
```

Generate content and run tests.

## Main Screens

### Dashboard

Shows your current study status, progress, active days, weak areas, scores, and month-by-month progress.

### Roadmap

Shows the full prep plan. Each day can be opened and tracked individually.

### Study Day

Guides you through one day of prep with study content, checklist items, notes, scores, artifacts, and weak-area capture.

### Library

Lets you search and browse prep material across days, topics, banks, projects, career notes, and tracking files.

### Trackers

Provides sections for weak areas, weekly scores, readiness areas, and job applications.

### Settings

Lets you export progress, import saved progress, reset local progress, and view generated content metadata.

## Progress Storage

Progress is stored in browser local storage under:

```text
interview-prep-progress:v1
```

Exported progress files use names like:

```text
interview-prep-progress-YYYY-MM-DD.json
```

Export your progress before switching browsers, clearing site data, or moving to another machine.

## Project Structure

```text
senior-fullstack-interview-prep/
  Source markdown curriculum

scripts/generate-content.mjs
  Markdown parser and content generator

src/data/prep-content.json
  Generated app content

src/App.tsx
  Main app UI and routes

src/lib/progress.ts
  Progress storage, import/export, and helpers

src/types.ts
  Shared content and progress types

src/styles/app.css
  App styling

tests/
  Parser and progress tests
```

## Design Principles

* Markdown-first: curriculum stays easy to edit
* Local-first: no login, backend, or cloud dependency
* Portable progress: export and import JSON when needed
* Study-focused: built for daily execution, not just reading
* Low distraction: details stay available without cluttering the main flow
