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

import { ValueCard } from '@components/_ui/cards';
import DarkCtaCard from '@components/_ui/dark-cta-card';
import BreadcrumbJsonLd from '@components/breadcrumb-jsonld';
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
      'Suradnja s timom Codage bila je apsolutni užitak! Njihova stručnost u razvoju web aplikacije za tvrtku Selekcija bila je ključna za postizanje visokih standarda. Briljirali su u kreiranju inovativnih rješenja, prilagodbi sučelja i osiguravanju besprijekornog korisničkog iskustva. Svojom posvećenošću i preciznošću u radu s našim programerima znatno su doprinijeli uspjehu našeg projekta. Suradnju preporučujemo svima koji traže pravog stručnjaka u području web razvoja!',
        image: '/assets/images/home/testimonals/slobodan_jovic_selekcija.jpeg',
    },
    {
        name: 'Brian Kulman',
        role: 'CTO · Nearpeer',
        quote:
      'Petar Vrkić is a coding expert. Over two years, Petar\'s enhancements consistently raised our EdTech app to new levels of excellence. Petar is an expert in React, JavaScript, AWS, and databases — he had us covered from front-end to back-end. His love of problem-solving and ability to master new technologies helped us take huge strides with SSO, security, and reliability. His constant positivity and can-do attitude made collaborating a wonderful experience. Petar\'s experience and knowledge would be a great asset to any team or project!',
        image: '/assets/images/home/testimonals/brian_kulman_nearpeer.jpeg',
    },
    {
        name: 'Bruno Batarelo',
        role: 'CEO · Quantum-bit',
        quote:
      'Petar se pokazao kao izuzetno vrijedan član tima tijekom suradnje na našim zajedničkim projektima. Njegovo stručno znanje iz područja web i mobilnog razvoja bilo je ključno u stvaranju inovativne web i mobilne aplikacije. Njegova predanost, brza reakcija na izazove i kreativnost doprinijele su uspješnoj implementaciji projekta.',
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
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
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
            <BreadcrumbJsonLd
                items={[
                    { name: t('home'), path: '/' },
                    { name: t('about_eyebrow'), path: '/about-us' },
                ]}
            />
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

            {/* Team / office photo */}
            <Box component="section" sx={{ bgcolor: 'background.default', py: { xs: 6, md: 8 } }}>
                <SectionContainer>
                    <Box
                        component="img"
                        src="/assets/images/about/office.jpg"
                        alt={t('about_photo_alt')}
                        loading="lazy"
                        sx={{
                            display: 'block',
                            width: 1,
                            height: { xs: 280, md: 440 },
                            objectFit: 'cover',
                            borderRadius: '24px',
                            bgcolor: 'background.neutral',
                        }}
                    />
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
            <Box component="section" sx={{  bgcolor: 'background.default', py: { xs: 6, md: 8 } }}>
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
