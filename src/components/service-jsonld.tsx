import { localePath } from '@base/lib/seo';
import { type Lang } from '@base/locales/langs';
import { APP_HOST } from '@base/config-global';
import { SEO, type RouteKey } from '@base/locales/seo';

import { ORG_ID } from './structured-data';

// ----------------------------------------------------------------------
// schema.org Service node for a service landing page. Server component - the
// copy comes from the typed SEO dictionary, so it matches the page <title> and
// description exactly. `provider` points at the site-wide Organization node.

type Props = {
    lang: Lang;
    routeKey: RouteKey;
    serviceType: string;
};

export default function ServiceJsonLd({ lang, routeKey, serviceType }: Props) {
    const entry = SEO[lang][routeKey];
    const url = `${APP_HOST}${localePath(lang, routeKey)}`;

    const data = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${url}#service`,
        name: entry.title,
        description: entry.description,
        serviceType,
        url,
        inLanguage: lang === 'hr' ? 'hr-HR' : 'en-US',
        provider: { '@id': ORG_ID },
    };

    return (
        <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
