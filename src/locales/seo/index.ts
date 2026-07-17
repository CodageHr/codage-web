import { type Lang } from '../config-lang';

// ----------------------------------------------------------------------
// Server-side SEO copy. Deliberately SEPARATE from langs/*.json and typed
// rather than JSON: generateMetadata() runs on the server and must never touch
// the client i18next instance, and Record<Lang, Record<RouteKey, …>> makes a
// missing translation a compile error instead of a silently untranslated <title>.
// ----------------------------------------------------------------------

export type RouteKey =
    | 'home'
    | 'about'
    | 'contact'
    | 'legalInfo'
    | 'privacyPolicy'
    | 'termsOfUse'
    | 'cookies';

type SeoEntry = {
    /** Page <title>. On 'home' it is used absolutely (no "| Codage" suffix). */
    title: string;
    description: string;
};

/** Site-wide copy that lives on the root layout rather than a page. */
type SiteSeo = {
    /** title.default — used when a page sets no title. */
    defaultTitle: string;
    description: string;
    keywords: string;
};

export const SITE_SEO: Record<Lang, SiteSeo> = {
    hr: {
        defaultTitle: 'Codage — Softver po mjeri',
        description:
            'Codage je softverski studio iz Splita koji izrađuje web i mobilne aplikacije po mjeri — od prve skice do produkcije.',
        keywords:
            'Codage, softverski studio, Split, web aplikacije, mobilne aplikacije, Next.js, Laravel, ui, ux',
    },
    en: {
        defaultTitle: 'Codage — Custom software',
        description:
            'Codage is a software studio from Split, Croatia, building custom web and mobile apps — from the first sketch to production.',
        keywords:
            'Codage, software studio, Split, Croatia, web apps, mobile apps, Next.js, Laravel, ui, ux',
    },
};

export const SEO: Record<Lang, Record<RouteKey, SeoEntry>> = {
    hr: {
        home: {
            title: 'Codage — Web i mobilne aplikacije po mjeri | Split',
            description:
                'Softverski studio iz Splita. Web i mobilne aplikacije po mjeri — od prve skice do produkcije. React, Next.js, Spring Boot, Java, Scala, Laravel.',
        },
        about: {
            title: 'O nama',
            description:
                'Codage je mali softverski studio iz Splita. Naš pristup radu, vrijednosti i tim koji stoji iza vaših projekata.',
        },
        contact: {
            title: 'Kontakt',
            description:
                'Javite nam se — procjena projekta i prvi razgovor su besplatni. Odgovaramo unutar jednog radnog dana. kontakt@codage.hr, +385 98 403 330.',
        },
        legalInfo: {
            title: 'Pravni podaci',
            description:
                'Pravni podaci tvrtke Codage d.o.o. — adresa, OIB, MBS, temeljni kapital i kontakt informacije.',
        },
        privacyPolicy: {
            title: 'Politika privatnosti',
            description:
                'Politika privatnosti — kako Codage d.o.o. prikuplja, koristi i štiti vaše osobne podatke u skladu s GDPR-om.',
        },
        termsOfUse: {
            title: 'Uvjeti korištenja',
            description: 'Uvjeti korištenja internetske stranice www.codage.hr.',
        },
        cookies: {
            title: 'Politika kolačića',
            description:
                'Politika kolačića — koje kolačiće koristi web stranica Codage i kako upravljati postavkama.',
        },
    },
    en: {
        home: {
            title: 'Codage — Custom web & mobile app development | Split, Croatia',
            description:
                'Software studio from Split, Croatia. Custom web and mobile apps — from the first sketch to production. React, Next.js, Spring Boot, Java, Scala, Laravel.',
        },
        about: {
            title: 'About us',
            description:
                'Codage is a small software studio from Split, Croatia. How we work, what we value, and the team behind your project.',
        },
        contact: {
            title: 'Contact',
            description:
                'Get in touch — the first call and the project estimate are free. We reply within one business day. kontakt@codage.hr, +385 98 403 330.',
        },
        legalInfo: {
            title: 'Legal information',
            description:
                'Legal information for Codage d.o.o. — registered office, OIB, MBS, share capital and contact details.',
        },
        privacyPolicy: {
            title: 'Privacy Policy',
            description:
                'Privacy Policy — how Codage d.o.o. collects, uses and protects your personal data in line with the GDPR.',
        },
        termsOfUse: {
            title: 'Terms of Use',
            description: 'Terms of use for the www.codage.hr website.',
        },
        cookies: {
            title: 'Cookie Policy',
            description:
                'Cookie Policy — which cookies the Codage website uses and how to manage your settings.',
        },
    },
};
