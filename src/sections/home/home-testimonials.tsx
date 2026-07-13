'use client';

import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { useTranslate } from '@base/locales';

import Iconify from '@components/iconify';
import { Eyebrow, SectionContainer } from '@components/_ui/section';

import { sand, brand, cream, onDark } from 'src/theme/tokens';

// ----------------------------------------------------------------------

type Testimonial = { name: string; role: string; quote: string; image?: string };

const DATA: Testimonial[] = [
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

const ARROW_SX = {
    width: 44,
    height: 44,
    borderRadius: 1.5,
    color: cream,
    border: `1px solid ${onDark.hairlineStrong}`,
    '&:hover': { borderColor: cream, backgroundColor: alpha(cream, 0.06) },
};

export default function HomeTestimonials() {
    const { t } = useTranslate();

    const [index, setIndex] = useState(0);

    const count = DATA.length;
    const go = (next: number) => setIndex((next + count) % count);
    const active = DATA[index];

    return (
        <Box component="section" sx={{ bgcolor: sand[900], color: cream, py: { xs: 7, md: 12 } }}>
            <SectionContainer>
                <Eyebrow onDark sx={{ mb: 4 }}>
                    {t('testimonials_eyebrow')}
                </Eyebrow>

                <Box sx={{ minHeight: { xs: 220, md: 200 } }}>
                    <AnimatePresence mode="wait">
                        <m.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                            <Typography
                                component="blockquote"
                                sx={{
                                    m: 0,
                                    maxWidth: 900,
                                    fontFamily: (theme) => theme.typography.fontSecondaryFamily,
                                    fontWeight: 500,
                                    fontSize: { xs: 22, md: 30 },
                                    lineHeight: 1.45,
                                    color: cream,
                                }}
                            >
                                “{active.quote}”
                            </Typography>

                            <Stack direction="row" spacing={2} sx={{ alignItems: 'center', mt: 4 }}>
                                <Avatar
                                    src={active.image}
                                    alt={active.name}
                                    sx={{ width: 52, height: 52, bgcolor: brand[100], color: brand[600], fontWeight: 700 }}
                                >
                                    {active.name.charAt(0)}
                                </Avatar>
                                <Box>
                                    <Typography sx={{ fontWeight: 700, color: cream }}>{active.name}</Typography>
                                    <Typography variant="body2" sx={{ color: onDark.textSecondary }}>
                                        {active.role}
                                    </Typography>
                                </Box>
                            </Stack>
                        </m.div>
                    </AnimatePresence>
                </Box>

                <Stack
                    direction="row"
                    sx={{ alignItems: 'center', justifyContent: 'space-between', mt: { xs: 4, md: 6 } }}
                >
                    {/* dots */}
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                        {DATA.map((item, i) => (
                            <Box
                                key={item.name}
                                component="button"
                                aria-label={item.name}
                                onClick={() => setIndex(i)}
                                sx={{
                                    p: 0,
                                    border: 'none',
                                    background: 'none',
                                    cursor: 'pointer',
                                    height: 44,
                                    minWidth: 24,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 8,
                                        width: i === index ? 24 : 8,
                                        borderRadius: 4,
                                        bgcolor: i === index ? brand[500] : alpha(cream, 0.3),
                                        transition: (theme) =>
                                            theme.transitions.create(['width', 'background-color'], { duration: 200 }),
                                    }}
                                />
                            </Box>
                        ))}
                    </Stack>

                    {/* arrows */}
                    <Stack direction="row" spacing={1.5}>
                        <IconButton aria-label={t('prev')} onClick={() => go(index - 1)} sx={ARROW_SX}>
                            <Iconify icon="mingcute:left-line" width={22} />
                        </IconButton>
                        <IconButton aria-label={t('next')} onClick={() => go(index + 1)} sx={ARROW_SX}>
                            <Iconify icon="mingcute:right-line" width={22} />
                        </IconButton>
                    </Stack>
                </Stack>
            </SectionContainer>
        </Box>
    );
}
