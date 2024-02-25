/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';

// i18n
import 'src/locales/i18n';

// eslint-disable-next-line import/no-extraneous-dependencies
import { SpeedInsights } from '@vercel/speed-insights/next';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Analytics } from '@vercel/analytics/react';

import { cookies } from 'next/headers'

// ----------------------------------------------------------------------

import ThemeProvider from 'src/theme';
import { LocalizationProvider } from 'src/locales';
import { primaryFont } from 'src/theme/typography';

import ProgressBar from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import SnackbarProvider from 'src/components/snackbar/snackbar-provider';
import { SettingsDrawer, SettingsProvider } from 'src/components/settings';

import { AuthProvider } from 'src/auth/context/jwt';
import { APP_NAME, COOKIE_NAME, GA_TRACKING_ID } from '@base/config-global';
import { CookieBanner } from '@components/cookie-banner';

import { GoogleAnalytics } from '@next/third-parties/google'

// import { AuthProvider } from 'src/auth/context/auth0';
// import { AuthProvider } from 'src/auth/context/amplify';
// import { AuthProvider } from 'src/auth/context/firebase';
// import { AuthProvider } from 'src/auth/context/supabase';

// ----------------------------------------------------------------------

export const viewport = {
    themeColor: '#5C3BA4',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

export const metadata = {
    title: {
        template: `%s | ${APP_NAME}`,
        default: `${APP_NAME}`, // a default is required when creating a template
    },
    description:
        'Codage je IT tvrtka koja se bavi izradom web stranica, web aplikacija, mobilnih aplikacija, desktop aplikacija i dizajnom korisničkih sučelja.',
    keywords: 'Codage, IT, Split, web, aplikacije, mobilne, desktop, ui, ux',
    manifest: '/manifest.json',
    icons: [
        { rel: 'icon', url: '/favicon/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', url: '/favicon/apple-touch-icon.png' },
    ],
};

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {

    const showCookieBanner = !cookies().has(COOKIE_NAME);

    return (
        <html lang="hr" className={primaryFont.className}>
            <body>
                <AuthProvider>
                    <LocalizationProvider>
                        <SettingsProvider
                            defaultSettings={{
                                themeMode: 'light', // 'light' | 'dark'
                                themeDirection: 'ltr', //  'rtl' | 'ltr'
                                themeContrast: 'default', // 'default' | 'bold'
                                themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
                                themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
                                themeStretch: false,
                            }}
                        >
                            <ThemeProvider>
                                <MotionLazy>
                                    <SnackbarProvider>
                                        <SettingsDrawer />
                                        <ProgressBar />
                                        {children}
                                    </SnackbarProvider>
                                </MotionLazy>
                            </ThemeProvider>
                        </SettingsProvider>
                    </LocalizationProvider>
                </AuthProvider>
                <SpeedInsights />
                <GoogleAnalytics gaId={GA_TRACKING_ID} />
                {showCookieBanner && <CookieBanner />}
            </body>
        </html>
    );
}
