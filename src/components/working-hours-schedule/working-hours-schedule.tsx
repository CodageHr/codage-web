
import Stack from '@mui/material/Stack';
import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useTranslate } from '@base/locales';

import { fTimeOnly } from 'src/utils/format-time';
import Iconify from '@components/iconify';
// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
  useSmall?: boolean;
}

// eslint-disable-next-line react/display-name
const WorkingHoursSchedule = () => {

    const { translate } = useTranslate();

    const _workingDays = [
        {
            day: translate('monday'),
            startHour: 8,
            endHour: 16
        },
        {
            day: translate('tuesday'),
            startHour: 8,
            endHour: 16
        },
        {
            day: translate('wednesday'),
            startHour: 8,
            endHour: 16
        },
        {
            day: translate('thursday'),
            startHour: 8,
            endHour: 16
        },
        {
            day: translate('friday'),
            startHour: 8,
            endHour: 16
        }
    ];

    return <Stack>
        <Box display={'flex'} gap={1} justifyContent={{ xs: 'center', md: 'flex-start' }}>
            <Iconify icon={'ic:round-schedule'} color={'primary'} width={24} height={24} />
            <Typography variant={'subtitle1'}>{translate('working_hours')}</Typography>
        </Box>
        <Stack
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            sx={{
                pl:{ xs: 0, md: 4 },
                mb: { xs: 5, md: 0 },
            }}
        >
            {_workingDays.map((workingDay) => (
                <Stack spacing={2} key={workingDay.day} direction={'row'}
                    justifyContent={{ xs: 'center', md: 'flex-start' }}
                >
                    <Typography variant={'body2'}>{workingDay.day}:</Typography>
                    <Typography variant={'body1'}>{`${fTimeOnly(workingDay.startHour)} - ${fTimeOnly(workingDay.endHour)}`}</Typography>
                </Stack>
            ))}
        </Stack>
    </Stack>;

};

export default WorkingHoursSchedule;
