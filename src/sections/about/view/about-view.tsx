'use client';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { paths } from '@routes/paths';

import MainLayout from 'src/layouts/main';
import { brand, onDark } from 'src/theme/tokens';

import { useTranslate } from '@base/locales';

import Iconify from '@components/iconify';
import { ValueCard } from '@components/_ui/cards';
import DarkCtaCard from '@components/_ui/dark-cta-card';
import { varFade, MotionViewport } from '@components/animate';
import PageHeaderBand from '@components/_ui/page-header-band';
import { SectionContainer } from '@components/_ui/section';

// ----------------------------------------------------------------------

type Quote = { name: string; role: string; quote: string; image?: string };

const QUOTES: Quote[] = [
    {
        name: 'Slobodan Jović',
        role: 'CEO i osnivač · Selekcija.hr',
        quote:
      'Stručnost tima Codage bila je ključna za postizanje visokih standarda. Inovativna rješenja i besprijekorno korisničko iskustvo — suradnju preporučujemo svima.',
        image: '/assets/images/home/testimonals/slobodan_jovic_selekcija.jpeg',
    },
    {
        name: 'Brian Kulman',
        role: 'CTO · Nearpeer',
        quote:
      'Petar’s enhancements consistently raised our EdTech app to new levels of excellence. From front-end to back-end, he had us covered.',
        image: '/assets/images/home/testimonals/brian_kulman_nearpeer.jpeg',
    },
    {
        name: 'Bruno Batarelo',
        role: 'CEO · Quantum-bit',
        quote:
      'Predanost, brza reakcija na izazove i kreativnost doprinijele su uspješnoj implementaciji našeg projekta.',
    },
];

function QuoteCard({ item }: { item: Quote }) {
    return (
        <Card sx={{ height: 1, p: { xs: 3, md: 4 } }}>
            <Stack spacing={3} sx={{ height: 1, justifyContent: 'space-between' }}>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    “{item.quote}”
                </Typography>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                    <Avatar
                        src={item.image}
                        alt={item.name}
                        sx={{ width: 44, height: 44, bgcolor: brand[100], color: brand[600], fontWeight: 700 }}
                    >
                        {item.name.charAt(0)}
                    </Avatar>
                    <Box>
                        <Typography sx={{ fontWeight: 700 }}>{item.name}</Typography>
                        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                            {item.role}
                        </Typography>
                    </Box>
                </Stack>
            </Stack>
        </Card>
    );
}

export default function AboutView() {
    const { t } = useTranslate();

    return (
        <MainLayout>
            <PageHeaderBand
                eyebrow={t('about_eyebrow')}
                title={
                    <>
                        {t('about_title_1')}
                        <br />
                        <Box component="span" sx={{ color: onDark.accent }}>
                            {t('about_title_2')}
                        </Box>
                    </>
                }
                lead={t('about_lead')}
            />

            {/* Naša priča */}
            <Box component="section" sx={{ bgcolor: 'background.default', py: { xs: 6, md: 13 } }}>
                <SectionContainer component={MotionViewport}>
                    <Grid container spacing={{ xs: 3, md: 8 }}>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <m.div variants={varFade().inUp}>
                                <Typography variant="h2">{t('about_story_title')}</Typography>
                            </m.div>
                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Stack spacing={2.5}>
                                {['about_story_p1', 'about_story_p2', 'about_story_p3'].map((k) => (
                                    <m.div key={k} variants={varFade().inUp}>
                                        <Typography sx={{ color: 'text.secondary', fontSize: 16.5, lineHeight: 1.8 }}>
                                            {t(k)}
                                        </Typography>
                                    </m.div>
                                ))}
                            </Stack>
                        </Grid>
                    </Grid>
                </SectionContainer>
            </Box>

            {/* Kako razmišljamo */}
            <Box component="section" sx={{ bgcolor: 'background.paper', py: { xs: 6, md: 13 } }}>
                <SectionContainer component={MotionViewport}>
                    <m.div variants={varFade().inUp}>
                        <Typography variant="h2" sx={{ mb: { xs: 4, md: 6 } }}>
                            {t('about_values_title')}
                        </Typography>
                    </m.div>
                    <Grid container spacing={{ xs: 2.5, md: 3 }}>
                        {['01', '02', '03', '04'].map((num, i) => (
                            <Grid key={num} size={{ xs: 12, sm: 6, md: 3 }}>
                                <m.div variants={varFade().inUp} style={{ height: '100%' }}>
                                    <ValueCard
                                        num={num}
                                        title={t(`about_value_${i + 1}_title`)}
                                        desc={t(`about_value_${i + 1}_desc`)}
                                    />
                                </m.div>
                            </Grid>
                        ))}
                    </Grid>
                </SectionContainer>
            </Box>

            {/* Photo slot (placeholder) */}
            <Box component="section" sx={{ bgcolor: 'background.default', pb: { xs: 6, md: 13 } }}>
                <SectionContainer>
                    <Stack
                        sx={{
                            height: { xs: 280, md: 440 },
                            borderRadius: '24px',
                            bgcolor: 'background.neutral',
                            border: (theme) => `1px dashed ${theme.palette.divider}`,
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: 'text.disabled',
                            gap: 1,
                        }}
                    >
                        <Iconify icon="solar:gallery-wide-linear" width={40} />
                        <Typography variant="body2">{t('about_photo_placeholder')}</Typography>
                    </Stack>
                </SectionContainer>
            </Box>

            {/* Tko nam vjeruje */}
            <Box component="section" sx={{ bgcolor: 'background.paper', py: { xs: 6, md: 13 } }}>
                <SectionContainer component={MotionViewport}>
                    <m.div variants={varFade().inUp}>
                        <Typography variant="h2" sx={{ mb: { xs: 4, md: 6 } }}>
                            {t('about_clients_title')}
                        </Typography>
                    </m.div>
                    <Grid container spacing={{ xs: 2.5, md: 3 }}>
                        {QUOTES.map((item) => (
                            <Grid key={item.name} size={{ xs: 12, md: 4 }}>
                                <m.div variants={varFade().inUp} style={{ height: '100%' }}>
                                    <QuoteCard item={item} />
                                </m.div>
                            </Grid>
                        ))}
                    </Grid>
                </SectionContainer>
            </Box>

            {/* CTA */}
            <Box component="section" sx={{ bgcolor: 'background.default', pb: { xs: 6, md: 13 } }}>
                <SectionContainer>
                    <DarkCtaCard
                        title={t('about_cta_title')}
                        lead={t('about_cta_lead')}
                        ctaLabel={t('about_cta_button')}
                        ctaHref={paths.contact}
                    />
                </SectionContainer>
            </Box>
        </MainLayout>
    );
}
