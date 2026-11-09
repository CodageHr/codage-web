// ----------------------------------------------------------------------
// Pure locale constants - deliberately NOT 'use client'.
//
// config-lang.ts is a client module (it pulls in MUI locale bundles and
// date-fns adapters). Importing a *value* from a client module into server code
// gives you a client-reference proxy, not the real value - generateStaticParams
// would then blow up with "LANGS.map is not a function". Anything the server
// needs (route params, metadata, sitemap) lives here instead.
// ----------------------------------------------------------------------

/** The locales this site is built for. Drives the [lang] route segment. */
export type Lang = 'hr' | 'en';

export const LANGS: readonly Lang[] = ['hr', 'en'];

export const DEFAULT_LANG: Lang = 'hr';

export const isLang = (value: unknown): value is Lang =>
    typeof value === 'string' && (LANGS as readonly string[]).includes(value);

/**
 * Narrows the [lang] route param. Next generates it as `string`, while
 * `dynamicParams = false` already guarantees it is a generated locale - the
 * fallback is only here so an invalid value degrades instead of throwing.
 */
export const toLang = (value: string): Lang => (isLang(value) ? value : DEFAULT_LANG);
