'use client';

import { useScroll } from 'framer-motion';

import { useTranslate } from '@base/locales';

import ScrollProgress from '@components/scroll-progress';

import LegalPostHeader from '@sections/legal/legal-post-header';
import PrivacyPolicyContent from '@sections/legal/privacy-policy/privacy-policy-content';

// ----------------------------------------------------------------------

export default function PrivacyPolicyView() {

    const { scrollYProgress } = useScroll();

    const { translate } = useTranslate();

    return (
        <>
            <ScrollProgress scrollYProgress={scrollYProgress} />

            <LegalPostHeader title={translate('privacy_policy')} subtitle={translate('privacy_policy_subtitle')} />
            <PrivacyPolicyContent />

        </>
    );

}
