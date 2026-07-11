import { TFunction } from 'i18next';

import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------
// Nav labels are Croatian (i18n); hrefs stay English routes.
// Usluge / Proces are landing anchors; O nama / Kontakt are pages.

export const navConfig = (translate: TFunction) => [
    {
        title: translate('nav_services'),
        path: '/#usluge',
    },
    {
        title: translate('nav_process'),
        path: '/#proces',
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
