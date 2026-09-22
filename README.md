# Seyed Ali Hosseini — Portfolio

A static comic-book portfolio built with Astro, TypeScript, and vanilla CSS. The visual direction is documented in [`idea/`](idea/).

http://ali79hm.github.io/

## Run locally

```bash
npm install
npm run dev
```

Astro prints the local URL, normally `http://localhost:4321`.

## Quality checks

```bash
npm run check
npm run build
```

The production site is generated in `dist/`.

## Project structure

```text
src/
├── components/   reusable navigation, icons, and headings
├── layouts/      shared HTML document shell
├── pages/        site routes
└── styles/       responsive comic design system
public/           final images, icons, and downloadable files
idea/             design references and planning notes
```

All portfolio copy remains real HTML. Final comic illustrations should be optimized WebP/AVIF files placed under `public/images/`, then substituted for the labeled artwork placeholders.

## GitHub Pages

The included workflow deploys every push to `main`. In the repository settings, set **Pages → Source** to **GitHub Actions**. The workflow automatically handles both `ali79hm.github.io` and project-repository URLs.
