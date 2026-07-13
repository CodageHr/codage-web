'use client';

import { TFunction } from 'i18next';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from '@routes/paths';
import { usePathname } from 'src/routes/hooks';
import { RouterLink } from '@routes/components';

import { useTranslate } from '@base/locales';

import Logo from '@components/logo';

// ----------------------------------------------------------------------

const LEGAL_LINKS = (t: TFunction) => [
    { title: t('legal_info'), path: paths.legalInfo },
    { title: t('privacy_policy'), path: paths.privacyPolicy },
    { title: t('cookies'), path: paths.cookies },
    { title: t('terms_of_use'), path: paths.termsOfUse },
];

export default function Footer() {
    const { t } = useTranslate();

    const pathname = usePathname();

    const currentYear = new Date().getFullYear();

    return (
        <Box component="footer" sx={{ position: 'relative', bgcolor: 'background.default' }}>
            <Divider />
            <Container sx={{ py: 4 }}>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={{ xs: 3, md: 2 }}
                    sx={{ alignItems: 'center', justifyContent: 'space-between' }}
                >
                    <Logo height={26} />

                    <Stack
                        direction="row"
                        useFlexGap
                        sx={{ flexWrap: 'wrap', justifyContent: 'center', columnGap: 3, rowGap: 1 }}
                    >
                        {LEGAL_LINKS(t).map((link) => {
                            const active = pathname === link.path || pathname === `${link.path}/`;
                            return (
                                <Link
                                    key={link.title}
                                    component={RouterLink}
                                    href={link.path}
                                    underline="none"
                                    variant="body2"
                                    sx={{
                                        color: active ? 'text.primary' : 'text.secondary',
                                        fontWeight: active ? 700 : 400,
                                        '&:hover': { color: 'primary.dark' },
                                    }}
                                >
                                    {link.title}
                                </Link>
                            );
                        })}
                    </Stack>
                </Stack>

                <Typography variant="caption" sx={{ display: 'block', mt: 3, color: 'text.secondary' }}>
                    © {currentYear} Codage d.o.o. {t('allRightsReserved')}
                </Typography>
            </Container>
        </Box>
    );
}
