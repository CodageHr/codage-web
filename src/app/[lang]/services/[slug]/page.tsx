import { notFound } from 'next/navigation';

import { buildMetadata } from '@base/lib/seo';
import { toLang } from '@base/locales/langs';

import ServiceJsonLd from '@components/service-jsonld';

import ServiceView from '@sections/services/view/service-view';
import { SERVICES, getService } from '@sections/services/config';

// ----------------------------------------------------------------------
// /[lang]/services/[slug]/ - combined with the [lang] layout's params this
// prerenders 3 services × 2 locales = 6 static pages. Unknown slugs 404.

type Params = Promise<{ lang: string; slug: string }>;

export function generateStaticParams() {
    return SERVICES.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Params }) {
    const { lang, slug } = await params;
    const service = getService(slug);

    return service ? buildMetadata(toLang(lang), service.routeKey) : {};
}

export default async function Page({ params }: { params: Params }) {
    const { lang, slug } = await params;
    const service = getService(slug);

    if (!service) {
        notFound();
    }

    return (
        <>
            <ServiceJsonLd lang={toLang(lang)} routeKey={service.routeKey} serviceType={service.serviceType} />
            <ServiceView slug={service.slug} />
        </>
    );
}
