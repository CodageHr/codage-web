# Git Workflow

## Branches

- Branch off `main` for every change: `feat/…`, `fix/…`, `chore/…`, `upgrade/…`.
- Never commit directly to `main`.

## Commits

- Small, focused commits with imperative messages (`fix services display order`).
- Keep unrelated formatting churn out of feature commits (e.g. a large `lint:fix`
  or codemod pass belongs in its **own** commit).

## Pre-push checklist

Run these before pushing — all must pass:

```bash
npm run lint      # ESLint 9 (eslint.config.mjs)
npm run ts        # tsc --noEmit (type check)
npm run build     # next build (Turbopack)
```

`next build` does **not** run ESLint in Next 16, so `npm run lint` and `npm run ts`
are separate gates — do not rely on the build to catch lint/type issues.

## Do not commit

- `.env` (secrets/local config — it is git-ignored; keep `.env.example` current instead).
- `node_modules`, `.next`, `build`, generated artifacts.
- Lockfile churn from a different package manager — this project uses **npm**
  (`package-lock.json`); there is no `yarn.lock`.
