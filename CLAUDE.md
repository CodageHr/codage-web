# CLAUDE.md

## Project Overview

**Codage Web** — the Codage marketing website. A Next.js frontend derived from the
Minimal UI template.

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript 6
- **UI:** MUI 7 (`@mui/material`, `@mui/x-*`) + Emotion (custom App Router cache)
- **Data:** SWR + Axios · **State:** React Context (no Redux)
- **Forms:** react-hook-form + Yup · **i18n:** i18next (`hr` default, `en`)
- **Package manager:** npm · **Node:** 22 (see `.nvmrc`) · **Dev port:** 8082

> The **backend (Laravel REST API) lives in a SEPARATE repository** (production:
> `https://api.codage.hr`). This repo is frontend-only. The frontend calls the
> backend via `NEXT_PUBLIC_BACKEND_HOST_API` (see `.env.example`, `src/utils/axios.ts`).

## Common Commands

```bash
npm run dev        # dev server on http://localhost:8082
npm run build      # production build (Turbopack)
npm run start      # serve the production build on 8082
npm run lint       # ESLint 9 (eslint.config.mjs)
npm run lint:fix   # ESLint autofix
npm run prettier   # format
npm run ts         # tsc --noEmit (type check)
```

Docker (dev, frontend only — backend runs from its own repo):

```bash
./docker-start            # start (http://localhost:8082)
./docker-start --build    # force rebuild
./docker-stop             # stop
```

## General Rules

- **Do NOT hardcode user-facing strings** — use i18next keys and add them to **both**
  `src/locales/langs/hr.json` and `en.json`.
- **Do NOT hardcode API URLs** — use `src/config-global.ts` / `src/utils/axios.ts`
  (env: `NEXT_PUBLIC_BACKEND_HOST_API`).
- **MUI 7 Grid** uses the `size` prop, never `item` / `xs=` (see conventions).
- **Icons** come from Iconify (`@components/iconify`), not `@mui/icons-material`.
- **No Redux** — global state is React Context; scoped data is SWR.
- Preserve **SSR i18n parity** (`initImmediate: false` + the `localStorageGetItem`
  default) — regressions cause React 19 hydration errors. See [i18n](docs/code-conventions/frontend/i18n.md).
- Run `npm run lint`, `npm run ts`, and `npm run build` before pushing. `next build`
  does **not** run ESLint in Next 16.
- Do not commit `.env` (keep `.env.example` current).

## Coding Conventions

All conventions live in [`docs/code-conventions/`](docs/code-conventions/README.md) —
the single source of truth.

- [Architecture](docs/code-conventions/architecture.md) — layers, sections vs components, providers, global state
- [Git Workflow](docs/code-conventions/git-workflow.md) — branches, commits, pre-push checklist
- **Frontend**: [Components](docs/code-conventions/frontend/components.md) · [Forms](docs/code-conventions/frontend/forms.md) · [Data Fetching](docs/code-conventions/frontend/data-fetching.md) · [TypeScript](docs/code-conventions/frontend/typescript.md) · [i18n](docs/code-conventions/frontend/i18n.md) · [Styling & Theme](docs/code-conventions/frontend/styling-theme.md)
