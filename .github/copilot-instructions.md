## Project Overview

- **What this is:** A minimal React + Vite resume website scaffold using Tailwind v4 and React 19.
- **Entry points:** `index.html` loads `/src/main.jsx` which mounts `<App />` from `src/App.jsx`.
- **Styling:** Tailwind is included via `src/index.css` containing `@import "tailwindcss";` and integrated with `@tailwindcss/vite` in `vite.config.js`.

## Build & Dev Workflows (explicit commands)

- Start dev server with HMR: `npm run dev` (runs `vite`). Dev server default port is usually `5173`.
- Build for production: `npm run build` (runs `vite build`) — output goes to `dist`.
- Preview a production build locally: `npm run preview` (runs `vite preview`).
- Linting: `npm run lint` (runs `eslint .`) using `eslint.config.js`.

Files to inspect when changing workflows:
- `package.json` — npm scripts and dependencies (devDeps include `vite`, `tailwindcss`, `@vitejs/plugin-react`).
- `vite.config.js` — Vite plugins and build options.

## Project Conventions & Patterns (discoverable)

- JavaScript + JSX only: `package.json` uses `"type": "module"` and there is no TypeScript config.
- React entry: `src/main.jsx` uses `StrictMode` and `react-dom/client` `createRoot` API.
- Styles: Tailwind utilities are used directly in JSX (see `src/App.jsx`). When adding new classes, keep them in component markup rather than global CSS unless layout-wide.
- ESLint: `eslint.config.js` is the single source of truth. It ignores `dist`, enables recommended JS rules, React Hooks rules, and a Vite/refresh plugin. Rule note: `no-unused-vars` is configured to ignore names matching `^[A-Z_]`.

## Integration Points & External Dependencies

- Vite dev server and build (`vite`) — primary dev/build tool.
- Tailwind v4 integration via `@tailwindcss/vite` plugin in `vite.config.js`.
- React + ReactDOM v19 — use the new `createRoot` API (already used in `src/main.jsx`).
- ESLint configuration via `eslint.config.js` with plugin `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh` for Vite.

## Guidance for AI Coding Agents (concise rules)

1. Keep changes minimal and local to files that reflect the feature:
   - UI changes: edit `src/*.jsx` and `src/index.css` only.
   - Build/dev changes: edit `vite.config.js` and `package.json` scripts.
   - Linting changes: edit `eslint.config.js`.
2. Preserve existing project style: prefer small, incremental edits to `App.jsx` rather than sweeping refactors.
3. When adding CSS utilities, prefer Tailwind classes in components. If adding configuration for Tailwind, add a `tailwind.config.js` at project root and update `vite.config.js` only if new plugins are required.
4. Do not add TypeScript or a different module system without explicit approval — the repo is JS-only.
5. There are no test runners configured — do not add tests unless requested; if you do, include test scripts in `package.json`.

## Examples (use these snippets as patterns)

- Dev server start: `npm run dev` — check `index.html` then `src/main.jsx` for entrypoints.
- Tailwind import: `src/index.css` contains `@import "tailwindcss";` — to extend, add `tailwind.config.js`.
- Lint: `npm run lint` uses `eslint.config.js` — follow the `no-unused-vars` exception pattern.

## When to modify other files

- If you add a global layout or head tags, update `index.html`.
- If you change build outputs (different folder or base path), update `vite.config.js` and any static asset paths in `index.html`.

---
If any section is unclear or you'd like a different focus (for example, more guidance for PR descriptions, commit message style, or testing conventions), tell me which area to expand and I will update this file.
