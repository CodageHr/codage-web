import SimpleLayout from '@layouts/simple';

import { TermsOfUseView } from '@sections/legal/terms-of-use/view';

// ----------------------------------------------------------------------

export const metadata = {
    title: 'Uvjeti korištenja',
};
export default function TermsOfUsePage() {

    return <SimpleLayout><TermsOfUseView /></SimpleLayout>;

}
