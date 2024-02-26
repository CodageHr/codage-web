import Footer from '@layouts/legal/footer';

import Header from '../common/header-simple';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function LegalLayout({ children }: Props) {
    return (
        <>
            <Header />

            {children}
            <Footer />
        </>
    );
}
