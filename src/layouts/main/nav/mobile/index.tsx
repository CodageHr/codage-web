import { TFunction } from 'i18next';
import { useState, useEffect, useCallback } from 'react';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import { paths } from '@routes/paths';
import { usePathname } from 'src/routes/hooks';
import { RouterLink } from '@routes/components';

import { useTranslate } from '@base/locales';

import Logo from 'src/components/logo';
import SvgColor from 'src/components/svg-color';
import Scrollbar from 'src/components/scrollbar';

import NavList from './nav-list';
import { NavProps } from '../types';

// ----------------------------------------------------------------------

const LEGAL_INFO_LINK = (translate: TFunction) => ([
    {
        title: translate('legal_info'),
        path: paths.legalInfo,
    },{
        title: translate('cookies'),
        path: paths.cookies,
    },{
        title: translate('privacy_policy'),
        path: paths.privacyPolicy,
    },{
        title: translate('terms_of_use'),
        path: paths.termsOfUse,
    }
]);


export default function NavMobile({ data }: NavProps) {
    const pathname = usePathname();

    const [openMenu, setOpenMenu] = useState(false);

    const { translate } = useTranslate();

    useEffect(() => {
        if (openMenu) {
            handleCloseMenu();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    const handleOpenMenu = useCallback(() => {
        setOpenMenu(true);
    }, []);

    const handleCloseMenu = useCallback(() => {
        setOpenMenu(false);
    }, []);

    return (
        <>
            <IconButton onClick={handleOpenMenu} sx={{ ml: 1 }}>
                <SvgColor src="/assets/icons/navbar/ic_menu_item.svg" />
            </IconButton>
            <Drawer
                open={openMenu}
                onClose={handleCloseMenu}
                slotProps={{
                    paper: {
                        sx: {
                            pb: 5,
                            width: 260,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        },
                    }
                }}
            >
                <Scrollbar>
                    <Logo sx={{ mx: 2.5, my: 3 }} />

                    {data.map((list) => (
                        <NavList key={list.title} data={list} />
                    ))}
                </Scrollbar>
                <Stack
                    direction={'column'}
                    spacing={2}
                    sx={{
                        alignItems: 'center'
                    }}>
                    {LEGAL_INFO_LINK(translate).map((link) => (
                        <Link
                            key={link.title}
                            component={RouterLink}
                            href={link.path}
                            color="inherit"
                            variant="subtitle1"
                        >
                            {link.title}
                        </Link>
                    ))}
                </Stack>
            </Drawer>
        </>
    );
}
