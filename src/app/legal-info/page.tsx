import SimpleLayout from '@layouts/simple';

import { InfoView } from '@sections/legal/info/view';

// ----------------------------------------------------------------------

export const metadata = {
    title: 'Pravni podaci',
};
export default function LegalInfoPage() {

    return <SimpleLayout><InfoView /></SimpleLayout>;


}
