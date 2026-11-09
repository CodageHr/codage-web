'use client';

import Container, { ContainerProps } from '@mui/material/Container';
import Typography, { TypographyProps } from '@mui/material/Typography';

import { brand, onDark, layout } from 'src/theme/tokens';

// ----------------------------------------------------------------------

// Max-width 1240 container with the design's responsive gutters (20 / 32).
export function SectionContainer({ children, sx, ...other }: ContainerProps) {
    return (
        <Container
            maxWidth={false}
            sx={{ maxWidth: layout.containerMaxWidth, px: layout.containerPx, ...sx }}
            {...other}
        >
            {children}
        </Container>
    );
}

// ----------------------------------------------------------------------

type EyebrowProps = TypographyProps & {
  onDark?: boolean;
};

// Space Grotesk 700 caps eyebrow - brand-600 on light, brand-dark on dark bands.
export function Eyebrow({ onDark: dark = false, sx, children, ...other }: EyebrowProps) {
    return (
        <Typography
            variant="overline"
            component="p"
            sx={{ color: dark ? onDark.accent : brand[600], ...sx }}
            {...other}
        >
            {children}
        </Typography>
    );
}
