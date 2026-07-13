'use client';

import { useCallback, useEffect } from 'react';

// ----------------------------------------------------------------------
// Google reCAPTCHA v3 (invisible, score-based).
//
// The script is loaded lazily only where this hook is used (contact form),
// so no reCAPTCHA badge/script leaks onto pages without a form. When the site
// key is not configured the hook no-ops and `executeRecaptcha` returns
// undefined — the backend mirrors this by only requiring the token when its
// secret is set, so local dev works without any keys.
// ----------------------------------------------------------------------

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const SCRIPT_ID = 'recaptcha-v3';

declare global {
    interface Window {
        grecaptcha?: {
            ready: (cb: () => void) => void;
            execute: (siteKey: string, opts: { action: string }) => Promise<string>;
        };
    }
}

export function useRecaptcha() {
    useEffect(() => {
        if (!SITE_KEY || typeof document === 'undefined') return;
        if (document.getElementById(SCRIPT_ID)) return;

        const script = document.createElement('script');
        script.id = SCRIPT_ID;
        script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    }, []);

    const executeRecaptcha = useCallback(async (action: string): Promise<string | undefined> => {
        if (!SITE_KEY || typeof window === 'undefined' || !window.grecaptcha) return undefined;

        const { grecaptcha } = window;

        return new Promise<string | undefined>((resolve) => {
            grecaptcha.ready(() => {
                grecaptcha
                    .execute(SITE_KEY, { action })
                    .then(resolve)
                    .catch(() => resolve(undefined));
            });
        });
    }, []);

    return { executeRecaptcha, enabled: Boolean(SITE_KEY) };
}
