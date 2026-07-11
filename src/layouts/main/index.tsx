import Box from '@mui/material/Box';

import Footer from './footer';
import Header from './header';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

// The header is a fixed dark band. Top sections (hero / PageHeaderBand) add their
// own top padding to clear it, so dark bands sit flush under the header.
export default function MainLayout({ children }: Props) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
            <Header />

            <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
            </Box>

            <Footer />
        </Box>
    );
}
