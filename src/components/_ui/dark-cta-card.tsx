'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from '@routes/components';

import { sand, cream, onDark, radii } from 'src/theme/tokens';

// ----------------------------------------------------------------------

type Props = {
  title: string;
  lead?: string;
  ctaLabel: string;
  ctaHref: string;
};

// Dark rounded CTA card (sand-900) - copy on the left, primary action on the right.
export default function DarkCtaCard({ title, lead, ctaLabel, ctaHref }: Props) {
    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                bgcolor: sand[900],
                color: cream,
                borderRadius: `${radii.xl}px`,
                p: { xs: 3.5, md: 6 },
            }}
        >
            <Box
                aria-hidden
                sx={{
                    position: 'absolute',
                    top: -120,
                    right: -120,
                    width: 360,
                    height: 360,
                    pointerEvents: 'none',
                    background: `radial-gradient(circle, ${alpha('#E07E58', 0.2)} 0%, transparent 70%)`,
                }}
            />
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 3, md: 4 }}
                sx={{ position: 'relative', alignItems: { md: 'center' }, justifyContent: 'space-between' }}
            >
                <Box>
                    <Typography variant="h3" sx={{ color: cream, mb: lead ? 1.5 : 0 }}>
                        {title}
                    </Typography>
                    {lead && (
                        <Typography sx={{ color: onDark.textLead, maxWidth: 460 }}>{lead}</Typography>
                    )}
                </Box>
                <Button
                    component={RouterLink}
                    href={ctaHref}
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ flexShrink: 0, width: { xs: 1, md: 'auto' } }}
                >
                    {ctaLabel}
                </Button>
            </Stack>
        </Box>
    );
}
