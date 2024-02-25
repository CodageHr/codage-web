'use client';

import { useScroll } from 'framer-motion';

import { useTranslate } from '@base/locales';

import ScrollProgress from '@components/scroll-progress';

import InfoContent from '@sections/legal/info/info-content';
import LegalPostHeader from '@sections/legal/legal-post-header';

// ----------------------------------------------------------------------

export default function InfoView() {

    const { scrollYProgress } = useScroll();

    const { translate } = useTranslate();

    return (
        <>
            <ScrollProgress scrollYProgress={scrollYProgress} />

            <LegalPostHeader title={translate('legal_info')} subtitle={translate('legal_info_subtitle')} />
            <InfoContent />

        </>
    );

}
