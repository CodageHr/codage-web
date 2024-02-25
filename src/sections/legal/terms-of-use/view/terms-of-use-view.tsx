'use client';

import { useScroll } from 'framer-motion';

import { useTranslate } from '@base/locales';

import ScrollProgress from '@components/scroll-progress';

import LegalPostHeader from '@sections/legal/legal-post-header';
import TermsOfUseContent from '@sections/legal/terms-of-use/terms-of-use-content';

// ----------------------------------------------------------------------

export default function TermsOfUseView() {

    const { scrollYProgress } = useScroll();

    const { translate } = useTranslate();

    return (
        <>
            <ScrollProgress scrollYProgress={scrollYProgress} />

            <LegalPostHeader title={translate('terms_of_use')} subtitle={translate('terms_of_use_subtitle')} />
            <TermsOfUseContent />

        </>
    );

}
