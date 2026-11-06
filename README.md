# Dmitry Shamal · CV

Personal résumé website built with React, TypeScript and Vite. Includes Russian and English versions, light and dark themes, an A4 print layout and PWA support.

## Development

```sh
bun install --frozen-lockfile
bun run dev
```

## Checks and build

```sh
bun run format:check
bun test
bun run build
bun run preview
```

The production output is `dist/`.

## Deployment

Connect the GitHub repository to a static hosting provider, or upload the contents of `dist/` to a static web server.

- Install command: `bun install --frozen-lockfile`
- Build command: `bun run build`
- Output directory: `dist`
- Publish at the domain root. Asset paths and the PWA start URL use `/`.
- Enable HTTPS for PWA installation and offline support.

Keep `bun.lock` in Git. Dependencies, build output, local environment files and temporary files are excluded by `.gitignore`.

## Content

- `src/mock/content.ts`: both languages, experience, project descriptions and skills.
- `public/resume-ru.pdf` and `public/resume-en.pdf`: downloadable résumés. Update these separately when experience changes; editing the website does not update the PDFs.
- `scripts/build-resume-en.py`: English PDF generator (Python with `reportlab`).
- `docs/project-sources.json`: project image sources.
- `src/styles/print.css`: print layout; screen styles live beside their components.

English is served at `/`, Russian at `/ru/`. Old `?lang=ru` and `?lang=en` links still work in the browser. Theme preferences are saved locally.

## SEO

The build generates full HTML for both languages using the existing React components. No server runtime or additional framework is required. Titles, descriptions, social metadata and `ProfilePage`/`Person` structured data are included in each HTML file and updated when switching languages.

After buying a domain, set `VITE_SITE_URL` to its HTTPS origin (for example `https://your-domain.me`) in `.env.local` or the hosting build environment, then rebuild. This enables absolute canonical and hreflang links, `og:url` and `sitemap.xml`. Without a domain, the build omits these URLs instead of publishing placeholders. `robots.txt` is generated in either case.

Once deployed, submit `/sitemap.xml` in Google Search Console and Yandex Webmaster. Ensure the host serves `/ru/index.html` at `/ru/`; a generic SPA fallback should not override that file.

## Optional analytics

Analytics is disabled until both Umami values are configured. Copy `.env.example` to `.env.local` for local use, or set the same variables in the hosting build environment:

- `VITE_UMAMI_SCRIPT_URL`: HTTPS URL of the Umami tracker.
- `VITE_UMAMI_WEBSITE_ID`: website ID from Umami.

Rebuild after changing these values. Variables prefixed with `VITE_` are public browser configuration. The tracker respects Do Not Track.
