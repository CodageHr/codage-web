# Data Fetching

Read data uses **SWR**; the HTTP client is **Axios**, configured in
`src/utils/axios.ts`. There is no Redux — global state is React Context.

## Axios instances (`utils/axios.ts`)

| Export | Base URL | Use for |
|---|---|---|
| `axiosInstance` (default) | `HOST_API` | Minimal UI template/demo endpoints. |
| `axiosBackendInstance` | `${BACKEND_HOST_API}/api` | The real **Codage Laravel backend** (separate repo). |
| `fetcher` | — | SWR fetcher (`useSWR(url, fetcher)`). |
| `endpoints` | — | Central map of endpoint paths — add new paths here, don't inline strings. |

Backend base URLs come from env (`src/config-global.ts` → `HOST_API`,
`BACKEND_HOST_API`), driven by `NEXT_PUBLIC_HOST_API` / `NEXT_PUBLIC_BACKEND_HOST_API`.
Never hardcode API URLs in components.

## SWR

- Put data hooks in `src/api/<domain>.ts` and consume them from sections.
- Let key changes drive fetching — **do not** wrap SWR in `useEffect`.

```ts
import useSWR from 'swr';
import { fetcher, endpoints } from '@utils/axios';

export function useGetPosts() {
    const { data, isLoading, error } = useSWR(endpoints.post.list, fetcher);
    return { posts: data?.posts ?? [], postsLoading: isLoading, postsError: error };
}
```

## Global state, not fetching

Authenticated user, permissions and theme settings live in Context
(`AuthProvider`, `SettingsProvider`) — not in SWR or component state.

## Server-side email

The contact form sends email server-side via `src/api/mail.ts` + `src/utils/email.ts`
(Mailjet, `node-mailjet`). Keep mail/secret logic server-only — never import it into
client components.
