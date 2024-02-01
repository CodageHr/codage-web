import * as Yup from 'yup';
import { m } from 'framer-motion';
import { useCallback } from 'react';
import { capitalize } from 'lodash';
import { useForm } from 'react-hook-form';
import { enqueueSnackbar } from 'notistack';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactFormValues } from '@appTypes/contact-form';

import Stack from '@mui/material/Stack';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, styled } from '@mui/material/styles';
import { inputBaseClasses } from '@mui/material/InputBase';
import { inputLabelClasses } from '@mui/material/InputLabel';
import { formHelperTextClasses } from '@mui/material/FormHelperText';

import { sendContactFormToAdmin } from '@utils/email';

import { useTranslate } from '@base/locales';

import { RHFTextField } from '@components/hook-form';
import { varFade, MotionViewport } from '@components/animate';
// rhf
import FormProvider from '@components/hook-form/form-provider';
// ----------------------------------------------------------------------



const StyledRHFTextField = styled(RHFTextField)(({ theme }) => ({
    [`& .${inputLabelClasses.root}`]: {
        color: `${alpha(theme.palette.primary.contrastText,0.6)} !important`,
    },
    [`& .${inputLabelClasses.focused}`]: {
        color: `${theme.palette.primary.contrastText} !important`,
    },
    [`& .${inputBaseClasses.root}`]: {
        color: `${theme.palette.primary.contrastText} !important`,
        '&::before,&::after': {
            borderBottomColor: `${alpha(theme.palette.primary.contrastText,0.6)} !important`,
        }
    },
    [`& .${inputBaseClasses.focused}`]: {
        '&::before,&::after': {
            borderBottomColor: `${theme.palette.primary.contrastText} !important`,
        }
    },
    [`& .${formHelperTextClasses.root}`]: {
        color: `${theme.palette.error.dark} !important`,
    }


}));


export default function ContactForm() {

    const { translate } = useTranslate();

    const defaultValues: ContactFormValues = {
        email:'',
        projectInfo: ''
    };

    const ContactFormDataSchema = Yup.object().shape({
        email: Yup.string().required(`${translate('emailRequired')}`).email(`${translate('invalidEmailFormat')}`),
        projectInfo: Yup.string().required(`${translate('projectInfoRequired')}`),
    });

    const methods = useForm<ContactFormValues>({
        resolver: yupResolver(ContactFormDataSchema),
        defaultValues,
    });

    const { handleSubmit, reset, formState: { isSubmitting }} = methods;

    const onSubmit = useCallback( async (data: ContactFormValues) => {


        try {
            await sendContactFormToAdmin({ data });
            console.log('Email sent successfully!');
            reset();
            enqueueSnackbar(`${translate('messageSuccessfullySent')}`);
            // Perform any additional actions after successful email sending
        } catch (error) {
            console.error('Error sending email:', error);
            // Handle error case
        }


    }, [reset, translate]);

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack component={MotionViewport} spacing={5}>
                <Stack spacing={3}>
                    <m.div variants={varFade().inUp}>
                        <StyledRHFTextField name={'email'} variant={'standard'}  fullWidth label={translate('emailLabel')} />
                    </m.div>

                    <m.div variants={varFade().inUp}>
                        <StyledRHFTextField name={'projectInfo' } variant={'standard'} fullWidth placeholder={translate('projectInfoPlaceholder')} label={translate('projectInfoLabel')} multiline rows={4} />
                    </m.div>
                </Stack>

                <m.div variants={varFade().inUp}>
                    <LoadingButton
                        type="submit"
                        color={'primary'}
                        variant="contained"
                        loading={isSubmitting}
                        fullWidth
                    >
                        {capitalize(`${translate('contactUsLabel')}`)}
                    </LoadingButton>
                </m.div>
            </Stack>
        </FormProvider>
    );

}
