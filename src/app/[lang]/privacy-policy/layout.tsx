'use client';

import LegalLayout from 'src/layouts/legal';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return <LegalLayout>{children}</LegalLayout>;
}
