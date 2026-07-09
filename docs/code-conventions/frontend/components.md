# Components

## Sections vs Components

- **`src/sections/*`** — page-level blocks. They compose components, own data
  fetching (SWR) and page logic. One folder per page area (`home`, `services`,
  `about`, `contact`, `faqs`, `legal`, `error`, …).
- **`src/components/*`** — generic, reusable UI with **no domain logic**. If a
  block is specific to one page, it is a section; if it is reusable UI, it is a
  component.

## App Router

- Add `'use client'` at the very top of any component using hooks, state, effects,
  browser APIs, MUI interactivity, `useTranslate`, or Emotion `styled`.
- Server components (route `page.tsx`, `layout.tsx`) must not import client-only hooks.

## MUI 7 patterns

- **Grid** uses the `size` prop — the old `item` / `xs` / `md` props were removed:

  ```tsx
  // ✅ MUI 7
  <Grid container spacing={2}>
    <Grid size={{ xs: 12, md: 6 }}>…</Grid>
  </Grid>

  // ❌ pre-v7 (do not use)
  <Grid item xs={12} md={6}>…</Grid>
  ```

- Prefer the **`sx`** prop over inline `style`, using theme tokens (`p: 3`, `mb: 1`,
  `color: 'primary.main'`). For wrapper components, spread the caller's `sx` **last**
  so it can override: `sx={{ ...base, ...sx }}`.
- Access the theme via `useTheme()` + `alpha()` for opacity.
- Component-wide customisation goes in `theme/overrides/components/*` (keyed on
  `ownerState`), not ad-hoc `sx` repeated across call sites. See
  [styling-theme](styling-theme.md).

## Icons

Icons come from **Iconify**, not `@mui/icons-material`:

```tsx
import Iconify from '@components/iconify';
<Iconify icon="material-symbols:keyboard-arrow-right" width={20} />
```

## Props

- Type props as `Readonly<{ … }>` or a named `type {Component}Props`.
- Wrapper components should accept `sx?: SxProps<Theme>` and forward it.
- Loading buttons use MUI 7's `<Button loading>` — `@mui/lab/LoadingButton` is deprecated.
