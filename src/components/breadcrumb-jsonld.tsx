import { APP_HOST } from '@base/config-global';

// ----------------------------------------------------------------------

type Crumb = { name: string; path: string };

export default function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            item: `${APP_HOST}${item.path}`,
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
