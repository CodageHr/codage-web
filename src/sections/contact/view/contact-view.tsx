'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { paths } from '@routes/paths';
import { RouterLink } from '@routes/components';

import MainLayout from 'src/layouts/main';
import { brand, sand, cream, onDark, radii } from 'src/theme/tokens';

import { useTranslate } from '@base/locales';

import Iconify from '@components/iconify';
import BreadcrumbJsonLd from '@components/breadcrumb-jsonld';
import PageHeaderBand from '@components/_ui/page-header-band';
import { SectionContainer } from '@components/_ui/section';
import ContactForm from '@components/have-an-idea-contact-card/contact-form';

// ----------------------------------------------------------------------

function IconTile({ icon }: { icon: string }) {
    return (
        <Box
            sx={{
                width: 44,
                height: 44,
                flexShrink: 0,
                borderRadius: `${radii.md}px`,
                bgcolor: brand[100],
                color: brand[600],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Iconify icon={icon} width={22} />
        </Box>
    );
}

function InfoRow({
    icon,
    label,
    children,
}: {
  icon: string;
  label: string;
  children: React.ReactNode;
}) {
    return (
        <Card sx={{ p: { xs: 2.5, md: 3 } }}>
            <Stack direction="row" spacing={2}>
                <IconTile icon={icon} />
                <Box>
                    <Typography variant="overline" sx={{ color: 'text.secondary', display: 'block', mb: 0.5 }}>
                        {label}
                    </Typography>
                    {children}
                </Box>
            </Stack>
        </Card>
    );
}

const contactLinkSx = { color: 'primary.dark', fontWeight: 700, fontSize: 17 } as const;

export default function ContactView() {
    const { t } = useTranslate();

    return (
        <MainLayout>
            <BreadcrumbJsonLd
                items={[
                    { name: t('home'), path: '/' },
                    { name: t('contact_eyebrow'), path: '/contact-us' },
                ]}
            />
            <PageHeaderBand
                eyebrow={t('contact_eyebrow')}
                title={
                    <>
                        {t('contact_title_1')}
                        <br />
                        <Box component="span" sx={{ color: onDark.accent }}>
                            {t('contact_title_2')}
                        </Box>
                    </>
                }
                lead={t('contact_lead')}
            />

            <Box component="section" sx={{ bgcolor: 'background.default', py: { xs: 6, md: 13 } }}>
                <SectionContainer>
                    <Grid container spacing={{ xs: 4, md: 5 }}>
                        {/* form */}
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Card sx={{ p: { xs: 3, md: 5 }, borderRadius: `${radii.xl}px` }}>
                                <Typography variant="h3" component="h2" sx={{ mb: 3 }}>
                                    {t('contact_form_heading')}
                                </Typography>
                                <ContactForm variant="full" />
                            </Card>
                        </Grid>

                        {/* info column - fills the form's height so tops & bottoms align */}
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Stack spacing={2.5} sx={{ height: 1, justifyContent: 'space-between' }}>
                                <InfoRow icon="fa6-solid:envelope" label={t('contact_info_email_label')}>
                                    <Link href="mailto:kontakt@codage.hr" underline="hover" sx={contactLinkSx}>
                                        kontakt@codage.hr
                                    </Link>
                                    <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', mt: 0.5 }}>
                                        {t('contact_info_email_note')}
                                    </Typography>
                                </InfoRow>

                                <InfoRow icon="ic:round-phone" label={t('contact_info_phone_label')}>
                                    <Link href="tel:+38598403330" underline="hover" sx={contactLinkSx}>
                                        +385 98 403 330
                                    </Link>
                                    <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', mt: 0.5 }}>
                                        {t('contact_info_phone_note')}
                                    </Typography>
                                </InfoRow>

                                <InfoRow icon="ic:round-schedule" label={t('working_hours')}>
                                    <Stack spacing={0.25}>
                                        <Typography variant="body2">
                                            {t('contact_hours_weekdays')} · {t('working_hours_value_short')}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {t('contact_hours_weekend')} · {t('contact_hours_closed')}
                                        </Typography>
                                    </Stack>
                                </InfoRow>

                                {/* dark company card */}
                                <Box
                                    sx={{
                                        bgcolor: sand[900],
                                        color: cream,
                                        borderRadius: `${radii.lg}px`,
                                        p: { xs: 3, md: 3.5 },
                                    }}
                                >
                                    <Typography sx={{ fontWeight: 700, mb: 1 }}>Codage d.o.o.</Typography>
                                    <Typography variant="body2" sx={{ color: onDark.textSecondary }}>
                                        Put gaja 6, 21292 Srinjine · Split
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: onDark.textSecondary, mb: 1.5 }}>
                                        OIB: 49369795577
                                    </Typography>
                                    <Link
                                        component={RouterLink}
                                        href={paths.legalInfo}
                                        underline="hover"
                                        sx={{ color: onDark.accent, fontWeight: 700, fontSize: 14 }}
                                    >
                                        {t('legal_info')} →
                                    </Link>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </SectionContainer>
            </Box>
        </MainLayout>
    );
}
