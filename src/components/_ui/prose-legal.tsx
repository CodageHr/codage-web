import { SxProps, Theme } from '@mui/material/styles';

import { brand } from 'src/theme/tokens';

// ----------------------------------------------------------------------

// Shared prose styling for the legal content components. Spread onto the
// content wrapper Box (max-w 820): h3 = section, h4 = subsection,
// body1 = paragraph, coral "―" list items.
export const proseSx: SxProps<Theme> = {
    maxWidth: 820,
    mx: 'auto',
    py: { xs: 4, md: 8 },
    '& .MuiTypography-h3': {
        fontSize: { xs: 24, md: 30 },
        mt: { xs: 4, md: 6 },
        mb: 2,
    },
    '& .MuiTypography-h4': {
        fontSize: { xs: 19, md: 21 },
        mt: 3,
        mb: 1.5,
    },
    '& .MuiTypography-body1': {
        fontSize: 16.5,
        lineHeight: 1.8,
        mb: 2,
        color: 'text.secondary',
    },
    '& .MuiListItemText-primary': {
        fontSize: 16.5,
        lineHeight: 1.7,
        color: 'text.secondary',
    },
    '& a': { color: brand[700], fontWeight: 700 }, // AA on the warm sand bg
};
