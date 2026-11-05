'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { useTranslate } from '@base/locales';

import { brand } from 'src/theme/tokens';

import { type Testimonial } from './data';

// ----------------------------------------------------------------------

// White quote card — About ("Tko nam vjeruje") and the service pages.
export default function QuoteCard({ item }: { item: Testimonial }) {
    const { t } = useTranslate();

    return (
        <Card sx={{ height: 1, p: { xs: 3, md: 4 } }}>
            <Stack spacing={3} sx={{ height: 1, justifyContent: 'space-between' }}>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    “{item.quote}”
                </Typography>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                    <Avatar
                        src={item.image}
                        alt={item.name}
                        sx={{ width: 44, height: 44, bgcolor: brand[100], color: brand[600], fontWeight: 700 }}
                    >
                        {item.name.charAt(0)}
                    </Avatar>
                    <Box>
                        <Typography sx={{ fontWeight: 700 }}>{item.name}</Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            {t(item.roleKey)}
                        </Typography>
                    </Box>
                </Stack>
            </Stack>
        </Card>
    );
}
