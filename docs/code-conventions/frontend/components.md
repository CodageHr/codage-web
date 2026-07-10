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

## MUI 9 patterns

- **Grid** uses the `size` prop — the old `item` / `xs` / `md` props were removed:

  ```tsx
  // ✅ MUI 9
  <Grid container spacing={2}>
    <Grid size={{ xs: 12, md: 6 }}>…</Grid>
  </Grid>

  // ❌ pre-v7 (do not use)
  <Grid item xs={12} md={6}>…</Grid>
  ```

- **System props are removed in v9.** `mt`, `mb`, `p`, `px`, `display`, `alignItems`,
  `color`, `bgcolor`, etc. are no longer accepted directly on `Box`, `Typography`,
  `Stack`, `Grid`, or `Link` — put them in `sx`:

  ```tsx
  <Box sx={{ display: 'flex', mt: 2 }}>…</Box>   // ✅   not <Box display="flex" mt={2}>
  ```

  For component slots (e.g. `ListItemText` `slotProps.primary`), use `variant` for the
  typography variant and `sx` for spacing/color — not the old `typography`/`mb` shorthands.
- Prefer the **`sx`** prop over inline `style`, using theme tokens (`p: 3`, `mb: 1`,
  `color: 'primary.main'`). When a wrapper forwards a caller `sx`, use the array form
  so an array/function `sx` still merges: `sx={[base, ...(Array.isArray(sx) ? sx : [sx])]}`.
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
- Loading buttons use MUI 9's `<Button loading>` — `@mui/lab/LoadingButton` is deprecated.
