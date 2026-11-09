import { TFunction } from 'i18next';

import { paths } from 'src/routes/paths';

import { SERVICES } from '@sections/services/config';

// ----------------------------------------------------------------------
// Nav labels are localized (i18n); hrefs are locale-free route identities that
// RouterLink prefixes with the active locale. Services / Process are landing
// anchors (English ids, shared across locales); About / Contact are pages.
//
// "Services" also carries its landing pages as `children`: a dropdown on desktop,
// an indented sub-list in the mobile sheet.

export type NavChild = { title: string; desc?: string; path: string };

export type NavItem = { title: string; path: string; children?: NavChild[] };

export const navConfig = (translate: TFunction): NavItem[] => [
    {
        title: translate('nav_services'),
        path: '/#services',
        children: SERVICES.map((service) => ({
            title: translate(service.titleKey),
            desc: translate(service.descKey),
            path: service.path,
        })),
    },
    {
        title: translate('nav_process'),
        path: '/#process',
    },
    {
        title: translate('aboutUs'),
        path: paths.about,
    },
    {
        title: translate('contact'),
        path: paths.contact,
    },
];
