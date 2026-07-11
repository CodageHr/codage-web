'use client';

import { TFunction } from 'i18next';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from '@routes/paths';
import { RouterLink } from '@routes/components';

import { useTranslate } from '@base/locales';

import Logo from '@components/logo';

// ----------------------------------------------------------------------

const MENU_LINKS = (t: TFunction) => [
    { name: t('home'), href: paths.home },
    { name: t('nav_services'), href: '/#usluge' },
    { name: t('aboutUs'), href: paths.about },
    { name: t('contact'), href: paths.contact },
];

const LEGAL_LINKS = (t: TFunction) => [
    { name: t('legal_info'), href: paths.legalInfo },
    { name: t('privacy_policy'), href: paths.privacyPolicy },
    { name: t('cookies'), href: paths.cookies },
    { name: t('terms_of_use'), href: paths.termsOfUse },
];

// ----------------------------------------------------------------------

function ColumnHeading({ children }: { children: React.ReactNode }) {
    return (
        <Typography
            variant="overline"
            component="h2"
            sx={{ color: 'text.secondary', fontSize: 12, letterSpacing: '0.16em', mb: 2.5 }}
        >
            {children}
        </Typography>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            component={RouterLink}
            href={href}
            underline="none"
            variant="body2"
            sx={{
                color: 'text.secondary',
                transition: (theme) => theme.transitions.create('color', { duration: 150 }),
                '&:hover': { color: 'primary.dark' },
            }}
        >
            {children}
        </Link>
    );
}

export default function Footer() {
    const { t } = useTranslate();

    const currentYear = new Date().getFullYear();

    return (
        <Box component="footer" sx={{ position: 'relative', bgcolor: 'background.default' }}>
            <Divider />

            <Container sx={{ pt: { xs: 6, md: 10 }, pb: 5 }}>
                <Grid container spacing={{ xs: 5, md: 4 }}>
                    {/* Brand */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Stack spacing={2.5} sx={{ maxWidth: 300 }}>
                            <Logo height={28} />
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {t('footer_blurb')}
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                                {t('company_address')}
                            </Typography>
                        </Stack>
                    </Grid>

                    {/* Menu */}
                    <Grid size={{ xs: 6, md: 2 }}>
                        <ColumnHeading>{t('menu_heading')}</ColumnHeading>
                        <Stack spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                            {MENU_LINKS(t).map((link) => (
                                <FooterLink key={link.name} href={link.href}>
                                    {link.name}
                                </FooterLink>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Legal */}
                    <Grid size={{ xs: 6, md: 3 }}>
                        <ColumnHeading>{t('legal_heading')}</ColumnHeading>
                        <Stack spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                            {LEGAL_LINKS(t).map((link) => (
                                <FooterLink key={link.name} href={link.href}>
                                    {link.name}
                                </FooterLink>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Contact */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <ColumnHeading>{t('contact')}</ColumnHeading>
                        <Stack spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                            <Link
                                href="mailto:kontakt@codage.hr"
                                underline="none"
                                variant="body2"
                                sx={{ color: 'text.primary', fontWeight: 700, '&:hover': { color: 'primary.dark' } }}
                            >
                                kontakt@codage.hr
                            </Link>
                            <Link
                                href="tel:+38598403330"
                                underline="none"
                                variant="body2"
                                sx={{ color: 'text.primary', fontWeight: 700, '&:hover': { color: 'primary.dark' } }}
                            >
                                +385 98 403 330
                            </Link>
                            <Typography variant="caption" sx={{ color: 'text.disabled', mt: 0.5 }}>
                                {t('working_hours')}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {t('working_hours_value')}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>

                <Divider sx={{ mt: { xs: 5, md: 8 }, mb: 3 }} />

                <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                    © {currentYear} Codage d.o.o. {t('allRightsReserved')}
                </Typography>
            </Container>
        </Box>
    );
}
