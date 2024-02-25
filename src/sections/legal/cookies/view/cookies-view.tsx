'use client'

import { useScroll } from 'framer-motion';

import { useTranslate } from '@base/locales';

import ScrollProgress from '@components/scroll-progress';

import LegalPostHeader from '@sections/legal/legal-post-header';
import CookiesContent from '@sections/legal/cookies/cookies-content';

// ----------------------------------------------------------------------

export default function CookiesView() {

    const { scrollYProgress } = useScroll();

    const { translate } = useTranslate();

    return (
        <>
            <ScrollProgress scrollYProgress={scrollYProgress} />

            <LegalPostHeader title={translate('cookie_policy')} subtitle={translate('cookie_policy_subtitle')} />
            <CookiesContent />

        </>
    );

}
