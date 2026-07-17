'use client';

import { forwardRef } from 'react';
import Link, { LinkProps } from 'next/link';

import { useCurrentLang } from '@base/locales/i18n-provider';

import { localizeHref } from '../localize-href';

// ----------------------------------------------------------------------
// Every internal link funnels through here, so prefixing the active locale in
// one place keeps `paths.about` locale-free at ~all call sites.
//
// External links (mailto:/tel:/https) and pure #anchors are passed through
// untouched — see localizeHref.
// ----------------------------------------------------------------------

interface AnchorProps extends LinkProps {
    target?: HTMLAnchorElement['target'];
    rel?: HTMLAnchorElement['rel'];
}

const RouterLink = forwardRef<HTMLAnchorElement, AnchorProps>(({ href, ...other }, ref) => {
    const lang = useCurrentLang();

    return <Link ref={ref} href={typeof href === 'string' ? localizeHref(href, lang) : href} {...other} />;
});

export default RouterLink;
