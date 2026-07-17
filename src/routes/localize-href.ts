import { isLang, type Lang } from '@base/locales/langs';

// ----------------------------------------------------------------------
// Turns a locale-free route identity from paths.ts into the active locale's URL:
//   '/about-us'  + 'hr' → '/hr/about-us/'
//   '/'          + 'en' → '/en/'
//   '/#services' + 'hr' → '/hr/#services'
//
// Applied centrally in RouterLink so nav/footer/CTA/breadcrumbs keep using
// `paths.about` and get the prefix for free.
//
// It also normalises the trailing slash. next.config sets trailingSlash:true, so
// an href of '/about-us' would 308 to '/about-us/' on every single click —
// emitting the final URL here removes that hop and makes hrefs match canonicals.
// ----------------------------------------------------------------------

/** Already carries a locale prefix, e.g. '/hr/about-us/'. */
function isLocalized(pathname: string): boolean {
    return isLang(pathname.split('/')[1]);
}

const withTrailingSlash = (pathname: string): string =>
    pathname.endsWith('/') ? pathname : `${pathname}/`;

export function localizeHref(href: string, lang: Lang): string {
    // Absolute / protocol-relative / mailto: / tel: — never ours to prefix.
    if (/^([a-z][a-z0-9+.-]*:|\/\/)/i.test(href)) return href;

    // Pure fragment: stays on the current page.
    if (href.startsWith('#')) return href;

    // Relative path — not produced by paths.ts; leave alone.
    if (!href.startsWith('/')) return href;

    if (isLocalized(href)) return href;

    // Split off #hash and ?query so only the pathname is touched.
    const hashIndex = href.indexOf('#');
    const queryIndex = href.indexOf('?');
    const cut = [hashIndex, queryIndex].filter((i) => i !== -1).sort((a, b) => a - b)[0] ?? href.length;

    const pathname = href.slice(0, cut);
    const suffix = href.slice(cut);

    // '/' → '/hr/' (not '/hr//')
    const localized = pathname === '/' ? `/${lang}/` : withTrailingSlash(`/${lang}${pathname}`);

    return `${localized}${suffix}`;
}
