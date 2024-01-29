'use client';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useCountdownDate } from '@hooks/use-countdown';

import Iconify from '@components/iconify';
import { varFade, MotionViewport, MotionContainer } from '@components/animate';

import ContactMap from '@sections/contact/contact-map';

import { ComingSoonIllustration } from '@assets/illustrations';

// ----------------------------------------------------------------------

const _mapContacts = [
  {
    latlng: [ 43.483192,16.6157913 ],
    address: 'Put Gaja 6, 21292 Srinjine',
    phoneNumber: '+385 98 403 330',
  }
];
// ----------------------------------------------------------------------

export default function ComingSoonView() {

  const { days, hours, minutes, seconds } = useCountdownDate(new Date('02/07/2024 21:30'));

  return (
    <>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Stižemo uskoro!
      </Typography>

      <ComingSoonIllustration sx={{ my: 2, height: 240 }} />
      <MotionContainer action animate={!!parseInt(seconds, 10) || !!parseInt(minutes,10) || !!parseInt(hours,10) || !!parseInt(days,10)} sx={{ position: 'relative' }}>
        <m.div variants={varFade().inDown}><Stack
          direction="row"
          justifyContent="center"
          divider={<Box sx={{ mx: { xs: 1, sm: 2.5 } }}>:</Box>}
          sx={{ typography: 'h2' }}
        >
          <m.div variants={varFade().inDown}>
            <TimeBlock label={parseInt(days, 10) > 1 ? 'Dana' : 'Dan'} value={days} />
          </m.div>
          <m.div variants={varFade().inDown}>
            <TimeBlock label={parseInt(hours, 10) > 1 ? 'Sati' : 'Sat'} value={hours} />
          </m.div>
          <m.div variants={varFade().inDown}>
            <TimeBlock label={'Minuta'} value={minutes} />
          </m.div>
          <m.div variants={varFade().inDown}>
            <TimeBlock label="Sekunda" value={seconds} />
          </m.div>
        </Stack></m.div>
      </MotionContainer>
      <Typography sx={{ color: 'text.secondary' }}>
        Vrijedno radimo na novoj stranici!
      </Typography>

      <Typography sx={{ color: 'text.secondary' }}>
        Za sva pitanja i informacije kontaktirajte nas putem <Button
        disableRipple
        variant={'text'}
        component={Link}
        href={'mailto:kontakt@codage.hr'}
        sx={{
          color:'text.primary',
          textTransform:'unset',
          '&:hover': {
            color: 'primary.main',
            backgroundColor:'unset'
          }}}
        startIcon={<Iconify width={'1rem'} icon={'fa6-solid:envelope'} sx={{ color:'primary.main' }}  />}
      >
        maila
      </Button> i <Button
        disableRipple
        variant={'text'}
        component={Link}
        href={'tel:+38598403330'}
        sx={{
          color:'text.primary',
          textTransform:'unset',
          '&:hover': {
            color: 'primary.main',
            backgroundColor:'unset'
          }}}
        startIcon={<Iconify width={'1rem'} icon={'ic:round-phone'} sx={{ color:'primary.main' }}  />}
      >
        telefona
      </Button>.
      </Typography>

      <Container component={MotionViewport} sx={{ mt: 2 }}>

        <m.div variants={varFade().inUp}>
          <Grid container my={3} justifyContent={'space-between'} textAlign={'left'} spacing={2}>
            <Grid item xs={12} md={6} lg={5} sx={{ overflowX: 'hidden' }}>
              <m.div variants={varFade().inLeft}>
                <Typography variant="h5" >
                  Kontakt podaci i adresa
                </Typography>
                <Stack justifyContent={'flex-start'} alignItems={'flex-start'}>
                  <Button
                    disableRipple
                    variant={'text'}
                    sx={{
                      color:'text.primary',
                      textTransform:'unset',
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor:'unset'
                      }}}
                    startIcon={<Iconify width={'1rem'} icon={'mdi:map-marker'} sx={{ color:'primary.main' }}  />}
                  >
                     Put Gaja 6, Srinjine
                  </Button>
                  <Button
                    disableRipple
                    variant={'text'}
                    component={Link}
                    href={'mailto:kontakt@codage.hr'}
                    sx={{
                      color:'text.primary',
                      textTransform:'unset',
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor:'unset'
                      }}}
                    startIcon={<Iconify width={'1rem'} icon={'fa6-solid:envelope'} sx={{ color:'primary.main' }}  />}
                  >
                    kontakt@codage.hr
                  </Button>
                  <Button
                    disableRipple
                    variant={'text'}
                    component={Link}
                    href={'tel:+38598403330'}
                    sx={{
                      color:'text.primary',
                      textTransform:'unset',
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor:'unset'
                      }}}
                    startIcon={<Iconify width={'1rem'} icon={'ic:round-phone'} sx={{ color:'primary.main' }}  />}
                  >
                    +385 98 403 330
                  </Button>
                </Stack>
                <Divider sx={{ my:3 }} />
                <Typography variant="h5" >
                  Osnovni podaci
                </Typography>
                <Typography variant="subtitle1" >
                  Codage d.o.o
                </Typography>
                <Typography variant="subtitle2" >
                  Put Gaja 6
                </Typography>
                <Typography variant="subtitle2" >
                  21292 Srinjine, Republika Hrvatska
                </Typography>
                <Typography variant="subtitle2" >
                  OIB: 49369795577
                </Typography>
              </m.div>
            </Grid>
            <Grid item xs={12} md={6} lg={5} sx={{ overflowX: 'hidden' }}>
              <m.div variants={varFade().inRight}>
                <ContactMap contacts={_mapContacts} />
              </m.div>
            </Grid>
          </Grid>
        </m.div>
      </Container>
    </>
  );

}


// ----------------------------------------------------------------------

type TimeBlockProps = {
  label: string;
  value: string;
};

function TimeBlock({ label, value }: TimeBlockProps) {
  return (
    <div>
      <Box> {value} </Box>
      <Box sx={{ color: 'text.secondary', typography: 'body1' }}>{label}</Box>
    </div>
  );
}
