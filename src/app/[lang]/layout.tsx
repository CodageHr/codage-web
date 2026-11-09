/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';

import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';

// ----------------------------------------------------------------------

import ThemeProvider from 'src/theme';
import { I18nProvider, LocalizationProvider } from 'src/locales';
import { LANGS, toLang } from 'src/locales/langs';
import { SITE_SEO } from 'src/locales/seo';
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
// This IS the root layout - it owns <html>. Next only lets one layout do that,
// and <html lang> has to vary per locale, so every page lives under [lang].
// A page left outside [lang] fails the build with "doesn't have a root layout".

/** Prerender both locales. */
export function generateStaticParams() {
    return LANGS.map((lang) => ({ lang }));
}

/** Anything that isn't a known locale (/fr/, /xyz/) 404s - and stays static. */
export const dynamicParams = false;

export const viewport = {
    themeColor: '#201913',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

type Props = {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const lang = toLang((await params).lang);
    const site = SITE_SEO[lang];

    return {
        metadataBase: new URL(APP_HOST),
        title: {
            template: `%s | ${APP_NAME}`,
            default: site.defaultTitle,
        },
        description: site.description,
        keywords: site.keywords,
        // canonical + hreflang are set per page (see src/lib/seo). A root canonical
        // would make every page look like a duplicate of the locale home.
        openGraph: {
            type: 'website',
            locale: lang === 'hr' ? 'hr_HR' : 'en_US',
            alternateLocale: lang === 'hr' ? 'en_US' : 'hr_HR',
            siteName: APP_NAME,
            url: `${APP_HOST}/${lang}/`,
            images: [{ url: '/og-image.png', width: 1200, height: 630, alt: APP_NAME }],
        },
        twitter: {
            card: 'summary_large_image',
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
}

export default async function RootLayout({ children, params }: Props) {
    const lang = toLang((await params).lang);

    return (
        <html lang={lang} className={`${primaryFont.className} ${secondaryFont.variable}`}>
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
                {/* I18nProvider must stay outermost: LocalizationProvider and
                    ThemeProvider both call useLocales(), which reads its context. */}
                <I18nProvider lang={lang}>
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
                                    <CookieBanner />
                                </ThemeProvider>
                            </SettingsProvider>
                        </LocalizationProvider>
                    </AuthProvider>
                </I18nProvider>
                {/* Vercel Speed Insights only works on Vercel; skip elsewhere to avoid a 404 */}
                {process.env.VERCEL ? <SpeedInsights /> : null}
                <GoogleAnalytics gaId={GA_TRACKING_ID} />
                <StructuredData lang={lang} />
            </body>
        </html>
    );
}
