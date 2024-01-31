import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';

import { varFade, MotionViewport } from 'src/components/animate';
import { ContactCard } from '@components/have-an-idea-contact-card';

import { bgGradient } from 'src/theme/css';

// ----------------------------------------------------------------------

export default function HomeAdvertisement() {

    return (
        <ContactCard />
    );
}
