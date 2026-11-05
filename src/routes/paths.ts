// ----------------------------------------------------------------------

const ROOTS = {
    AUTH: '/auth',
    DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------
// Route identities — locale-free on purpose. RouterLink prefixes the active
// locale at render time (see src/routes/localize-href.ts), so call sites keep
// using `paths.about` and get `/hr/about-us/` or `/en/about-us/` for free.

export const paths = {
    // Marketing
    home: '/',
    about: '/about-us',
    contact: '/contact-us',

    // Service landing pages (see src/sections/services/config.ts)
    services: {
        webApps: '/services/web-applications',
        mobileApps: '/services/mobile-applications',
        designConsulting: '/services/design-consulting',
    },

    // Legal
    legalInfo: '/legal-info',
    privacyPolicy: '/privacy-policy',
    cookies: '/cookies',
    termsOfUse: '/terms-of-use',

    // Auth — not routed publicly, but still referenced by the AuthProvider
    // chain (src/auth/context, src/auth/guard) inherited from the template.
    auth: {
        amplify: {
            login: `${ROOTS.AUTH}/amplify/login`,
            verify: `${ROOTS.AUTH}/amplify/verify`,
            register: `${ROOTS.AUTH}/amplify/register`,
            newPassword: `${ROOTS.AUTH}/amplify/new-password`,
            forgotPassword: `${ROOTS.AUTH}/amplify/forgot-password`,
        },
        jwt: {
            login: `${ROOTS.AUTH}/jwt/login`,
            register: `${ROOTS.AUTH}/jwt/register`,
        },
        firebase: {
            login: `${ROOTS.AUTH}/firebase/login`,
            verify: `${ROOTS.AUTH}/firebase/verify`,
            register: `${ROOTS.AUTH}/firebase/register`,
            forgotPassword: `${ROOTS.AUTH}/firebase/forgot-password`,
        },
        auth0: {
            login: `${ROOTS.AUTH}/auth0/login`,
        },
        supabase: {
            login: `${ROOTS.AUTH}/supabase/login`,
            verify: `${ROOTS.AUTH}/supabase/verify`,
            register: `${ROOTS.AUTH}/supabase/register`,
            newPassword: `${ROOTS.AUTH}/supabase/new-password`,
            forgotPassword: `${ROOTS.AUTH}/supabase/forgot-password`,
        },
    },
    dashboard: {
        root: ROOTS.DASHBOARD,
    },
};
