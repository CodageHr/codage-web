import { Theme } from '@mui/material/styles';

import { ink, brand } from '../../tokens';

// ----------------------------------------------------------------------

export function cssBaseline(theme: Theme) {
    return {
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    boxSizing: 'border-box',
                },
                html: {
                    margin: 0,
                    padding: 0,
                    width: '100%',
                    height: '100%',
                    WebkitOverflowScrolling: 'touch',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    scrollBehavior: 'smooth',
                    // keep anchor targets clear of the sticky header
                    scrollPaddingTop: 96,
                },
                body: {
                    margin: 0,
                    padding: 0,
                    width: '100%',
                    height: '100%',
                },
                '#root, #__next': {
                    width: '100%',
                    height: '100%',
                },
                input: {
                    '&[type=number]': {
                        MozAppearance: 'textfield',
                        '&::-webkit-outer-spin-button': {
                            margin: 0,
                            WebkitAppearance: 'none',
                        },
                        '&::-webkit-inner-spin-button': {
                            margin: 0,
                            WebkitAppearance: 'none',
                        },
                    },
                },
                img: {
                    maxWidth: '100%',
                    display: 'inline-block',
                    verticalAlign: 'bottom',
                },
                // Visible keyboard focus everywhere (WCAG AA)
                'a:focus-visible, button:focus-visible, [role="button"]:focus-visible, [tabindex]:focus-visible, summary:focus-visible':
                    {
                        outline: `2px solid ${brand[600]}`,
                        outlineOffset: 2,
                        borderRadius: 4,
                    },
                '::selection': {
                    backgroundColor: brand[100],
                    color: ink,
                },
                // Hide the floating reCAPTCHA v3 badge - the required disclosure text is
                // rendered inline in the contact form instead (Google ToS-compliant).
                '.grecaptcha-badge': {
                    visibility: 'hidden',
                },
                // Respect reduced-motion preference
                '@media (prefers-reduced-motion: reduce)': {
                    '*, *::before, *::after': {
                        animationDuration: '0.01ms !important',
                        animationIterationCount: '1 !important',
                        transitionDuration: '0.01ms !important',
                        scrollBehavior: 'auto !important',
                    },
                },
            },
        },
    };
}
