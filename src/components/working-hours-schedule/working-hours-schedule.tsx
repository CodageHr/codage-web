
import Stack from '@mui/material/Stack';
import { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useTranslate } from '@base/locales';
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
            startHour: 12,
            endHour: 20
        },
        {
            day: translate('tuesday'),
            startHour: 8,
            endHour: 16
        },
        {
            day: translate('wednesday'),
            startHour: 12,
            endHour: 20
        },
        {
            day: translate('thursday'),
            startHour: 12,
            endHour: 20
        },
        {
            day: translate('friday'),
            startHour: 8,
            endHour: 16
        }
    ];

    return <Stack>
        <Typography variant={'subtitle1'}>{translate('working_hours')}</Typography>
        <Stack
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            sx={{
                mb: { xs: 5, md: 0 },
            }}
        >
            {_workingDays.map((workingDay) => (
                <Stack spacing={2} key={workingDay.day} direction={'row'}
                    justifyContent={{ xs: 'center', md: 'flex-start' }}
                >
                    <Typography variant={'body2'}>{workingDay.day}:</Typography>
                    <Typography variant={'body1'}>{`${workingDay.startHour} - ${workingDay.endHour}`}</Typography>
                </Stack>
            ))}
        </Stack>
    </Stack>;

};

export default WorkingHoursSchedule;
