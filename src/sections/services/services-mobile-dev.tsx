import { useMemo } from 'react';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { useResponsive } from '@hooks/use-responsive';

import { useTranslate } from '@base/locales';

import Image from '@components/image';
import { varFade, MotionViewport } from '@components/animate';

import { bgGradient } from '@theme/css';
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function ServicesWebDev() {

    const mdUp = useResponsive('up', 'md');

    return (
        <Container component={MotionViewport} sx={{ my:10 }}>
            <Grid container direction={mdUp ? 'row' : 'column-reverse'} spacing={5} sx={{ height: 1 }}>
                <Grid item xs={12} md={6} >
                    <Content />
                </Grid>
                <Grid item xs={12} md={6} sx={{ height: 1 }}>
                    <Description />
                </Grid>
            </Grid>
        </Container>
    );

}

// ----------------------------------------------------------------------

function Description() {

    const { translate } = useTranslate();

    const TECH_LIST: string[]  = useMemo(() => ([
        'iOS',
        'Android',
        'Native',
        'Hybrid'
    ]),[ ]);

    return (
        <Stack
            spacing={6}
            sx={{
                pb: 5,
                px: 0,
                alignItems:'flex-start'
            }}
        >
            <m.div variants={varFade().inRight}>
                <Stack
                    flexGrow={1}
                    direction={'column'}
                    spacing={2}
                >
                    <Typography
                        variant={'h3'}
                    >
                        {`${translate('service_mobile_dev_title')}`}
                    </Typography>
                    <Typography variant={'body1'} mt={1} color={'contrastText'}>{`${translate('service_mobile_dev_text')}`}</Typography>
                    <Box
                        gap={2}
                        display="grid"
                        gridTemplateColumns={{
                            xs: 'repeat(4, 1fr)',
                            sm: 'repeat(4, 1fr)'
                        }}
                    >
                        {TECH_LIST.map((pain) => <Chip key={pain} label={pain} variant="filled" color={'primary'} />)}
                    </Box>
                </Stack>

            </m.div>
        </Stack>
    );

}
// ----------------------------------------------------------------------

function Content() {


    const theme = useTheme();

    return (
        <m.div variants={varFade().inLeft} style={{ position:'relative' }} >
            <Box sx={{
                zIndex:999,
                ...bgGradient({
                    startColor: alpha(theme.palette.primary.main, theme.palette.mode === 'light' ? 0.40 : 0.45),
                    endColor: alpha(theme.palette.primary.light, theme.palette.mode === 'light' ? 0.40 : 0.45),
                    /* imgUrl: '/assets/background/overlay_5.jpg', */
                }),
                position: 'absolute',
                top:0,
                left:0,
                height: '100%',
                width: '100%',
                borderRadius: 1,
            }} />
            <Image
                disabledEffect
                alt={'image'}
                src={'/assets/images/services/mobile-app.webp'}
                sx={{
                    borderRadius: 1,

                }}
            />
        </m.div>
    );

}
