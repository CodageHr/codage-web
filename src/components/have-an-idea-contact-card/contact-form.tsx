import * as Yup from 'yup';
import { m } from 'framer-motion';
import { useCallback } from 'react';
import { capitalize } from 'lodash';
import { useForm } from 'react-hook-form';
import { enqueueSnackbar } from 'notistack';
import { yupResolver } from '@hookform/resolvers/yup';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { useTranslate } from '@base/locales';

import { RHFTextField } from '@components/hook-form';
import { varFade, MotionViewport } from '@components/animate';
// rhf
import FormProvider from '@components/hook-form/form-provider';
// ----------------------------------------------------------------------

type ContactFormValues = {
  email: string,
  projectInfo: string,
}

export default function ContactForm() {

  const { translate } = useTranslate();

  const defaultValues: ContactFormValues = {
    email:'',
    projectInfo: ''
  };

  const ContactFormDataSchema = Yup.object().shape({
    email: Yup.string().required(`${translate('emailRequired')}`),
    projectInfo: Yup.string().required(`${translate('projectInfoRequired')}`),
  });

  const methods = useForm<ContactFormValues>({
    resolver: yupResolver(ContactFormDataSchema),
    defaultValues,
  });

  const { handleSubmit, reset, formState: { isSubmitting }} = methods;

  const onSubmit = useCallback( async (data: ContactFormValues) => {

      reset();
      enqueueSnackbar(`${translate('messageSuccessfullySent')}`);

  }, [reset, translate]);

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack component={MotionViewport} spacing={5}>
        <Stack spacing={3}>
          <m.div variants={varFade().inUp}>
            <RHFTextField name={'email'}  fullWidth label={translate('emailLabel')} />
          </m.div>

          <m.div variants={varFade().inUp}>
            <RHFTextField name={'projectInfo'} fullWidth placeholder={translate('projectInfoPlaceholder')} label={translate('projectInfoLabel')} multiline rows={4} />
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
