import ContactView from '@sections/contact/view/contact-view';

import { buildMetadata } from '@base/lib/seo';
import { toLang } from '@base/locales/langs';

// ----------------------------------------------------------------------

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return buildMetadata(toLang(lang), 'contact');
}

export default function Page() {
    return <ContactView />;
}
