import { InfoView } from '@sections/legal/info/view';

// ----------------------------------------------------------------------

export const metadata = {
    title: 'Pravni podaci',
    description:
        'Pravni podaci tvrtke Codage d.o.o. — adresa, OIB, MBS, temeljni kapital i kontakt informacije.',
    alternates: { canonical: '/legal-info/' },
};
export default function LegalInfoPage() {

    return <InfoView />;


}
