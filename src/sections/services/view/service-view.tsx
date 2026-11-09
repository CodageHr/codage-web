'use client';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { paths } from '@routes/paths';
import { RouterLink } from '@routes/components';

import MainLayout from 'src/layouts/main';
import { onDark, radii } from 'src/theme/tokens';
import HomeProcess from '@sections/home/home-how-it-works';

import { useTranslate } from '@base/locales';

import Iconify from '@components/iconify';
import { ValueCard } from '@components/_ui/cards';
import DarkCtaCard from '@components/_ui/dark-cta-card';
import BreadcrumbJsonLd from '@components/breadcrumb-jsonld';
import { varFade, MotionViewport } from '@components/animate';
import PageHeaderBand from '@components/_ui/page-header-band';
import { QuoteCard, getTestimonial } from '@components/testimonials';
import { Eyebrow, SectionContainer } from '@components/_ui/section';

import { SERVICES, getService, type ServiceSlug } from '../config';

// ----------------------------------------------------------------------

const ITEMS = [1, 2, 3, 4] as const;

const SECTION_PY = { xs: 6, md: 13 };

type Props = {
    slug: ServiceSlug;
};

export default function ServiceView({ slug }: Props) {
    const { t } = useTranslate();

    const service = getService(slug) ?? SERVICES[0];

    const p = service.prefix;

    const tags = t(`${p}_tags`).split(' · ');

    const others = SERVICES.filter((item) => item.slug !== service.slug);

    const testimonial = getTestimonial(service.testimonial);

    return (
        <MainLayout>
            <BreadcrumbJsonLd
                items={[
                    { name: t('home'), path: '/' },
                    { name: t(service.titleKey), path: service.path },
                ]}
            />

            <PageHeaderBand
                eyebrow={t('svc_eyebrow')}
                title={
                    <>
                        {t(`${p}_title_1`)}
                        <br />
                        <Box component="span" sx={{ color: onDark.accent }}>
                            {t(`${p}_title_2`)}
                        </Box>
                    </>
                }
                lead={t(`${p}_lead`)}
            />

            {/* Intro + technologies */}
            <Box component="section" sx={{ bgcolor: 'background.default', py: SECTION_PY }}>
                <SectionContainer component={MotionViewport}>
                    <Grid container spacing={{ xs: 3, md: 8 }}>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <m.div variants={varFade().inUp}>
                                <Typography variant="h2">{t(`${p}_intro_title`)}</Typography>
                            </m.div>
                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Stack spacing={2.5}>
                                {(['intro_p1', 'intro_p2'] as const).map((key) => (
                                    <m.div key={key} variants={varFade().inUp}>
                                        <Typography sx={{ color: 'text.secondary', fontSize: 16.5, lineHeight: 1.8 }}>
                                            {t(`${p}_${key}`)}
                                        </Typography>
                                    </m.div>
                                ))}

                                <m.div variants={varFade().inUp}>
                                    <Eyebrow sx={{ mt: 2, mb: 1.5 }}>{t(`${p}_tags_title`)}</Eyebrow>
                                    <Box
                                        component="ul"
                                        sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, p: 0, m: 0, listStyle: 'none' }}
                                    >
                                        {tags.map((tag) => (
                                            <Box
                                                component="li"
                                                key={tag}
                                                sx={{
                                                    px: 1.5,
                                                    py: 0.75,
                                                    borderRadius: `${radii.sm}px`,
                                                    border: (theme) => `1px solid ${theme.palette.divider}`,
                                                    bgcolor: 'background.paper',
                                                    typography: 'body2',
                                                    fontWeight: 600,
                                                }}
                                            >
                                                {tag}
                                            </Box>
                                        ))}
                                    </Box>
                                </m.div>
                            </Stack>
                        </Grid>
                    </Grid>
                </SectionContainer>
            </Box>

            {/* What we build */}
            <Box component="section" sx={{ bgcolor: 'background.paper', py: SECTION_PY }}>
                <SectionContainer component={MotionViewport}>
                    <m.div variants={varFade().inUp}>
                        <Typography variant="h2" sx={{ mb: { xs: 4, md: 6 } }}>
                            {t(`${p}_what_title`)}
                        </Typography>
                    </m.div>
                    <Grid container spacing={{ xs: 2.5, md: 3 }}>
                        {ITEMS.map((n) => (
                            <Grid key={n} size={{ xs: 12, sm: 6, md: 3 }}>
                                <m.div variants={varFade().inUp} style={{ height: '100%' }}>
                                    <ValueCard
                                        num={`0${n}`}
                                        title={t(`${p}_item_${n}_title`)}
                                        desc={t(`${p}_item_${n}_desc`)}
                                    />
                                </m.div>
                            </Grid>
                        ))}
                    </Grid>
                </SectionContainer>
            </Box>

            {/* Client reference */}
            <Box component="section" sx={{ bgcolor: 'background.default', py: SECTION_PY }}>
                <SectionContainer component={MotionViewport}>
                    <Grid container spacing={{ xs: 3, md: 8 }} sx={{ alignItems: 'center' }}>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <m.div variants={varFade().inUp}>
                                <Typography variant="h2">{t('svc_reference_title')}</Typography>
                            </m.div>
                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <m.div variants={varFade().inUp}>
                                <QuoteCard item={testimonial} />
                            </m.div>
                        </Grid>
                    </Grid>
                </SectionContainer>
            </Box>

            {/* How we work - same process as the homepage */}
            <HomeProcess />

            {/* FAQ - always rendered (not collapsed), so the answers are in the HTML */}
            <Box component="section" sx={{ bgcolor: 'background.default', py: SECTION_PY }}>
                <SectionContainer component={MotionViewport}>
                    <Grid container spacing={{ xs: 3, md: 8 }}>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <m.div variants={varFade().inUp}>
                                <Typography variant="h2">{t('svc_faq_title')}</Typography>
                            </m.div>
                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }}>
                            {ITEMS.map((n, i) => (
                                <m.div key={n} variants={varFade().inUp}>
                                    <Box
                                        sx={{
                                            py: 3,
                                            borderTop: (theme) => (i === 0 ? `1px solid ${theme.palette.divider}` : 'none'),
                                            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                                        }}
                                    >
                                        <Typography variant="h5" component="h3" sx={{ mb: 1 }}>
                                            {t(`${p}_faq_${n}_q`)}
                                        </Typography>
                                        <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                                            {t(`${p}_faq_${n}_a`)}
                                        </Typography>
                                    </Box>
                                </m.div>
                            ))}
                        </Grid>
                    </Grid>
                </SectionContainer>
            </Box>

            {/* Other services - internal links */}
            <Box component="section" sx={{ bgcolor: 'background.paper', py: SECTION_PY }}>
                <SectionContainer component={MotionViewport}>
                    <m.div variants={varFade().inUp}>
                        <Typography variant="h2" sx={{ mb: { xs: 4, md: 6 } }}>
                            {t('svc_other_title')}
                        </Typography>
                    </m.div>
                    <Grid container spacing={{ xs: 2.5, md: 3 }}>
                        {others.map((item) => (
                            <Grid key={item.slug} size={{ xs: 12, md: 6 }}>
                                <m.div variants={varFade().inUp} style={{ height: '100%' }}>
                                    <Link
                                        component={RouterLink}
                                        href={item.path}
                                        underline="none"
                                        sx={{
                                            display: 'flex',
                                            height: 1,
                                            gap: 3,
                                            alignItems: 'flex-start',
                                            justifyContent: 'space-between',
                                            p: { xs: 3, md: 4 },
                                            color: 'text.primary',
                                            bgcolor: 'background.default',
                                            borderRadius: `${radii.lg}px`,
                                            transition: (theme) =>
                                                theme.transitions.create(['transform', 'box-shadow'], { duration: 180 }),
                                            '&:hover': { transform: 'translateY(-2px)', boxShadow: (theme) => theme.customShadows.card },
                                        }}
                                    >
                                        <Box>
                                            <Typography variant="h4" component="h3" sx={{ mb: 1 }}>
                                                {t(item.titleKey)}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                {t(item.descKey)}
                                            </Typography>
                                        </Box>
                                        <Iconify
                                            icon="material-symbols:arrow-outward-rounded"
                                            width={28}
                                            sx={{ flexShrink: 0 }}
                                        />
                                    </Link>
                                </m.div>
                            </Grid>
                        ))}
                    </Grid>
                </SectionContainer>
            </Box>

            {/* CTA */}
            <Box component="section" sx={{ bgcolor: 'background.default', py: { xs: 6, md: 8 } }}>
                <SectionContainer>
                    <DarkCtaCard
                        title={t('svc_cta_title')}
                        lead={t('svc_cta_lead')}
                        ctaLabel={t('header_cta')}
                        ctaHref={paths.contact}
                    />
                </SectionContainer>
            </Box>
        </MainLayout>
    );
}
