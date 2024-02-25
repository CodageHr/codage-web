import SimpleLayout from '@layouts/simple';

import { CookiePolicyView } from '@sections/legal/cookies/view';

// ----------------------------------------------------------------------

export const metadata = {
    title: 'Politika kolačića'
}
export default function CookiePolicy() {

    return <SimpleLayout><CookiePolicyView /></SimpleLayout>;

}
