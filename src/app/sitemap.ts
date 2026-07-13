import { MetadataRoute } from 'next'

import { APP_HOST } from '@base/config-global';

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    const page = (path: string, priority: number, changeFrequency: 'monthly' | 'yearly') => ({
        url: `${APP_HOST}${path}`,
        lastModified,
        changeFrequency,
        priority,
    });

    // Trailing slashes to match per-page canonicals (next.config trailingSlash:true),
    // so crawlers hit the final URL directly instead of a 308 redirect.
    return [
        page('/', 1, 'monthly'),
        page('/about-us/', 0.8, 'monthly'),
        page('/contact-us/', 0.8, 'monthly'),
        page('/legal-info/', 0.5, 'yearly'),
        page('/privacy-policy/', 0.5, 'yearly'),
        page('/terms-of-use/', 0.5, 'yearly'),
        page('/cookies/', 0.5, 'yearly'),
    ];
}
