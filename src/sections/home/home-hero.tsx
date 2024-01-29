import { m, useScroll } from 'framer-motion';
import { HEADER } from '@layouts/config-layout';
import { useRef, useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';

import { useResponsive } from '@hooks/use-responsive';

import { useTranslate } from '@base/locales';

import Image from '@components/image';
import { varFade, MotionContainer } from '@components/animate';

import { bgGradient, textGradient } from '@theme/css';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, theme.palette.mode === 'light' ? 0.9 : 0.94),
    imgUrl: '/assets/background/overlay_3.jpg',
  }),
  width: '100%',
  height: '100vh',
  position: 'relative',
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

const StyledTextGradient = styled(m.h1)(({ theme }) => ({
  ...textGradient(
    `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.info.light} 25%, ${theme.palette.primary.main} 50%, ${theme.palette.info.light} 75%, ${theme.palette.primary.main} 100%`
  ),
  padding: 0,
  marginTop: 8,
  lineHeight: 1,
  fontWeight: 900,
  marginBottom: 24,
  letterSpacing: 8,
  textAlign: 'center',
  backgroundSize: '400%',
  fontSize: '3rem',
  fontFamily: theme.typography.fontSecondaryFamily,
  [theme.breakpoints.up('md')]: {
    fontSize: '3.5rem',
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
      alignItems="center"
      justifyContent="center"
      sx={{
        height: 1,
        mx: 'auto',
        maxWidth: 480,
        opacity: opacity > 0 ? opacity : 0,
        mt: {
          md: `-${HEADER.H_DESKTOP + percent * 2.5}px`,
        },
      }}
    >

      <m.div variants={varFade().in}>
        <StyledTextGradient
          animate={{ backgroundPosition: '200% center' }}
          transition={{
            repeatType: 'reverse',
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
          }}
        >
          {translate('home_hero_title')}
        </StyledTextGradient>
      </m.div>

      <m.div variants={varFade().in}>
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          {translate('home_hero_caption')}
        </Typography>
      </m.div>
    </Stack>
  );

  const renderHeroImage = (
    <Image

        alt={'development image'}
        src={'/assets/images/home/hero/development_hero_no_bg.png'}
        ratio="1/1"
      />
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
              <Grid xs={12} md={6}>
                {renderDescription}
              </Grid>

              {mdUp && <Grid md={6} pt={8}>{renderHeroImage}</Grid>}
            </Grid>
          </Container>
        </StyledWrapper>
      </StyledRoot>
      <Box sx={{ height: { md: '100vh' }}} />
    </>
  );

}
