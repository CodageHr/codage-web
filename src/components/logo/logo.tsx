'use client';

import { forwardRef } from 'react';

import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

import { RouterLink } from '@routes/components';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
  variant?: 'full' | 'mark';
  /** 'auto' follows the theme mode; force 'cream'/'ink' for fixed-tone bands (e.g. dark header). */
  logoColor?: 'cream' | 'ink' | 'auto';
  height?: number;
}

const WORDMARK_RATIO = 460 / 126;

 
const Logo = forwardRef<HTMLDivElement, LogoProps>(
    (
        { disabledLink = false, variant = 'full', logoColor = 'auto', height = 30, sx, ...other },
        ref
    ) => {
        const theme = useTheme();

        const isDark = theme.palette.mode === 'dark';

        const resolved = logoColor === 'auto' ? (isDark ? 'cream' : 'ink') : logoColor;

        const src =
      variant === 'mark'
          ? '/logo/codage-mark.svg'
          : resolved === 'cream'
              ? '/logo/codage-logo-cream.svg'
              : '/logo/codage-logo.svg';

        const ratio = variant === 'mark' ? 1 : WORDMARK_RATIO;

        const logo = (
            <Box
                ref={ref}
                component="div"
                sx={{
                    height,
                    width: height * ratio,
                    flexShrink: 0,
                    display: 'inline-flex',
                    ...sx,
                }}
                {...other}
            >
                <Box
                    component="img"
                    src={src}
                    alt="Codage"
                    sx={{ height: 1, width: 1, objectFit: 'contain' }}
                />
            </Box>
        );

        if (disabledLink) {
            return logo;
        }

        return (
            <Link
                component={RouterLink}
                href="/"
                aria-label="Codage — početna"
                sx={{ display: 'contents' }}
            >
                {logo}
            </Link>
        );
    }
);

export default Logo;
