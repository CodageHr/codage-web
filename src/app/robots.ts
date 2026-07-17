import { MetadataRoute } from 'next';

import { APP_HOST } from '@base/config-global';

// ----------------------------------------------------------------------

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            // EN legal pages are kept crawlable on purpose: they carry a
            // <meta robots="noindex">, and a disallowed page is never fetched, so
            // the noindex would never be seen. Crawlable + noindex is the only
            // combination that actually keeps them out of the index.
            allow: '/',
        },
        sitemap: `${APP_HOST}/sitemap.xml`,
        host: APP_HOST,
    };
}
