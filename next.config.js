/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    // Enable the React Compiler (automatic memoization). Matches the psihometar
    // reference; requires babel-plugin-react-compiler (in devDependencies).
    reactCompiler: true,
    async redirects() {
        // Every route now lives under /[lang]/, so the old unprefixed URLs (which
        // are already live and were submitted to IndexNow) must point at the HR
        // originals. Enumerated on purpose: redirects run BEFORE the filesystem,
        // so a blanket /:path* would swallow /sitemap.xml, /robots.txt,
        // /og-image.png, /manifest.json and /favicon/*.
        const toHr = (path) => ({
            source: path,
            destination: `/hr${path === '/' ? '' : path}/`,
            permanent: true,
        });

        return [
            // Without this the homepage 404s — nothing generates "/" any more.
            toHr('/'),
            ...['/about-us', '/contact-us', '/legal-info', '/privacy-policy', '/terms-of-use', '/cookies'].map(toHr),
            // Redundant duplicate of the landing page.
            { source: '/home', destination: '/hr/', permanent: true },
            // Services content now lives on the landing page ("Što radimo").
            { source: '/services', destination: '/hr/#services', permanent: true },
            // There is no services index page (only /[lang]/services/[slug]/) — send a
            // truncated URL to the services section. Temporary, so an index page can
            // be added later without a cached permanent redirect in the way.
            { source: '/:lang(hr|en)/services', destination: '/:lang/#services', permanent: false },
        ];
    },
};

module.exports = nextConfig;
