'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { brand, radii } from 'src/theme/tokens';

// ----------------------------------------------------------------------

// Numbered value card (sand-50, flat) — "Kako razmišljamo" on About.
export function ValueCard({ num, title, desc }: { num: string; title: string; desc: string }) {
    return (
        <Box
            sx={{
                height: 1,
                bgcolor: 'background.default',
                borderRadius: `${radii.lg}px`,
                p: { xs: 3, md: 3.5 },
            }}
        >
            <Typography
                sx={{
                    fontFamily: (theme) => theme.typography.fontSecondaryFamily,
                    fontWeight: 700,
                    fontSize: 15,
                    color: brand[700], // AA on the sand-50 card
                    mb: 1.5,
                }}
            >
                {num}
            </Typography>
            <Typography variant="h5" component="h3" sx={{ mb: 1 }}>
                {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {desc}
            </Typography>
        </Box>
    );
}

// ----------------------------------------------------------------------

// Labelled info card (white, soft-md) — legal info + contact info blocks.
export function InfoCard({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <Card sx={{ height: 1, p: { xs: 3, md: 4 } }}>
            <Typography
                variant="overline"
                component="h2"
                sx={{ display: 'block', color: brand[600], fontSize: 12.5, mb: 1.5 }}
            >
                {label}
            </Typography>
            {children}
        </Card>
    );
}
