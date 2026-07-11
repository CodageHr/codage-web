import { Karla, Space_Grotesk } from 'next/font/google';

// ----------------------------------------------------------------------

export function remToPx(value: string) {
    return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
    return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }: { sm: number; md: number; lg: number }) {
    return {
        '@media (min-width:600px)': {
            fontSize: pxToRem(sm),
        },
        '@media (min-width:900px)': {
            fontSize: pxToRem(md),
        },
        '@media (min-width:1200px)': {
            fontSize: pxToRem(lg),
        },
    };
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    fontSecondaryFamily: React.CSSProperties['fontFamily'];
    fontWeightSemiBold: React.CSSProperties['fontWeight'];
  }
}

// Karla — body / UI / buttons (default). Subset latin-ext for HR diacritics.
export const primaryFont = Karla({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin', 'latin-ext'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
    variable: '--font-karla',
});

// Space Grotesk — headings / numbers / eyebrows / wordmark.
export const secondaryFont = Space_Grotesk({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin', 'latin-ext'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
    variable: '--font-space-grotesk',
});

// ----------------------------------------------------------------------

const heading = {
    fontFamily: secondaryFont.style.fontFamily,
    fontWeight: 700,
} as const;

// LEARN MORE
// https://nextjs.org/docs/basic-features/font-optimization#google-fonts

export const typography = {
    fontFamily: primaryFont.style.fontFamily, // Karla — body/UI default
    fontSecondaryFamily: secondaryFont.style.fontFamily, // Space Grotesk
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    // h1 = page title (hero bumps fontSize to display via sx)
    h1: {
        ...heading,
        lineHeight: 1.05,
        letterSpacing: '-0.02em',
        fontSize: pxToRem(36),
        ...responsiveFontSizes({ sm: 44, md: 56, lg: 68 }),
    },
    h2: {
        ...heading,
        lineHeight: 1.08,
        letterSpacing: '-0.015em',
        fontSize: pxToRem(34),
        ...responsiveFontSizes({ sm: 40, md: 46, lg: 52 }),
    },
    h3: {
        ...heading,
        lineHeight: 1.2,
        letterSpacing: '-0.01em',
        fontSize: pxToRem(21),
        ...responsiveFontSizes({ sm: 24, md: 26, lg: 28 }),
    },
    h4: {
        ...heading,
        lineHeight: 1.3,
        fontSize: pxToRem(19),
        ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
    },
    h5: {
        ...heading,
        lineHeight: 1.4,
        fontSize: pxToRem(18),
        ...responsiveFontSizes({ sm: 18, md: 19, lg: 19 }),
    },
    h6: {
        ...heading,
        lineHeight: 1.5,
        fontSize: pxToRem(17),
        ...responsiveFontSizes({ sm: 17, md: 18, lg: 18 }),
    },
    subtitle1: {
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: pxToRem(16),
    },
    subtitle2: {
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: pxToRem(14),
    },
    body1: {
        lineHeight: 1.6,
        fontSize: pxToRem(16.5),
    },
    body2: {
        lineHeight: 1.6,
        fontSize: pxToRem(14.5),
    },
    caption: {
        lineHeight: 1.5,
        fontSize: pxToRem(13.5),
    },
    // eyebrow: Space Grotesk 700 caps, +tracking
    overline: {
        ...heading,
        lineHeight: 1.5,
        fontSize: pxToRem(13),
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
    },
    button: {
        fontWeight: 700,
        lineHeight: 1.2,
        fontSize: pxToRem(15.5),
        textTransform: 'unset',
    },
} as const;
