import type { Metadata } from 'next';

import { type Lang } from '@base/locales/langs';
import { SEO, type RouteKey } from '@base/locales/seo';

// ----------------------------------------------------------------------

/** URL segment per route. '' = the locale home. */
const SEGMENT: Record<RouteKey, string> = {
    home: '',
    about: 'about-us',
    contact: 'contact-us',
    webApps: 'services/web-applications',
    mobileApps: 'services/mobile-applications',
    designConsulting: 'services/design-consulting',
    legalInfo: 'legal-info',
    privacyPolicy: 'privacy-policy',
    termsOfUse: 'terms-of-use',
    cookies: 'cookies',
};

/**
 * Routes that exist in English for readability but are kept OUT of the index:
 * the Croatian originals are authoritative, and indexing a second copy of the
 * same legal text only adds duplicate/thin content.
 */
const EN_NOINDEX: readonly RouteKey[] = ['legalInfo', 'privacyPolicy', 'termsOfUse', 'cookies'];

/** Locale-prefixed, trailing-slashed path — matches next.config trailingSlash:true. */
export const localePath = (lang: Lang, key: RouteKey): string =>
    SEGMENT[key] ? `/${lang}/${SEGMENT[key]}/` : `/${lang}/`;

export const isEnNoindex = (key: RouteKey): boolean => EN_NOINDEX.includes(key);

// ----------------------------------------------------------------------

/**
 * Per-locale page metadata: title, description, canonical and hreflang.
 *
 * Intentionally does NOT set `openGraph`. Next.js REPLACES nested metadata
 * objects rather than merging them, so an openGraph here would drop the
 * layout's og:image/siteName. The [lang] layout owns openGraph (per-locale),
 * and Next derives og:title/og:description from the page's title/description.
 */
export function buildMetadata(lang: Lang, key: RouteKey): Metadata {
    const entry = SEO[lang][key];

    // hreflang must be reciprocal: never advertise a noindex page as an
    // alternate, so the pair is dropped from BOTH locales, not just the EN side.
    const hidePair = isEnNoindex(key);

    return {
        // The home title is a full title, not a "%s | Codage" suffix target.
        title: key === 'home' ? { absolute: entry.title } : entry.title,
        description: entry.description,
        alternates: {
            canonical: localePath(lang, key),
            ...(hidePair
                ? {}
                : {
                    languages: {
                        hr: localePath('hr', key),
                        en: localePath('en', key),
                        'x-default': localePath('hr', key),
                    },
                }),
        },
        // noindex + follow only. No canonical pointing at the HR version:
        // noindex and a cross-language canonical are contradictory signals.
        ...(hidePair && lang === 'en' ? { robots: { index: false, follow: true } } : {}),
    };
}
