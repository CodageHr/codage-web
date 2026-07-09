# TypeScript

- **Strict mode** is on (`tsconfig.json`). Type check with `npm run ts`.
- Prefer `type` aliases over `interface` (use `interface` only for MUI module
  augmentation and when declaration merging is required).
- Shared/domain types live in `src/types/*` (alias `@appTypes`), one file per domain.

## Path aliases

Import via aliases, not long relative paths:

| Alias | Path |
|---|---|
| `@base/*` | `src/*` |
| `@components/*` | `src/components/*` |
| `@sections/*` | `src/sections/*` |
| `@layouts/*` | `src/layouts/*` |
| `@theme/*` | `src/theme/*` |
| `@hooks/*` | `src/hooks/*` |
| `@utils/*` | `src/utils/*` |
| `@routes/*` | `src/routes/*` |
| `@locales/*` | `src/locales/*` |
| `@auth/*` | `src/auth/*` |
| `@assets/*` | `src/assets/*` |
| `@appTypes/*` | `src/types/*` |

## Extending MUI types

Extend component props by intersection, and always allow `sx`:

```ts
type HeroCardProps = CardProps & {
    title: string;
    sx?: SxProps<Theme>;
};
```

Custom theme fields (e.g. `palette.*.lighter/darker`, `customShadows`) are added via
module augmentation of `@mui/material/styles` — see [styling-theme](styling-theme.md).

## Lint & format

- **ESLint 9 flat config** in `eslint.config.mjs` (not `.eslintrc`).
- **4-space indentation, single quotes** (enforced by `@stylistic`).
- Imports are auto-sorted by `perfectionist` (by line length, grouped: external →
  `@mui` → routes → hooks → utils → internal → components → sections → theme →
  assets → types). Run `npm run lint:fix` to apply.
- Unused imports are removed by `unused-imports`.
