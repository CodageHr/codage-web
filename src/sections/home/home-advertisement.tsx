'use client';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { useTranslate } from '@base/locales';

import { SectionContainer } from '@components/_ui/section';
import { varFade, MotionViewport } from '@components/animate';
import ContactForm from '@components/have-an-idea-contact-card/contact-form';

import { brand, radii } from 'src/theme/tokens';

// ----------------------------------------------------------------------

export default function HomeCta() {
    const { t } = useTranslate();

    const onCoral = alpha('#FFFFFF', 0.85);

    return (
        <Box component="section" id="contact" sx={{ bgcolor: 'background.default', py: { xs: 6, md: 13 } }}>
            <SectionContainer component={MotionViewport}>
              <m.div variants={varFade().inUp}>
                <Box
                    sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        bgcolor: brand[500],
                        borderRadius: `${radii.xl}px`,
                        p: { xs: 3.5, md: 8 },
                    }}
                >
                    {/* subtle white vertical line texture */}
                    <Box
                        aria-hidden
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            pointerEvents: 'none',
                            backgroundImage: `repeating-linear-gradient(90deg, ${alpha('#FFFFFF', 0.05)} 0 1px, transparent 1px 96px)`,
                        }}
                    />

                    <Grid container spacing={{ xs: 4, md: 6 }} sx={{ position: 'relative', alignItems: 'center' }}>
                        {/* copy */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography
                                variant="h2"
                                sx={{ color: 'common.white', mb: 2 }}
                            >
                                {t('home_cta_title_1')}
                                <br />
                                {t('home_cta_title_2')}
                            </Typography>

                            <Typography sx={{ color: onCoral, fontSize: { xs: 16, md: 17 }, maxWidth: 420, mb: 4 }}>
                                {t('home_cta_lead')}
                            </Typography>

                            <Stack spacing={1.25}>
                                <Link
                                    href="mailto:kontakt@codage.hr"
                                    underline="hover"
                                    sx={{ color: 'common.white', fontWeight: 700 }}
                                >
                                    kontakt@codage.hr
                                </Link>
                                <Link
                                    href="tel:+38598403330"
                                    underline="hover"
                                    sx={{ color: 'common.white', fontWeight: 700 }}
                                >
                                    +385 98 403 330
                                </Link>
                                <Typography variant="body2" sx={{ color: onCoral }}>
                                    {t('working_hours_value')}
                                </Typography>
                            </Stack>
                        </Grid>

                        {/* form card */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box
                                sx={{
                                    bgcolor: 'background.paper',
                                    borderRadius: `${radii.lg}px`,
                                    p: { xs: 2.5, md: 4 },
                                }}
                            >
                                <ContactForm variant="mini" />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
              </m.div>
            </SectionContainer>
        </Box>
    );
}
