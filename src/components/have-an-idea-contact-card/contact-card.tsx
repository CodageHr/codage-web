import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';

import { CONTACT_CARD_ID } from '@base/config-global';

import { varFade, MotionViewport } from 'src/components/animate';
import ContactForm  from '@components/have-an-idea-contact-card/contact-form';

import { bgGradient } from 'src/theme/css';

// ----------------------------------------------------------------------

export default function ContactCard() {
    const theme = useTheme();

    const renderDescription = (
        <Box
            sx={{
                textAlign: {
                    xs: 'center',
                    md: 'left',
                },
                width: {
                    xs: '100%',
                    sm: '60%',
                    md: '30%',
                }

            }}
        >
            <Box
                component={m.div}
                variants={varFade().inDown}
                sx={{ color: 'common.white', mb: 5, typography: 'h2' }}
            >
                Imate Ideju?
                <br /> Javite Se!
            </Box>

            <ContactForm />
        </Box>
    );

    const renderImg = (
        <Stack component={m.div} variants={varFade().inUp} sx={{
            alignItems: "center"
        }}>
            <Box
                component={m.img}
                animate={{
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                alt="rocket"
                src="/assets/images/home/person_idea.svg"
                sx={{ width: '100%' }}
            />
        </Stack>
    );

    return (
        <Container component={MotionViewport} id={CONTACT_CARD_ID} sx={{ pt: 3, pb: 3 }} >
            <Stack
                spacing={2}
                direction={{ xs: 'column', md: 'row' }}
                sx={{
                    alignItems: "center",
                    justifyContent: { xs: 'center', md: 'space-evenly' },

                    ...bgGradient({
                        direction: '180deg',
                        startColor: theme.palette.primary.main,
                        endColor: theme.palette.primary.light,
                    }),

                    borderRadius: 2,
                    pb: { xs: 5, md: 0 },
                    p:{ xs: 5, md: 5 }
                }}>
                {renderImg}

                {renderDescription}
            </Stack>
        </Container>
    );
}
