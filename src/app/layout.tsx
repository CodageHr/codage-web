/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';

// i18n
import 'src/locales/i18n';

 
import { SpeedInsights } from '@vercel/speed-insights/next';
 
// ----------------------------------------------------------------------

import ThemeProvider from 'src/theme';
import { LocalizationProvider } from 'src/locales';
import { primaryFont, secondaryFont } from 'src/theme/typography';

import ProgressBar from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import SnackbarProvider from 'src/components/snackbar/snackbar-provider';
import { SettingsProvider } from 'src/components/settings';

import { AuthProvider } from 'src/auth/context/jwt';
import StructuredData from '@components/structured-data';
import { APP_HOST, APP_NAME, GA_TRACKING_ID } from '@base/config-global';
import { CookieBanner } from '@components/cookie-banner';

import { GoogleAnalytics } from '@next/third-parties/google'

// ----------------------------------------------------------------------

export const viewport = {
    themeColor: '#201913',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

const description =
    'Codage je softverski studio iz Splita koji izrađuje web i mobilne aplikacije po mjeri — od prve skice do produkcije.';

export const metadata = {
    metadataBase: new URL(APP_HOST),
    title: {
        template: `%s | ${APP_NAME}`,
        default: `${APP_NAME} — Softver po mjeri`,
    },
    description,
    keywords: 'Codage, softverski studio, Split, web aplikacije, mobilne aplikacije, Next.js, Laravel, ui, ux',
    alternates: { canonical: '/' },
    openGraph: {
        type: 'website',
        locale: 'hr_HR',
        siteName: APP_NAME,
        url: APP_HOST,
        title: `${APP_NAME} — Softver po mjeri`,
        description,
        images: [{ url: '/og-image.png', width: 1200, height: 630, alt: APP_NAME }],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${APP_NAME} — Softver po mjeri`,
        description,
        images: ['/og-image.png'],
    },
    manifest: '/manifest.json',
    icons: {
        icon: [
            { url: '/favicon/codage-mark.svg', type: 'image/svg+xml' },
            { url: '/favicon/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
            { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        ],
        apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    },
};

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
    return (
        <html lang="hr" className={`${primaryFont.className} ${secondaryFont.variable}`}>
            <body>
                {/* No-JS / bot fallback: reveal scroll-in content that framer starts at opacity:0 */}
                <noscript>
                    {/* eslint-disable-next-line react/no-danger */}
                    <style
                        dangerouslySetInnerHTML={{
                            __html: '[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}',
                        }}
                    />
                </noscript>
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
                                        <ProgressBar />
                                        {children}
                                    </SnackbarProvider>
                                </MotionLazy>
                            </ThemeProvider>
                        </SettingsProvider>
                    </LocalizationProvider>
                </AuthProvider>
                {/* Vercel Speed Insights only works on Vercel; skip elsewhere to avoid a 404 */}
                {process.env.VERCEL ? <SpeedInsights /> : null}
                <GoogleAnalytics gaId={GA_TRACKING_ID} />
                <StructuredData />
                <CookieBanner />
            </body>
        </html>
    );
}
