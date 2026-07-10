# Architecture

Codage is a **Next.js 16 App Router** marketing website derived from the Minimal UI
template. The Laravel backend is a **separate repository** — this repo contains only
the frontend.

## Layers (`src/`)

| Directory | Responsibility |
|---|---|
| `app/` | Routes, layouts, pages. `app/layout.tsx` is a **server component** (async, reads `cookies()`). Route folders: `home`, `services`, `coming-soon`, `cookies`, `legal-info`, `privacy-policy`, `terms-of-use`, `maintenance`, `error/*`. |
| `sections/` | Page-level feature blocks that **compose components and own data fetching / business logic** (e.g. `sections/home`, `sections/services`, `sections/contact`). |
| `components/` | Generic, reusable UI with **no domain logic** (e.g. `iconify`, `hook-form`, `carousel`, `settings`, `snackbar`). |
| `layouts/` | Page shells: `main`, `legal`, `compact`, `simple`, `auth`, `dashboard`. |
| `theme/` | MUI 9 theme — palette, typography, shadows, `overrides/`, `options/`, Emotion cache. |
| `auth/` | JWT auth context + guards + hooks (only the `jwt` provider is wired). |
| `hooks/`, `utils/`, `locales/`, `routes/`, `types/`, `assets/` | Custom hooks, utilities (incl. `utils/axios.ts`), i18n, routing, shared types, static assets. |
| `api/` | SWR data hooks per domain, built on `utils/axios.ts` (`fetcher` + `endpoints`). |

## Global state

Use **React Context**, not Redux (there is no Redux in this project):

- `SettingsProvider` (`components/settings`) — theme mode/direction/contrast/preset.
- `AuthProvider` (`auth/context/jwt`) — authenticated user + JWT.

Scoped/read data uses **SWR** (see [data-fetching](frontend/data-fetching.md)).

## Provider stack (`app/layout.tsx`)

```
AuthProvider → LocalizationProvider → SettingsProvider → ThemeProvider
  → MotionLazy → SnackbarProvider → { app }
```

## Client vs Server components

- `app/layout.tsx` and route `page.tsx` files are server components by default.
- Add `'use client'` to any component that uses hooks, state, browser APIs, MUI
  interactivity, `useTranslate`, or Emotion `styled`.
- The i18n instance is initialised on the client via a side-effect import in
  `locales/use-locales.ts` (see [i18n](frontend/i18n.md)).

## Reuse first

Before adding code, look for an existing component/hook/util/section that already
does it. Prefer extending template primitives (`Iconify`, `hook-form/*`,
`utils/axios`) over introducing new dependencies.
