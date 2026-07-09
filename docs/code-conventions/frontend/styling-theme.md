# Styling & Theme

Styling is **MUI 7 + Emotion** (CSS-in-JS). No Tailwind, no CSS modules. The theme
lives in `src/theme/`.

## Theme structure

- `theme/index.tsx` — `ThemeProvider`: builds the theme with `createTheme`, merges
  component `overrides/`, applies MUI locale via `useLocales().currentLang`, wraps
  children in the custom Emotion cache + `CssBaseline` + RTL.
- `theme/palette.ts`, `typography.ts`, `shadows.ts`, `custom-shadows.ts`, `css.ts`.
- `theme/overrides/components/*` — per-component style overrides (keyed on `ownerState`).
- `theme/options/` — color presets, contrast, right-to-left.

## Emotion cache (App Router)

SSR styling uses the custom cache in `theme/next-emotion-cache.tsx`
(`useServerInsertedHTML`). Do **not** replace it with `AppRouterCacheProvider`.

## MUI 7 gotchas (respect these)

- **Palette augmentation** targets the public module — `declare module
  '@mui/material/styles'` — not the internal `@mui/material/styles/createPalette`
  path (removed in v7). This is what makes `palette.primary.lighter` / `.darker`
  type-check.
- **`theme.shape.borderRadius` is `string | number`** in v7. Wrap arithmetic in
  `Number(...)`: `borderRadius: Number(theme.shape.borderRadius) * 1.25`.
- Extend `TypographyVariant` / typography types from `@mui/material/styles`
  (`Variant` is not exported — use `TypographyVariant`).

## Writing styles

- Prefer `sx` with theme tokens over inline `style`.
- Reach for a component override (theme-wide) before repeating the same `sx` at many
  call sites.
- Use `alpha(theme.palette.x, 0.n)` for translucency; `useTheme()` to read tokens.
