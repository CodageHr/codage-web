import { paths } from '@routes/paths';

import { type RouteKey } from '@base/locales/seo';

import { type TestimonialId } from '@components/testimonials/data';

// ----------------------------------------------------------------------
// Service landing pages. Deliberately NOT 'use client' - the [slug] page imports
// SERVICES on the server for generateStaticParams / generateMetadata.
//
// Copy lives in i18n under `${prefix}_*` (see hr.json / en.json):
//   _title_1, _title_2, _lead, _intro_title, _intro_p1, _intro_p2,
//   _what_title, _item_{1..4}_title/_desc, _tags_title, _tags ("a · b · c"),
//   _faq_{1..4}_q/_a
// ----------------------------------------------------------------------

export type ServiceSlug = 'web-applications' | 'mobile-applications' | 'design-consulting';

export type ServiceDef = {
    slug: ServiceSlug;
    /** Locale-free route identity - RouterLink adds /hr or /en. */
    path: string;
    /** Key into the SEO dictionary (title/description/canonical/hreflang). */
    routeKey: Extract<RouteKey, 'webApps' | 'mobileApps' | 'designConsulting'>;
    /** i18n key prefix for the page copy. */
    prefix: 'svc_web' | 'svc_mobile' | 'svc_design';
    /** Short service name, reused from the homepage rows. */
    titleKey: string;
    descKey: string;
    /** schema.org Service.serviceType - a machine value, not shown to users. */
    serviceType: string;
    /** The most relevant client reference for this service. */
    testimonial: TestimonialId;
};

export const SERVICES: readonly ServiceDef[] = [
    {
        slug: 'web-applications',
        path: paths.services.webApps,
        routeKey: 'webApps',
        prefix: 'svc_web',
        titleKey: 'home_svc_1_title',
        descKey: 'home_svc_1_desc',
        serviceType: 'Custom web application development',
        testimonial: 'nearpeer',
    },
    {
        slug: 'mobile-applications',
        path: paths.services.mobileApps,
        routeKey: 'mobileApps',
        prefix: 'svc_mobile',
        titleKey: 'home_svc_2_title',
        descKey: 'home_svc_2_desc',
        serviceType: 'Mobile application development',
        testimonial: 'quantum',
    },
    {
        slug: 'design-consulting',
        path: paths.services.designConsulting,
        routeKey: 'designConsulting',
        prefix: 'svc_design',
        titleKey: 'home_svc_3_title',
        descKey: 'home_svc_3_desc',
        serviceType: 'UI/UX design and technical consulting',
        testimonial: 'selekcija',
    },
];

export const getService = (slug: string): ServiceDef | undefined =>
    SERVICES.find((item) => item.slug === slug);
