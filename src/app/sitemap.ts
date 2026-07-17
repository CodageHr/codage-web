import { MetadataRoute } from 'next'

import { APP_HOST } from '@base/config-global';
import { LANGS, type Lang } from '@base/locales/langs';
import { type RouteKey } from '@base/locales/seo';
import { localePath, isEnNoindex } from '@base/lib/seo';

// ----------------------------------------------------------------------
// Both locales, minus the EN legal pages (noindex — see src/lib/seo). Each entry
// declares its hreflang alternates so the sitemap and the on-page <link rel>s
// tell Google the same thing. URLs are locale-prefixed and trailing-slashed to
// match the canonicals (next.config trailingSlash:true) — no 308 on crawl.

const PRIORITY: Record<RouteKey, number> = {
    home: 1,
    about: 0.8,
    contact: 0.8,
    legalInfo: 0.5,
    privacyPolicy: 0.5,
    termsOfUse: 0.5,
    cookies: 0.5,
};

const CHANGE_FREQ: Record<RouteKey, 'monthly' | 'yearly'> = {
    home: 'monthly',
    about: 'monthly',
    contact: 'monthly',
    legalInfo: 'yearly',
    privacyPolicy: 'yearly',
    termsOfUse: 'yearly',
    cookies: 'yearly',
};

const abs = (path: string) => `${APP_HOST}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    const routeKeys = Object.keys(PRIORITY) as RouteKey[];

    const entries: MetadataRoute.Sitemap = [];

    (LANGS as readonly Lang[]).forEach((lang) => {
        routeKeys.forEach((key) => {
            // EN legal pages are noindex → keep them out of the sitemap entirely.
            if (lang === 'en' && isEnNoindex(key)) return;

            entries.push({
                url: abs(localePath(lang, key)),
                lastModified,
                changeFrequency: CHANGE_FREQ[key],
                priority: PRIORITY[key],
                // hreflang alternates are dropped for the legal cluster (its EN
                // side is noindex, and hreflang must be reciprocal).
                ...(isEnNoindex(key)
                    ? {}
                    : {
                        alternates: {
                            languages: {
                                hr: abs(localePath('hr', key)),
                                en: abs(localePath('en', key)),
                            },
                        },
                    }),
            });
        });
    });

    return entries;
}
