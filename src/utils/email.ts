// eslint-disable-next-line import/no-extraneous-dependencies
import { ContactFormValues } from '@appTypes/contact-form';

import { axiosBackendInstance } from '@utils/axios';

type ISendContactFormEmail = {
    data: ContactFormValues
    recaptchaToken?: string
}

export async function sendContactFormToAdmin({ data, recaptchaToken }: ISendContactFormEmail) {

    await axiosBackendInstance.post('/contact-form', { ...data, recaptchaToken });
}
