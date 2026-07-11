'use client';

import { useTranslate } from '@base/locales';

import PageHeaderBand from '@components/_ui/page-header-band';

// ----------------------------------------------------------------------

type LegalPostHeaderProps = {
    title: string;
    subtitle?: string;
};

export default function LegalPostHeader({ title, subtitle }: LegalPostHeaderProps) {
    const { t } = useTranslate();

    return (
        <PageHeaderBand
            eyebrow={t('legal_eyebrow')}
            title={title}
            lead={subtitle}
            meta={t('legal_updated')}
        />
    );
}
