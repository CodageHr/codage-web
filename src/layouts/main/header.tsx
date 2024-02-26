import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';

import { useTranslate } from '@base/locales';
import { CONTACT_CARD_ID } from '@base/config-global';

import Logo from 'src/components/logo';
import Iconify from '@components/iconify';
import { ThemeSwitch } from '@components/theme-switch';
import { useSettingsContext } from '@components/settings';

import { bgBlur } from 'src/theme/css';

import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
import { HEADER } from '../config-layout';
import { navConfig } from './config-navigation';
import HeaderShadow from '../common/header-shadow';

// ----------------------------------------------------------------------

export default function Header() {
    const theme = useTheme();

    const mdUp = useResponsive('up', 'md');

    const { t } = useTranslate();

    const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

    const settings = useSettingsContext();

    const { themeMode }=settings;



    const onClickContactUs  = () => {

        const element = document.getElementById(CONTACT_CARD_ID);
        element?.scrollIntoView({ behavior: 'smooth', block: 'center' });

    }

    return (
        <AppBar>
            <Toolbar
                disableGutters
                sx={{
                    height: {
                        xs: HEADER.H_MOBILE,
                        md: HEADER.H_DESKTOP,
                    },
                    transition: theme.transitions.create(['height'], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.shorter,
                    }),
                    ...(offsetTop && {
                        ...bgBlur({
                            color: theme.palette.background.default,
                        }),
                        height: {
                            md: HEADER.H_DESKTOP_OFFSET,
                        },
                    }),
                }}
            >
                <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>

                    {!mdUp && <NavMobile data={navConfig(t)} />}
                    <Logo
                        variant={mdUp ? 'full' : 'title'}

                        sx={{
                            ...(!mdUp && {
                                height: 25,
                            })}}
                    />


                    <Box sx={{ flexGrow: 1 }} />

                    {mdUp && <NavDesktop data={navConfig(t)} />}
                    <Button sx={{ ml:2}} variant={'contained'} color={'primary'} onClick={onClickContactUs} size= {mdUp ? 'large' : 'small'} startIcon={<Iconify icon={'material-symbols:keyboard-arrow-right'} />}>
                        {t('contactUsLabel')}
                    </Button>
                    <ThemeSwitch />

                </Container>
            </Toolbar>

            {offsetTop && <HeaderShadow />}
        </AppBar>
    );
}
