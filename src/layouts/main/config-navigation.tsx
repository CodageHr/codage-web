import { TFunction } from 'i18next';

import { paths } from 'src/routes/paths';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navConfig = (translate:TFunction) => [
    {
        title: translate('home'),
        icon: <Iconify icon="material-symbols:home-rounded" />,
        path: paths.home,
    },
    {
        title: translate('services'),
        icon: <Iconify icon="carbon:development" />,
        path: paths.services,
    }/* ,
    {
        title: translate('services'),
        icon: <Iconify icon="map:physiotherapist" />,
        path: paths.services,
    },
    {
        title: translate('aboutUs'),
        icon: <Iconify icon="mingcute:user-info-fill" />,
        path: paths.about,
    } */
]
