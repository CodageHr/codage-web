'use client';

import LegalLayout from '@layouts/legal';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return <LegalLayout>{children}</LegalLayout>;
}
