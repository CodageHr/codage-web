# AGENTS.md

Guidance for any AI coding agent working in this repository. It is intentionally
thin — the real rules are the shared convention docs.

## Before writing code

1. Read [`docs/code-conventions/`](docs/code-conventions/README.md) — the single
   source of truth for conventions.
2. Read [`CLAUDE.md`](CLAUDE.md) for project overview, commands, and hard rules.
3. Look for an existing component / hook / util / section that already solves the
   task before adding new code or dependencies.

## Project in one line

Frontend-only Next.js 16 + React 19 + MUI 7 marketing site (App Router, TypeScript,
SWR + Context, i18next `hr`/`en`). The Laravel backend is a **separate repo**,
reached via `NEXT_PUBLIC_BACKEND_HOST_API`.

## Hard rules (see CLAUDE.md for detail)

- No hardcoded user-facing strings → i18n keys in `hr.json` **and** `en.json`.
- No hardcoded API URLs → `src/config-global.ts` / `src/utils/axios.ts`.
- MUI 7 `Grid` uses `size`; icons via Iconify; no Redux (Context + SWR).
- Keep SSR i18n parity (no hydration errors).
- Before pushing: `npm run lint` · `npm run ts` · `npm run build`.

## Convention reference

| Topic | Doc |
|---|---|
| Architecture, layers, providers | [architecture.md](docs/code-conventions/architecture.md) |
| Git workflow, pre-push | [git-workflow.md](docs/code-conventions/git-workflow.md) |
| Components, MUI 7, App Router | [frontend/components.md](docs/code-conventions/frontend/components.md) |
| Forms (RHF + Yup) | [frontend/forms.md](docs/code-conventions/frontend/forms.md) |
| Data fetching (SWR, Axios) | [frontend/data-fetching.md](docs/code-conventions/frontend/data-fetching.md) |
| TypeScript, aliases, lint/format | [frontend/typescript.md](docs/code-conventions/frontend/typescript.md) |
| i18n | [frontend/i18n.md](docs/code-conventions/frontend/i18n.md) |
| Styling & theme | [frontend/styling-theme.md](docs/code-conventions/frontend/styling-theme.md) |
