'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { paths } from '@routes/paths';
import { RouterLink } from '@routes/components';

import { radii } from 'src/theme/tokens';

import { useTranslate } from '@base/locales';

import { InfoCard } from '@components/_ui/cards';
import { SectionContainer } from '@components/_ui/section';

// ----------------------------------------------------------------------

function DashLine({ children }: { children: React.ReactNode }) {
    return (
        <Stack direction="row" spacing={1} sx={{ alignItems: 'baseline' }}>
            <Box component="span" sx={{ color: 'primary.main', flexShrink: 0 }}>
                ―
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {children}
            </Typography>
        </Stack>
    );
}

const linkSx = { color: 'primary.dark', fontWeight: 700 } as const;

export default function InfoContent() {
    const { t } = useTranslate();

    return (
        <Box component="section" sx={{ bgcolor: 'background.default', py: { xs: 6, md: 10 } }}>
            <SectionContainer sx={{ maxWidth: 1040 }}>
                <Grid container spacing={{ xs: 2.5, md: 3 }}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <InfoCard label={t('info_content_address')}>
                            <Stack spacing={0.25}>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Put gaja 6
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    21292 Srinjine, Split
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Hrvatska
                                </Typography>
                            </Stack>
                        </InfoCard>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <InfoCard label={t('info_content_registrant')}>
                            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                                {t('info_content_registrant_subtitle')}
                            </Typography>
                            <Stack spacing={0.75}>
                                <DashLine>{t('info_mbs_number')}: 060445698</DashLine>
                                <DashLine>{t('info_vat_number')}: 49369795577</DashLine>
                            </Stack>
                        </InfoCard>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <InfoCard label={t('info_content_board_members')}>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Petar Vrkić
                            </Typography>
                        </InfoCard>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <InfoCard label={t('info_content_base_capital')}>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {t('info_content_base_capital_content')}
                            </Typography>
                        </InfoCard>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <InfoCard label={t('info_content_bank_details')}>
                            <Stack spacing={0.75}>
                                <DashLine>IBAN: HR4223600001102990106</DashLine>
                                <DashLine>Zagrebačka banka d.d.</DashLine>
                            </Stack>
                        </InfoCard>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <InfoCard label={t('info_content_contact_information')}>
                            <Stack spacing={0.75} sx={{ alignItems: 'flex-start' }}>
                                <Link href="mailto:kontakt@codage.hr" underline="hover" variant="body2" sx={linkSx}>
                                    kontakt@codage.hr
                                </Link>
                                <Link href="tel:+38598403330" underline="hover" variant="body2" sx={linkSx}>
                                    +385 98 403 330
                                </Link>
                            </Stack>
                        </InfoCard>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        mt: 3,
                        p: { xs: 2.5, md: 3 },
                        borderRadius: `${radii.lg}px`,
                        bgcolor: 'background.neutral',
                    }}
                >
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {t('info_cookie_and_privacy_policy_content')}{' '}
                        <Link component={RouterLink} href={paths.termsOfUse} sx={linkSx}>
                            {t('terms_of_use')}
                        </Link>
                        ,{' '}
                        <Link component={RouterLink} href={paths.privacyPolicy} sx={linkSx}>
                            {t('privacy_policy')}
                        </Link>{' '}
                        {t('and')}{' '}
                        <Link component={RouterLink} href={paths.cookies} sx={linkSx}>
                            {t('cookie_policy')}
                        </Link>
                        .
                    </Typography>
                </Box>
            </SectionContainer>
        </Box>
    );
}
