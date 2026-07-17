import { TermsOfUseView } from '@sections/legal/terms-of-use/view';

import { buildMetadata } from '@base/lib/seo';
import { toLang } from '@base/locales/langs';

// ----------------------------------------------------------------------

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return buildMetadata(toLang(lang), 'termsOfUse');
}

export default function Page() {
    return <TermsOfUseView />;
}
