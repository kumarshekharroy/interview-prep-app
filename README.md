# Fullstack Prep

Fullstack Prep is a local-first web app for working through a six-month senior full-stack interview curriculum. It turns the Markdown material in [`senior-fullstack-interview-prep/`](senior-fullstack-interview-prep/) into a daily study plan with a roadmap, searchable library, and progress trackers.

## Features

- Guided study pages for 168 days across 24 weeks
- Dashboard and roadmap for tracking progress
- Searchable curriculum and project material
- Trackers for weak areas, scores, readiness, and applications
- JSON export and import for moving progress between browsers or devices

## Your data

Progress, notes, and application details are stored in your browser's local storage. The app has no account or server-side progress store. Data will not transfer automatically to another browser, device, or site domain; use **Settings → Export JSON** and **Import progress** to move it.

Exports can contain personal notes and application details. Keep them private and avoid committing them to the repository. The standard export filenames are covered by [`.gitignore`](.gitignore).

## Run locally

Use Node.js 22 and npm:

```bash
npm ci
npm run dev
```

Open the URL shown by Vite. The development command generates app content from the Markdown source before starting the server.

| Command | Purpose |
| --- | --- |
| `npm start` | Generate content, start Vite, and open the browser |
| `npm run generate` | Rebuild `src/data/prep-content.json` from Markdown |
| `npm test` | Generate content and run tests |
| `npm run build` | Generate content, type-check, and build into `dist/` |
| `npm run preview` | Preview the production build locally |

## Deploy on Cloudflare Pages

Connect the repository to [Cloudflare Pages](https://developers.cloudflare.com/pages/get-started/git-integration/) and use these build settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Root directory | Repository root |
| Framework preset | React (Vite) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Environment variable | `NODE_VERSION=22` |

The app builds at `/` and uses hash-based navigation. Cloudflare Pages handles deployment; the GitHub Actions workflow runs validation only. Add a custom domain through the Pages project's **Custom domains** settings and follow [Cloudflare's DNS instructions](https://developers.cloudflare.com/pages/configuration/custom-domains/).

The canonical URL and social metadata in [`index.html`](index.html), plus [`robots.txt`](public/robots.txt) and [`sitemap.xml`](public/sitemap.xml), target `fullstack-prep.lunarping.com`. Update these files if deploying a fork to another domain.

## Project structure

| Path | Purpose |
| --- | --- |
| `senior-fullstack-interview-prep/` | Source Markdown curriculum |
| `scripts/generate-content.mjs` | Markdown parser and content generator |
| `src/data/prep-content.json` | Generated app content |
| `src/App.tsx` | App UI and hash routes |
| `src/lib/progress.ts` | Local progress, backup, import, and export |
| `src/styles/app.css` | App styling |
| `public/` | Favicon, social card, sitemap, and crawler rules |
| `tests/` | Parser and progress tests |
