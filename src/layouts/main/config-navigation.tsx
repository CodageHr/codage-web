import { TFunction } from 'i18next';

import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------
// Nav labels are localized (i18n); hrefs are locale-free route identities that
// RouterLink prefixes with the active locale. Services / Process are landing
// anchors (English ids, shared across locales); About / Contact are pages.

export const navConfig = (translate: TFunction) => [
    {
        title: translate('nav_services'),
        path: '/#services',
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
