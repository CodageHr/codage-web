'use client';

import { APP_HOST } from '@base/config-global';
import { useCurrentLang } from '@base/locales/i18n-provider';
import { localizeHref } from '@routes/localize-href';

// ----------------------------------------------------------------------
// Callers pass locale-free paths ('/', '/about-us'); legal-post-header passes an
// already-prefixed usePathname() ('/hr/privacy-policy/'). localizeHref is
// idempotent, so it normalises both to the canonical locale-prefixed URL.

type Crumb = { name: string; path: string };

export default function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
    const lang = useCurrentLang();

    const data = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            item: `${APP_HOST}${localizeHref(item.path, lang)}`,
        })),
    };

    return (
        <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
