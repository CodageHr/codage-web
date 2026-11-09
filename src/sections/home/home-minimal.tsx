'use client';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { RouterLink } from '@routes/components';

import { useTranslate } from '@base/locales';
import { SERVICES } from '@sections/services/config';

import Iconify from '@components/iconify';
import { SectionContainer } from '@components/_ui/section';
import { varFade, MotionViewport } from '@components/animate';

import { brand } from 'src/theme/tokens';

// ----------------------------------------------------------------------

type ServiceRow = { num: string; title: string; desc: string; tech: string; href: string };

// Each row links to its service landing page - the main internal link into them.
function NumberedRow({ row, isFirst }: { row: ServiceRow; isFirst: boolean }) {
    return (
        <m.div variants={varFade().inUp}>
            <Link
                component={RouterLink}
                href={row.href}
                underline="none"
                sx={{
                    color: 'inherit',
                    display: 'grid',
                    gridTemplateColumns: { xs: '56px 1fr', md: '120px 1.4fr 1fr auto' },
                    alignItems: { xs: 'start', md: 'center' },
                    columnGap: { xs: 2, md: 3 },
                    rowGap: 1,
                    py: { xs: 3, md: 5 },
                    px: { md: 3 },
                    mx: { md: -3 },
                    borderTop: (theme) => (isFirst ? `1px solid ${theme.palette.divider}` : 'none'),
                    borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                    borderRadius: { md: 2 },
                    transition: (theme) => theme.transitions.create(['background-color'], { duration: 180 }),
                    '&:hover': { bgcolor: 'background.paper' },
                }}
            >
                <Typography
                    sx={{
                        gridRow: { xs: '1 / span 3', md: 'auto' },
                        fontFamily: (theme) => theme.typography.fontSecondaryFamily,
                        fontWeight: 700,
                        fontSize: { xs: 28, md: 40 },
                        lineHeight: 1,
                        color: brand[500],
                    }}
                >
                    {row.num}
                </Typography>

                <Typography variant="h3">{row.title}</Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 360 }}>
                    {row.desc}
                </Typography>

                <Stack
                    direction="row"
                    sx={{ alignItems: 'center', justifyContent: 'space-between', gridColumn: { xs: '2', md: 'auto' } }}
                >
                    <Typography variant="caption" sx={{ color: 'text.secondary', mr: 2 }}>
                        {row.tech}
                    </Typography>
                    <Iconify
                        icon="material-symbols:arrow-outward-rounded"
                        width={28}
                        sx={{ color: 'text.primary', display: { xs: 'none', md: 'block' }, flexShrink: 0 }}
                    />
                </Stack>
            </Link>
        </m.div>
    );
}

export default function HomeServices() {
    const { t } = useTranslate();

    const rows: ServiceRow[] = SERVICES.map((service, i) => ({
        num: `0${i + 1}`,
        title: t(service.titleKey),
        desc: t(service.descKey),
        tech: t(`home_svc_${i + 1}_tech`),
        href: service.path,
    }));

    return (
        <Box component="section" id="services" sx={{ bgcolor: 'background.default', py: { xs: 6, md: 13 } }}>
            <SectionContainer component={MotionViewport}>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={2}
                    sx={{ justifyContent: 'space-between', alignItems: { md: 'flex-end' }, mb: { xs: 4, md: 6 } }}
                >
                    <m.div variants={varFade().inUp}>
                        <Typography variant="h2">{t('home_services_title')}</Typography>
                    </m.div>
                    <m.div variants={varFade().inUp}>
                        <Typography
                            variant="body1"
                            sx={{ color: 'text.secondary', maxWidth: 380, textAlign: { md: 'right' } }}
                        >
                            {t('home_services_intro')}
                        </Typography>
                    </m.div>
                </Stack>

                {rows.map((row, i) => (
                    <NumberedRow key={row.num} row={row} isFirst={i === 0} />
                ))}
            </SectionContainer>
        </Box>
    );
}
