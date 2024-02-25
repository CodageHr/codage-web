import SimpleLayout from '@layouts/simple';

import { PrivacyPolicyView } from '@sections/legal/privacy-policy/view';

// ----------------------------------------------------------------------

export const metadata = {
    title: 'Politika privatnosti',
};
export default function PrivacyPolicyPage() {

    return <SimpleLayout><PrivacyPolicyView /></SimpleLayout>;

}
