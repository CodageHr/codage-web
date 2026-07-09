import { m, useScroll } from 'framer-motion';
import { HEADER } from '@layouts/config-layout';
import { useRef, useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';

import { useResponsive } from '@hooks/use-responsive';

import { useTranslate } from '@base/locales';

import { varFade, MotionContainer } from '@components/animate';

import { bgGradient } from '@theme/css';

import { SoftwareEngineerIllustration } from '@assets/illustrations';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
    ...bgGradient({
        color: alpha(theme.palette.background.default, theme.palette.mode === 'light' ? 0.9 : 0.94),
        imgUrl: '/assets/background/overlay_3.jpg',
    }),
    width: '100%',
    height: '50vh',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
        height: '100vh',
    },
    [theme.breakpoints.up('md')]: {
        top: 0,
        left: 0,
        position: 'fixed',
    },
}));

const StyledWrapper = styled('div')(({ theme }) => ({
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
        marginTop: HEADER.H_DESKTOP_OFFSET,
    },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {

    const mdUp = useResponsive('up', 'md');

    const { translate } = useTranslate();

    const heroRef = useRef<HTMLDivElement | null>(null);

    const { scrollY } = useScroll();

    const [ percent, setPercent ] = useState(0);

    const getScroll = useCallback(() => {

        let heroHeight = 0;

        if (heroRef.current) {

            heroHeight = heroRef.current.offsetHeight;

        }

        scrollY.on('change', (scrollHeight) => {

            const scrollPercent = (scrollHeight * 100) / heroHeight;

            setPercent(Math.floor(scrollPercent));

        });

    }, [ scrollY ]);

    useEffect(() => {

        getScroll();

    }, [ getScroll ]);

    const opacity = 1 - percent / 100;

    const hide = percent > 120;

    const renderDescription = (
        <Stack
            alignItems="flex-start"
            justifyContent="center"
            sx={{
                height: 1,
                opacity: opacity > 0 ? opacity : 0,
                mt: {
                    md: `-${HEADER.H_DESKTOP + percent * 2.5}px`,
                },
            }}
        >

            <m.div variants={varFade().in}>
                <Typography variant="h5" sx={{ textAlign: 'left', mb: 3 }}>
                    {translate('home_hero_caption')}
                </Typography>
            </m.div>
            <m.div variants={varFade().in}>
                <Typography variant="h2" sx={{ color: 'text.disabled' }}>
                    Vaša <Typography variant={'h1'} component="span" sx={{ display: 'inline-block', color: 'primary.main' }}>Digitalna
                    transformacija</Typography>

                    Započinje ovdje
                </Typography>

            </m.div>
        </Stack>
    );

    const renderHeroImage = (
        <Stack
            alignItems="flex-start"
            justifyContent="center"
            sx={{
                height: 1,
                opacity: opacity > 0 ? opacity : 0,
                mt: {
                    md: `-${HEADER.H_DESKTOP + percent * 2.5}px`,
                },
            }}
        >
            <SoftwareEngineerIllustration
                sx={{
                    my: 2,
                    height: 500,
                }}
            />
        </Stack>
    );

    return (
        <>
            <StyledRoot
                ref={heroRef}
                sx={{
                    ...(hide && {
                        opacity: 0,
                    }),
                }}
            >
                <StyledWrapper>
                    <Container component={MotionContainer} sx={{ height: 1 }}>
                        <Grid container columnSpacing={{ md: 10 }} sx={{ height: 1 }}>
                            <Grid size={{ xs: 12, md: 7 }}>
                                {renderDescription}
                            </Grid>

                            {mdUp && <Grid size={{ md: 5 }} pt={8}>{renderHeroImage}</Grid>}
                        </Grid>
                    </Container>
                </StyledWrapper>
            </StyledRoot>
            <Box sx={{ height: { md: '100vh' }}} />
        </>
    );

}
