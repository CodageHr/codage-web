import { CookiePolicyView } from '@sections/legal/cookies/view';

// ----------------------------------------------------------------------

export const metadata = {
    title: 'Politika kolačića',
    description:
        'Politika kolačića — koje kolačiće koristi web stranica Codage i kako upravljati postavkama.',
    alternates: { canonical: '/cookies/' },
};
export default function CookiePolicy() {

    return <CookiePolicyView />;

}
