'use client';

import { useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from '@routes/paths';
import { usePathname } from 'src/routes/hooks';
import { RouterLink } from '@routes/components';
import { localizeHref } from '@routes/localize-href';
import { type Lang } from '@base/locales/langs';

import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';

import { useTranslate } from '@base/locales';
import { useCurrentLang } from '@base/locales/i18n-provider';

import Logo from 'src/components/logo';
import Iconify from '@components/iconify';
import { ThemeSwitch } from '@components/theme-switch';
import { LocaleSwitch } from '@components/locale-switch';

import { sand, onDark } from 'src/theme/tokens';

import { HEADER } from '../config-layout';
import NavDropdown from './nav-dropdown';
import { navConfig, type NavItem } from './config-navigation';

// ----------------------------------------------------------------------

const HEADER_BG = sand[900];

// `pathname` is locale-prefixed and trailing-slashed ('/hr/about-us/') while nav
// paths are locale-free identities ('/about-us'), so the raw path has to be
// localised before comparing - otherwise every nav item is silently never active.
function isActive(pathname: string, path: string, lang: Lang) {
    // "Services" is a landing anchor, but it is the current section on a service page.
    if (path === '/#services') return pathname.startsWith(`/${lang}/services/`);
    if (path.startsWith('/#')) return false; // other landing anchors are not "current page"
    return pathname === localizeHref(path, lang);
}

export default function Header() {
    const theme = useTheme();

    const mdUp = useResponsive('up', 'md');

    const pathname = usePathname();

    const lang = useCurrentLang();

    const { t } = useTranslate();

    const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

    const nav: NavItem[] = navConfig(t);

    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = useCallback(() => setOpenMenu(true), []);
    const handleCloseMenu = useCallback(() => setOpenMenu(false), []);

    // close the mobile sheet on route change
    useEffect(() => {
        setOpenMenu(false);
    }, [pathname]);

    const navLink = (item: NavItem, onClick?: () => void) => {
        const active = isActive(pathname, item.path, lang);
        return (
            <Link
                key={item.title}
                component={RouterLink}
                href={item.path}
                onClick={onClick}
                underline="none"
                sx={{
                    fontFamily: theme.typography.fontFamily,
                    fontSize: mdUp ? 15 : 20,
                    fontWeight: active ? 700 : 500,
                    color: active ? onDark.text : onDark.textSecondary,
                    transition: theme.transitions.create('color', { duration: 150 }),
                    '&:hover': { color: onDark.text },
                }}
            >
                {item.title}
            </Link>
        );
    };

    return (
        <AppBar
            sx={{
                boxShadow: 'none',
                backgroundColor: HEADER_BG,
                borderBottom: `1px solid ${onDark.hairline}`,
                color: onDark.text,
            }}
        >
            <Toolbar
                disableGutters
                sx={{
                    height: { xs: HEADER.H_MOBILE, md: HEADER.H_DESKTOP },
                    transition: theme.transitions.create(['height', 'background-color'], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.shorter,
                    }),
                    ...(offsetTop && {
                        height: { md: HEADER.H_DESKTOP_OFFSET },
                        backgroundColor: alpha(HEADER_BG, 0.9),
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                    }),
                }}
            >
                <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
                    <Logo logoColor="cream" height={mdUp ? 30 : 26} />

                    <Box sx={{ flexGrow: 1 }} />

                    {mdUp && (
                        <Stack component="nav" direction="row" spacing={4} sx={{ mr: 3, alignItems: 'center' }}>
                            {nav.map((item) =>
                                item.children ? (
                                    <NavDropdown
                                        key={item.title}
                                        item={item}
                                        active={isActive(pathname, item.path, lang)}
                                        isChildActive={(path) => pathname === localizeHref(path, lang)}
                                        allLabel={t('nav_services_all')}
                                    />
                                ) : (
                                    navLink(item)
                                )
                            )}
                        </Stack>
                    )}

                    <LocaleSwitch sx={{ color: onDark.textSecondary, '&:hover': { color: onDark.text } }} />

                    <ThemeSwitch sx={{ color: onDark.textSecondary, '&:hover': { color: onDark.text } }} />

                    <Button
                        component={RouterLink}
                        href={paths.contact}
                        variant="contained"
                        color="primary"
                        size={mdUp ? 'medium' : 'small'}
                        sx={{ ml: mdUp ? 2 : 1 }}
                    >
                        {t('header_cta')}
                    </Button>

                    {!mdUp && (
                        <IconButton
                            onClick={handleOpenMenu}
                            aria-label={t('open_menu')}
                            sx={{ ml: 0.5, color: onDark.text }}
                        >
                            <Iconify icon="mingcute:menu-line" width={26} />
                        </IconButton>
                    )}
                </Container>
            </Toolbar>

            {/* Mobile full-screen dark sheet */}
            <Drawer
                anchor="right"
                open={openMenu}
                onClose={handleCloseMenu}
                slotProps={{
                    paper: {
                        sx: {
                            width: 1,
                            maxWidth: 'none',
                            backgroundColor: HEADER_BG,
                            color: onDark.text,
                            backgroundImage: 'none',
                        },
                    },
                }}
            >
                <Stack sx={{ height: 1, p: 3, bgcolor: HEADER_BG, color: onDark.text }}>
                    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                        <Logo logoColor="cream" height={28} />
                        <IconButton
                            onClick={handleCloseMenu}
                            aria-label={t('close_menu')}
                            sx={{ color: onDark.text }}
                        >
                            <Iconify icon="mingcute:close-line" width={26} />
                        </IconButton>
                    </Stack>

                    <Stack component="nav" spacing={3} sx={{ mt: 6 }}>
                        {nav.map((item) => (
                            <Box key={item.title}>
                                {navLink(item, handleCloseMenu)}

                                {/* Service pages as an always-visible, indented sub-list */}
                                {item.children && (
                                    <Stack
                                        spacing={1.75}
                                        sx={{ mt: 1.75, pl: 2, borderLeft: `1px solid ${onDark.hairline}` }}
                                    >
                                        {item.children.map((child) => {
                                            const childActive = pathname === localizeHref(child.path, lang);

                                            return (
                                                <Link
                                                    key={child.path}
                                                    component={RouterLink}
                                                    href={child.path}
                                                    onClick={handleCloseMenu}
                                                    underline="none"
                                                    aria-current={childActive ? 'page' : undefined}
                                                    sx={{
                                                        fontSize: 16,
                                                        fontWeight: childActive ? 700 : 500,
                                                        color: childActive ? onDark.accent : onDark.textSecondary,
                                                        '&:hover': { color: onDark.text },
                                                    }}
                                                >
                                                    {child.title}
                                                </Link>
                                            );
                                        })}
                                    </Stack>
                                )}
                            </Box>
                        ))}
                    </Stack>

                    <Box sx={{ flexGrow: 1 }} />

                    <Divider sx={{ borderColor: onDark.hairline, my: 3 }} />

                    <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                        <Button
                            component={RouterLink}
                            href={paths.contact}
                            onClick={handleCloseMenu}
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth
                        >
                            {t('header_cta')}
                        </Button>
                        <LocaleSwitch
                            sx={{
                                flexShrink: 0,
                                border: `1px solid ${onDark.hairline}`,
                                borderRadius: 1.5,
                                color: onDark.text,
                            }}
                        />
                        <ThemeSwitch
                            sx={{
                                flexShrink: 0,
                                border: `1px solid ${onDark.hairline}`,
                                borderRadius: 1.5,
                                color: onDark.text,
                            }}
                        />
                    </Stack>
                </Stack>
            </Drawer>
        </AppBar>
    );
}
