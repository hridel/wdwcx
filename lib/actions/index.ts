'use server';

import { revalidateTag } from 'next/cache';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

import { ContactFormState } from '#/components/contact-form/def';
import contactFormSchema from '#/lib/schemas/contact-form-schema';

type FieldErrors = {
    [key: string]: string[] | undefined;
};

type EmailNotificationProps = {
    visitorEmail: string;
    visitorMessage: string;
};

const smtpConfig: SMTPTransport.Options = {
    host: process.env.SMTP_HOST as string,
    auth: {
        user: process.env.SMTP_USER as string,
        pass: process.env.SMTP_PASS as string,
    },
    secure: Boolean(Number(process.env.SMTP_SECURE)),
};

if (Number(process.env.SMTP_PORT)) {
    smtpConfig.port = Number(process.env.SMTP_PORT);
}

if (process.env.SMTP_TLS_CIPHERS) {
    smtpConfig.tls = {
        ciphers: process.env.SMTP_TLS_CIPHERS as string,
        rejectUnauthorized: false,
    };
}

const emailTransporter = nodemailer.createTransport(smtpConfig);

const sendContactFormEmailNotification = async (
    props: EmailNotificationProps
) => {
    const textBody = `A contact form has been filled out on the wdw website.\n\nEmail: ${props.visitorEmail}\nMessage: ${props.visitorMessage}`;
    const htmlBody = `<p>A contact form has been filled out on the wdw website.</p><br /><p>Email: ${props.visitorEmail}</p><p>Message: ${props.visitorMessage.replaceAll('\n', '<br />')}</p>`;

    const allRecipients = process.env
        .CONTACT_FORM_NOTIFICATION_RECIPIENTS as string;
    const recipients = allRecipients.split(',');

    recipients.forEach((recipient) => {
        const mailOptions = {
            from: process.env.SMTP_USER as string,
            to: recipient,
            subject: 'New message from WDW website',
            text: textBody,
            html: htmlBody,
        };

        emailTransporter.sendMail(mailOptions);

        /*
        emailTransporter.sendMail(mailOptions, (error, info) => {
            console.log("\nDEBUG--MAIL SENT------");
            console.log(JSON.stringify({ error, info }));
            console.log("DEBUG--MAIL SENT------\n");
            if (error) {
                console.error('Chyba při odesílání e-mailu:', error);
            } else {
                console.log('E-mail byl úspěšně odeslán:', info.response);
            }
        });
         */
    });
};

export const revalidateRandomTip = async (): Promise<void> => {
    revalidateTag('random-dev-tip');
};

export const handleSubmitContactForm = async (
    _previousState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> => {
    const token = formData.get('cf-turnstile-response') as string;

    // Validate the token by calling the
    // "/siteverify" API endpoint.
    const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const result = await fetch(url, {
        body: JSON.stringify({
            secret: process.env.TURNSTILE_SECRET_KEY,
            response: token,
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const outcome = await result.json();
    if (!outcome.success) {
        return {
            success: false,
            error: true,
            returnCode: Math.random().toString(36).substring(2, 10),
        };
    }

    const validatedFields = contactFormSchema.safeParse({
        email: formData.get('email') as string,
        message: formData.get('message') as string,
    });

    let errorMessage = '';
    const fieldErrors: FieldErrors | undefined =
        validatedFields.error?.flatten().fieldErrors;

    if (fieldErrors !== undefined) {
        errorMessage = Object.entries(fieldErrors)
            .filter(([_key, value]) => value !== undefined)
            .map(([key, value]) => `${key}: ${value?.join('; ')}`)
            .join(' | ');
    }

    if (!validatedFields.success) {
        return {
            success: false,
            error: true,
            errorMessage,
        };
    }

    await sendContactFormEmailNotification({
        visitorEmail: validatedFields.data.email,
        visitorMessage: validatedFields.data.message,
    });

    return {
        success: true,
        error: false,
        returnCode: Math.random().toString(36).substring(2, 10),
    };
};
