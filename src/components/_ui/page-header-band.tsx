'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { sand, cream, onDark } from 'src/theme/tokens';

import { Eyebrow, SectionContainer } from './section';

// ----------------------------------------------------------------------

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  meta?: React.ReactNode;
};

// Dark hero band for inner pages: eyebrow + h1 + lead, with radial coral glow
// and vertical line texture. Sits flush under the fixed header (pt clears it).
export default function PageHeaderBand({ eyebrow, title, lead, meta }: Props) {
    return (
        <Box
            component="section"
            sx={{
                position: 'relative',
                overflow: 'hidden',
                bgcolor: sand[900],
                color: cream,
                pt: { xs: 12, md: 20 },
                pb: { xs: 6, md: 10 },
            }}
        >
            <Box
                aria-hidden
                sx={{
                    position: 'absolute',
                    top: -160,
                    right: -200,
                    width: 520,
                    height: 520,
                    pointerEvents: 'none',
                    background: `radial-gradient(circle, ${alpha('#E07E58', 0.22)} 0%, transparent 70%)`,
                }}
            />
            <Box
                aria-hidden
                sx={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    backgroundImage: `repeating-linear-gradient(90deg, ${onDark.lineTexture} 0 1px, transparent 1px 120px)`,
                }}
            />

            <SectionContainer sx={{ position: 'relative' }}>
                <Stack spacing={2.5} sx={{ maxWidth: 760 }}>
                    {eyebrow && <Eyebrow onDark>{eyebrow}</Eyebrow>}

                    <Typography variant="h1" component="h1" sx={{ color: cream }}>
                        {title}
                    </Typography>

                    {lead && (
                        <Typography sx={{ fontSize: { xs: 16.5, md: 19 }, lineHeight: 1.6, color: onDark.textLead }}>
                            {lead}
                        </Typography>
                    )}

                    {meta && (
                        <Typography variant="body2" sx={{ color: onDark.textMeta }}>
                            {meta}
                        </Typography>
                    )}
                </Stack>
            </SectionContainer>
        </Box>
    );
}
