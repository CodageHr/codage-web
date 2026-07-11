'use client';

import { useState } from 'react';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useTranslate } from '@base/locales';

import { SectionContainer } from '@components/_ui/section';
import { varFade, MotionViewport } from '@components/animate';

import { brand } from 'src/theme/tokens';

// ----------------------------------------------------------------------

const INACTIVE_NUMBER = '#EBDDD2';

export default function HomeProcess() {
    const { t } = useTranslate();

    // First step is coloured by default; hovering a step colours that one.
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        { num: '1', title: t('home_step_1_title'), desc: t('home_step_1_desc') },
        { num: '2', title: t('home_step_2_title'), desc: t('home_step_2_desc') },
        { num: '3', title: t('home_step_3_title'), desc: t('home_step_3_desc') },
        { num: '4', title: t('home_step_4_title'), desc: t('home_step_4_desc') },
    ];

    return (
        <Box component="section" id="proces" sx={{ bgcolor: 'background.paper', py: { xs: 6, md: 13 } }}>
            <SectionContainer component={MotionViewport}>
                <m.div variants={varFade().inUp}>
                    <Typography variant="h2" sx={{ mb: { xs: 4, md: 8 } }}>
                        {t('home_process_title')}
                    </Typography>
                </m.div>

                <Grid container spacing={{ xs: 4, md: 3 }} onMouseLeave={() => setActiveStep(0)}>
                    {steps.map((step, i) => (
                        <Grid
                            key={step.num}
                            size={{ xs: 6, md: 3 }}
                            onMouseEnter={() => setActiveStep(i)}
                        >
                            <m.div variants={varFade().inUp}>
                                <Stack spacing={{ xs: 1, md: 2 }}>
                                    <Typography
                                        sx={{
                                            fontFamily: (theme) => theme.typography.fontSecondaryFamily,
                                            fontWeight: 700,
                                            fontSize: { xs: 48, md: 72 },
                                            lineHeight: 1,
                                            color: i === activeStep ? brand[500] : INACTIVE_NUMBER,
                                            transition: (theme) =>
                                                theme.transitions.create('color', { duration: 180 }),
                                        }}
                                    >
                                        {step.num}
                                    </Typography>
                                    <Typography variant="h4">{step.title}</Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {step.desc}
                                    </Typography>
                                </Stack>
                            </m.div>
                        </Grid>
                    ))}
                </Grid>
            </SectionContainer>
        </Box>
    );
}
