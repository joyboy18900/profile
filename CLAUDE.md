# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
pnpm dev           # Start dev server (Vite)

# Build
pnpm build         # Type-check + build (runs type-check and build-only in parallel)
pnpm build-only    # Build without type-check
pnpm type-check    # Run vue-tsc type check only

# Code quality
pnpm lint          # ESLint with auto-fix
pnpm format        # Prettier format src/

# Preview production build
pnpm preview
```

## Architecture

This is a **Vue 3 personal profile/resume SPA** built with Vite, TypeScript, Tailwind CSS, and Pinia.

### Data flow

All resume content lives in two JSON files: `src/assets/json/resume.en.json` and `src/assets/json/resume.th.json`. These are typed via `src/models/Resume.ts` and its sub-interfaces (`Profile`, `Experience`, `Education`, `Certificate`, `Project`, `Language`, `InfoItem`).

The `ResumeStore` (Pinia) loads the correct JSON based on the locale stored in `localStorage.locale`. Components read from this store to render content — **to update resume data, edit the JSON files, not the components**.

### i18n

UI strings (labels, nav, etc.) are in `src/assets/i18n/en-US.json` and `src/assets/i18n/th-TH.json`. Resume content strings (bio, job titles, descriptions) are in the separate `resume.*.json` files above. Both locale and theme are persisted in `localStorage`.

### Layout

`App.vue` defines a fixed two-column layout: left sidebar (ProfileCard, ResumeCard, InfoCard, SkillCard, LanguageCard) and right main area (AboutCard + `<RouterView>`). The router mounts three views into the right column: ExperienceView (`/`), EducationView (`/education`), ProjectView (`/project`).

### Image paths

Images under `src/assets/` are resolved at build time via `getImagePath()` in `src/helpers/Helper.ts`, which uses `import.meta.glob`. Pass paths relative to `src/assets/` (e.g. `"img/profile/me.webp"`).

### Theme

`ThemeStore` toggles dark mode by adding/removing the `dark` class on `<html>`. Default is dark mode unless `localStorage.theme` is explicitly set to `'light'`.
