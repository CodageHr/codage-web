// eslint-disable-next-line import/no-extraneous-dependencies
import mailjet from 'node-mailjet';
import { ContactFormValues } from '@appTypes/contact-form';

import {
    EMAIL_SENDER_NAME,
    MAILJET_CREDENTIALS,
    EMAIL_SENDER_ADDRESS,
    ADMIN_EMAIL_ADDRESS,
    APP_HOST,
} from '@base/config-global';

const mailjetClient = mailjet.apiConnect(
    MAILJET_CREDENTIALS.MAILJET_PUBLIC_KEY,
    MAILJET_CREDENTIALS.MAILJET_PRIVATE_KEY
);

type ISendEmailProps = {
    to: IReceiverProps[],
    subject: string,
    textPart: string,
    htmlPart: string
}

type ISendContactFormEmail = {
    data: ContactFormValues
}

type IReceiverProps = {
    Email:string,
    Name?: string
}

export async function sendEmail({ to, subject, textPart , htmlPart }: ISendEmailProps) {
    const emailData = {
        Messages: [
            {
                From: {
                    Email: EMAIL_SENDER_ADDRESS,
                    Name: EMAIL_SENDER_NAME,
                },
                To: to,
                Subject: subject,
                TextPart: textPart,
                HtmlPart: htmlPart
            },
        ],
    };

    try {
        const result = await mailjetClient.post('send', { version: 'v3.1' }).request(emailData);
        console.log('Email sent successfully!');
        return result;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}


export async function sendContactFormToAdmin({ data }: ISendContactFormEmail) {

    const { email, projectInfo } = data;

    const EmailReceivers: IReceiverProps[] = [{
        Email: ADMIN_EMAIL_ADDRESS
    }];
    const EmailSubject: string =  'Kontakt Forma - Codage web';
    const EmailText:string = `Novi kontakt sa weba. Email: ${email}, Info o projektu: ${projectInfo}`;
    const EmailHtmlData =    `<div >
                                    <img width="150" alt="Codage logo" title="Codage logo" src="${APP_HOST}/assets/logo/logo_horizontal_full.svg">
                                
                                    <p>Novi kontakt sa weba.</p>
                                    <h4>Email: <b>${email}</b></h4><br/>
                                    <div style="display: flex; align-items: center"><h4 style="flex: 0 1 auto">Info o projektu:</h4> <p>${email}</p></div>
                                   </div>`;
    await sendEmail({ to: EmailReceivers, subject: EmailSubject, textPart: EmailText, htmlPart: EmailHtmlData });
}
