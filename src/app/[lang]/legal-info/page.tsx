import { InfoView } from '@sections/legal/info/view';

import { buildMetadata } from '@base/lib/seo';
import { toLang } from '@base/locales/langs';

// ----------------------------------------------------------------------

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return buildMetadata(toLang(lang), 'legalInfo');
}

export default function Page() {
    return <InfoView />;
}
