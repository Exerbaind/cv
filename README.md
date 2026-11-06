# Dmitry Shamal · CV

Personal résumé website built with React, TypeScript and Vite. Includes Russian and English versions, light and dark themes and an A4 print layout.

## Development

```sh
bun install --frozen-lockfile
bun run dev
```

## Checks and build

```sh
bun run format:check
bun run build
bun run preview
```

The production output is `dist/`.

## Deployment

Connect the GitHub repository to a static hosting provider, or upload the contents of `dist/` to a static web server.

- Install command: `bun install --frozen-lockfile`
- Build command: `bun run build`
- Output directory: `dist`
- By default, publish at the domain root. Set `VITE_BASE_PATH=/cv/` for project Pages.

Keep `bun.lock` in Git. Dependencies, build output, local environment files and temporary files are excluded by `.gitignore`.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and publishes `dist/` on pushes to `master`. In repository Settings → Pages, choose **GitHub Actions** as Source.

The workflow gets the base path from GitHub Pages configuration, so it supports both `/cv/` and a custom domain. For a local Pages build:

```sh
VITE_BASE_PATH=/cv/ bun run build
```

## Content

- `src/mock/content.ts`: both languages, experience, project descriptions and skills.
- `public/resume-ru.pdf` and `public/resume-en.pdf`: downloadable résumés. Update these separately when experience changes; editing the website does not update the PDFs.
- `src/styles/print.css`: print layout; screen styles live beside their components.

English is the default language. Use `?lang=ru` or `?lang=en` to choose the language. Theme preferences are saved locally.

## Optional analytics

Analytics is disabled until both Umami values are configured. Copy `.env.example` to `.env.local` for local use, or set the same variables in the hosting build environment:

- `VITE_UMAMI_SCRIPT_URL`: HTTPS URL of the Umami tracker.
- `VITE_UMAMI_WEBSITE_ID`: website ID from Umami.

Rebuild after changing these values. Variables prefixed with `VITE_` are public browser configuration. The tracker respects Do Not Track.
