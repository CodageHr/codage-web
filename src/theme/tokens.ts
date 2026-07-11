// ----------------------------------------------------------------------
// Codage — "Studio samopouzdanja" design tokens (single source of truth).
// Sirove vrijednosti iz design-handoff/HANDOFF.md §1–3. Konzumira ih palette,
// component overrides i sekcije (preko `sx`). NE hardkodirati hex u sekcijama —
// uvijek povuci odavde ili preko theme.palette.
// ----------------------------------------------------------------------

// Brand (terracotta) — brand-50 … brand-900 + dark accent
export const brand = {
    50: '#FBF4EF',
    100: '#F7E2D8',
    200: '#EFC5B0',
    300: '#E5A183',
    400: '#DF8663',
    500: '#D96C47', // primary buttons, accents (large text on white only)
    600: '#BC4E2C', // hover/pressed, links, text accents (AA on white)
    700: '#98401F',
    800: '#7A3417',
    900: '#5F2910',
    dark: '#E07E58', // accent/CTA on dark surfaces & dark mode (use ink text on it)
};

// Sand (warm neutrals) — sand-0 … sand-900
export const sand = {
    0: '#FFFFFF',
    50: '#F6F1EA', // page background, input bg
    100: '#EFE8DF',
    200: '#E2D8CC', // input borders
    300: '#D3C8BD', // dividers, outline-btn borders
    400: '#A99C8F', // disabled text
    500: '#8A7D70', // captions/meta
    600: '#6B5F53', // secondary text
    700: '#4E443A', // prose body text
    800: '#33291F',
    900: '#201913', // dark bands/hero bg, dark buttons
};

export const ink = '#211C17'; // primary text
export const cream = '#F5EFE8'; // on-dark text

// Semantic
export const semantic = {
    success: '#2E7D4F',
    warning: '#B7791F',
    warningText: '#8A5A14', // darkened for badge text on light bg
    error: '#C0392B',
    info: '#2C7A8C',
};

// On-dark (inside dark bands / dark mode)
export const onDark = {
    text: cream,
    textSecondary: 'rgba(245,239,232,0.65)',
    textLead: 'rgba(245,239,232,0.7)',
    textMeta: 'rgba(245,239,232,0.5)',
    hairline: 'rgba(245,239,232,0.1)', // dark bands on light page
    hairlineStrong: 'rgba(245,239,232,0.12)', // dark mode
    accent: brand.dark,
    lineTexture: 'rgba(245,239,232,0.035)',
};

// Dark mode surfaces
export const darkMode = {
    bg: '#171210',
    surface: '#241D16',
    text: cream,
    border: 'rgba(245,239,232,0.12)',
    inputBg: '#171210',
    inputBorder: 'rgba(245,239,232,0.2)',
    primary: brand.dark, // #E07E58
    primaryText: sand[900], // #201913
    primaryHover: brand[400], // #DF8663
};

// Radii
export const radii = {
    sm: 8, // chips
    md: 12, // buttons
    input: 10,
    lg: 16, // cards
    xl: 24, // CTA blocks, hero frames
};

// Warm soft shadows
export const softShadows = {
    sm: '0 1px 2px rgba(32,25,19,0.05)',
    md: '0 8px 24px -8px rgba(32,25,19,0.12)', // cards
    lg: '0 24px 48px -24px rgba(32,25,19,0.18)', // hover, modals
    primaryGlow: '0 8px 24px -8px rgba(188,78,44,0.5)', // primary btn hover
};

// Layout
export const layout = {
    containerMaxWidth: 1240,
    sectionPy: { xs: 48, md: 104 },
    containerPx: { xs: 2.5, md: 4 }, // 20 / 32 (theme spacing units)
};

// Focus
export const focus = {
    inputRing: '0 0 0 3px rgba(217,108,71,0.18)',
    inputRingDark: '0 0 0 3px rgba(224,126,88,0.25)',
    outlineColor: brand[600],
};
