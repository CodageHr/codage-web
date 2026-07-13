'use client';

import { usePathname } from 'src/routes/hooks';

import { useTranslate } from '@base/locales';

import BreadcrumbJsonLd from '@components/breadcrumb-jsonld';
import PageHeaderBand from '@components/_ui/page-header-band';

// ----------------------------------------------------------------------

type LegalPostHeaderProps = {
    title: string;
    subtitle?: string;
};

export default function LegalPostHeader({ title, subtitle }: LegalPostHeaderProps) {
    const { t } = useTranslate();

    const pathname = usePathname();

    return (
        <>
            <BreadcrumbJsonLd
                items={[
                    { name: t('home'), path: '/' },
                    { name: title, path: pathname },
                ]}
            />
            <PageHeaderBand
                eyebrow={t('legal_eyebrow')}
                title={title}
                lead={subtitle}
                meta={t('legal_updated')}
            />
        </>
    );
}
