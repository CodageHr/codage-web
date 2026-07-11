import Box from '@mui/material/Box';

import Header from '@layouts/main/header';
import Footer from '@layouts/legal/footer';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function LegalLayout({ children }: Props) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
            </Box>
            <Footer />
        </Box>
    );
}
