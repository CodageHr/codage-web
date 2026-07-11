import { APP_HOST, APP_NAME } from '@base/config-global';

// ----------------------------------------------------------------------
// Organization + LocalBusiness JSON-LD (company facts from HANDOFF §7).

const data = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    name: 'Codage d.o.o.',
    alternateName: APP_NAME,
    url: APP_HOST,
    logo: `${APP_HOST}/logo/codage-mark.svg`,
    email: 'kontakt@codage.hr',
    telephone: '+385 98 403 330',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Put gaja 6',
        addressLocality: 'Srinjine',
        postalCode: '21292',
        addressRegion: 'Split',
        addressCountry: 'HR',
    },
    vatID: 'HR49369795577',
    founder: { '@type': 'Person', name: 'Petar Vrkić' },
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '16:00',
    },
};

export default function StructuredData() {
    return (
        <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
