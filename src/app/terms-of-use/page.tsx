import { TermsOfUseView } from '@sections/legal/terms-of-use/view';

// ----------------------------------------------------------------------

export const metadata = {
    title: 'Uvjeti korištenja',
    description: 'Uvjeti korištenja internetske stranice www.codage.hr.',
    alternates: { canonical: '/terms-of-use/' },
};
export default function TermsOfUsePage() {

    return <TermsOfUseView />;

}
