# Codage Web — Code Conventions

Single source of truth for coding conventions in the **Codage** frontend (Next.js
marketing website). These docs are agent-agnostic — they are referenced by
`CLAUDE.md`, `AGENTS.md`, and any other AI assistant so every contributor applies
the same rules.

> This is a **frontend-only** repository. The Laravel backend lives in a separate
> repo; the frontend talks to it over HTTP via `NEXT_PUBLIC_BACKEND_HOST_API`.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript 6**
- **MUI 9** (`@mui/material`, `@mui/x-*`) + **Emotion** (CSS-in-JS, custom App Router cache)
- **SWR** + **Axios** for data fetching · **React Context** for global state (no Redux)
- **react-hook-form** + **Yup** for forms · **i18next** for localization (`hr`, `en`)
- **ESLint 9** flat config (`eslint.config.mjs`) · **Prettier 3**

## Contents

### General
- [Architecture](architecture.md) — layers, sections vs components, providers, global state
- [Git Workflow](git-workflow.md) — branches, commits, pre-push checklist

### Frontend
- [Components](frontend/components.md) — sections vs components, MUI 9 patterns, App Router
- [Forms](frontend/forms.md) — react-hook-form + Yup, `FormProvider`, RHF wrappers
- [Data Fetching](frontend/data-fetching.md) — SWR, Axios instances, the separate backend
- [TypeScript](frontend/typescript.md) — type organization, path aliases, lint/format
- [i18n](frontend/i18n.md) — `useTranslate`, locale files, SSR-safe init
- [Styling & Theme](frontend/styling-theme.md) — MUI 9 theme, palette augmentation, Emotion cache
