import { MetadataRoute } from 'next';

import { APP_HOST } from '@base/config-global';

// ----------------------------------------------------------------------

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/error/', '/coming-soon/', '/maintenance/'],
        },
        sitemap: `${APP_HOST}/sitemap.xml`,
        host: APP_HOST,
    };
}
