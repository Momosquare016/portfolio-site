# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a minimal React 19 + Vite resume website using Tailwind CSS v4. The project uses JavaScript with JSX (no TypeScript) and follows a modern React setup with the `createRoot` API.

**Entry Flow:**
- `index.html` → `/src/main.jsx` (React root with StrictMode) → `src/App.jsx` (main component)

**Styling Architecture:**
Tailwind v4 is integrated via `@tailwindcss/vite` plugin directly in Vite, not through PostCSS. The `src/index.css` imports Tailwind, and all styling uses utility classes in JSX components rather than custom CSS files.

## Development Commands

```bash
npm run dev       # Start dev server (default port 5173)
npm run build     # Production build to dist/
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## Key Configuration Files

- `package.json` — Module type is "module", React 19.2.0, Vite 7.2.2, Tailwind 4.1.17
- `vite.config.js` — Uses @vitejs/plugin-react (Babel-based Fast Refresh)
- `tailwind.config.js` — Scans `index.html` and `src/**/*.{js,jsx}` for classes
- `eslint.config.js` — Flat config format, ignores `dist/`, custom rule: allows unused vars matching `^[A-Z_]`

## Architecture Notes

**Component Structure:**
Currently minimal with just `App.jsx`. When adding components, follow the pattern of functional components with Tailwind utilities.

**Styling Strategy:**
- Use Tailwind utility classes directly in JSX
- Global styles go in `src/index.css` only for layout-wide concerns
- Tailwind customization happens in `tailwind.config.js` (theme extensions, plugins)

**Build Output:**
Production builds go to `dist/` via Vite. The build process includes asset optimization and code splitting.

## Important Constraints

1. **JavaScript Only:** No TypeScript configured. Do not add TS without explicit approval.
2. **No Test Framework:** Tests are not configured. Don't add testing libraries unless requested.
3. **Module System:** Uses ES modules (`"type": "module"` in package.json)
4. **React Version:** Uses React 19 with `createRoot` API (not legacy `render`)

## When Making Changes

**UI/Component Changes:**
- Edit files in `src/` (primarily `App.jsx` currently)
- Use Tailwind utility classes for styling
- Keep changes incremental rather than sweeping refactors

**Build/Dev Changes:**
- Modify `vite.config.js` for Vite plugins or build options
- Update `package.json` scripts for new commands

**Styling Configuration:**
- Extend `tailwind.config.js` theme for custom colors, spacing, etc.
- Add Tailwind plugins in `tailwind.config.js` plugins array

**Global Changes:**
- Update `index.html` for meta tags, title, or global scripts
- Modify base path or output directory in `vite.config.js` if needed
 

## Other important conditions 
**comments:**
-add comments for each and every code as if a new coder has started coding so i can understand and learn.
