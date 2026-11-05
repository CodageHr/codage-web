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
import { TESTIMONIALS } from '@components/testimonials';
import { Eyebrow, SectionContainer } from '@components/_ui/section';

import { sand, brand, cream, onDark } from 'src/theme/tokens';

// ----------------------------------------------------------------------

const DATA = TESTIMONIALS;

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
                                        {t(active.roleKey)}
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
