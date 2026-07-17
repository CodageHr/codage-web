'use client';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from '@routes/paths';
import { RouterLink } from '@routes/components';

import { useTranslate } from '@base/locales';

import { varFade, MotionViewport } from '@components/animate';
import { Eyebrow, SectionContainer } from '@components/_ui/section';

import { sand, cream, onDark } from 'src/theme/tokens';

// ----------------------------------------------------------------------

const TECH = ['React', 'Next.js', 'Laravel', 'Node.js', 'AWS', 'Spring Boot', 'Scala'];

export default function HomeHero() {
    const { t } = useTranslate();

    return (
        <Box
            component="section"
            sx={{
                position: 'relative',
                overflow: 'hidden',
                bgcolor: sand[900],
                color: cream,
                pt: { xs: 13, md: 22 },
                pb: { xs: 8, md: 14 },
            }}
        >
            {/* radial coral glow, top-right */}
            <Box
                aria-hidden
                sx={{
                    position: 'absolute',
                    top: -140,
                    right: -220,
                    width: 560,
                    height: 560,
                    pointerEvents: 'none',
                    background: `radial-gradient(circle, ${alpha('#E07E58', 0.25)} 0%, transparent 70%)`,
                }}
            />
            {/* vertical line texture */}
            <Box
                aria-hidden
                sx={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    backgroundImage: `repeating-linear-gradient(90deg, ${onDark.lineTexture} 0 1px, transparent 1px 120px)`,
                }}
            />

            <SectionContainer sx={{ position: 'relative' }}>
                <Box component={MotionViewport}>
                    <m.div variants={varFade().inUp}>
                        <Eyebrow onDark>{t('home_hero_eyebrow')}</Eyebrow>
                    </m.div>

                    <m.div variants={varFade().inUp}>
                        <Typography
                            component="h1"
                            sx={{
                                my: 2,
                                maxWidth: 900,
                                fontFamily: (theme) => theme.typography.fontSecondaryFamily,
                                fontWeight: 700,
                                letterSpacing: '-0.02em',
                                lineHeight: 1.03,
                                fontSize: { xs: 44, sm: 60, md: 76, lg: 84 },
                            }}
                        >
                            <Box component="span" sx={{ color: cream }}>
                                {t('home_hero_title_line1')}
                            </Box>
                            <br />
                            <Box component="span" sx={{ color: onDark.accent }}>
                                {t('home_hero_title_line2')}
                            </Box>
                        </Typography>
                    </m.div>

                    <m.div variants={varFade().inUp}>
                        <Typography
                            sx={{ maxWidth: 560, fontSize: { xs: 16.5, md: 19 }, lineHeight: 1.6, color: onDark.textLead }}
                        >
                            {t('home_hero_lead')}
                        </Typography>
                    </m.div>

                    <m.div variants={varFade().inUp}>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={2}
                            sx={{ mt: 5, width: { xs: 1, sm: 'auto' } }}
                        >
                            <Button
                                component={RouterLink}
                                href={paths.contact}
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{ width: { xs: 1, sm: 'auto' } }}
                            >
                                {t('home_hero_cta_primary')}
                            </Button>
                            <Button
                                component={RouterLink}
                                href="/#services"
                                variant="outlined"
                                size="large"
                                sx={{
                                    width: { xs: 1, sm: 'auto' },
                                    color: cream,
                                    borderColor: alpha(cream, 0.3),
                                    '&:hover': { borderColor: cream, backgroundColor: alpha(cream, 0.06) },
                                }}
                            >
                                {t('home_hero_cta_secondary')}
                            </Button>
                        </Stack>
                    </m.div>

                    {/* tech strip */}
                    <m.div variants={varFade().inUp}>
                        <Stack
                            direction="row"
                            useFlexGap
                            sx={{ mt: { xs: 6, md: 10 }, flexWrap: 'wrap', alignItems: 'center', columnGap: 2, rowGap: 1.5 }}
                        >
                            {TECH.map((tech, i) => (
                                <Stack key={tech} direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                                    {i > 0 && (
                                        <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: onDark.accent }} />
                                    )}
                                    <Typography
                                        sx={{
                                            fontFamily: (theme) => theme.typography.fontSecondaryFamily,
                                            fontWeight: 700,
                                            fontSize: 13,
                                            letterSpacing: '0.12em',
                                            textTransform: 'uppercase',
                                            color: alpha(cream, 0.55),
                                        }}
                                    >
                                        {tech}
                                    </Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </m.div>
                </Box>
            </SectionContainer>
        </Box>
    );
}
