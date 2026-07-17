import { type Lang } from '@base/locales/langs';
import { APP_HOST, APP_NAME } from '@base/config-global';

// ----------------------------------------------------------------------
// Site-wide JSON-LD @graph: Organization (+ ContactPoint) + WebSite.
// Company facts from HANDOFF §7.

const ORG_ID = `${APP_HOST}/#organization`;

const buildGraph = (lang: Lang) => ({
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
                // A fact about the business, not about the page language — stays 'HR'.
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
            // One WebSite node for the site, not one per locale.
            '@id': `${APP_HOST}/#website`,
            url: APP_HOST,
            name: APP_NAME,
            inLanguage: lang === 'hr' ? 'hr-HR' : 'en-US',
            publisher: { '@id': ORG_ID },
        },
    ],
});

type Props = {
    lang: Lang;
};

export default function StructuredData({ lang }: Props) {
    return (
        <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(buildGraph(lang)) }}
        />
    );
}
