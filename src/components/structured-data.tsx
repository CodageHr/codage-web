import { APP_HOST, APP_NAME } from '@base/config-global';

// ----------------------------------------------------------------------
// Site-wide JSON-LD @graph: Organization (+ ContactPoint) + WebSite.
// Company facts from HANDOFF §7.

const ORG_ID = `${APP_HOST}/#organization`;

const graph = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': ['Organization', 'ProfessionalService'],
            '@id': ORG_ID,
            name: 'Codage d.o.o.',
            alternateName: APP_NAME,
            url: APP_HOST,
            logo: `${APP_HOST}/logo/codage-mark.svg`,
            image: `${APP_HOST}/og-image.png`,
            email: 'kontakt@codage.hr',
            telephone: '+385 98 403 330',
            vatID: 'HR49369795577',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Put gaja 6',
                addressLocality: 'Srinjine',
                postalCode: '21292',
                addressRegion: 'Split',
                addressCountry: 'HR',
            },
            founder: { '@type': 'Person', name: 'Petar Vrkić' },
            contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer support',
                email: 'kontakt@codage.hr',
                telephone: '+385 98 403 330',
                areaServed: 'HR',
                availableLanguage: ['hr', 'en'],
            },
            openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '16:00',
            },
        },
        {
            '@type': 'WebSite',
            '@id': `${APP_HOST}/#website`,
            url: APP_HOST,
            name: APP_NAME,
            inLanguage: 'hr-HR',
            publisher: { '@id': ORG_ID },
        },
    ],
};

export default function StructuredData() {
    return (
        <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
    );
}
