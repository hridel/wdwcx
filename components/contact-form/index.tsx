'use client';

import { CircleCheck } from 'lucide-react';
import { ReactElement, useEffect, useRef, useActionState } from 'react';

import { ContactFormState } from '#/components/contact-form/def';
import SubmitButton from '#/components/contact-form/submit-button';
import { Alert, AlertDescription, AlertTitle } from '#/components/ui/alert';
import { Input } from '#/components/ui/input';
import { Label } from '#/components/ui/label';
import { Textarea } from '#/components/ui/textarea';
import { handleSubmitContactForm } from '#/lib/actions';

const initialFormState: ContactFormState = {
    success: false,
    error: false,
    returnCode: undefined,
};

const ContactForm = (): ReactElement => {
    const [formState, formAction] = useActionState(
        handleSubmitContactForm,
        initialFormState
    );

    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (formState.success && formRef.current) {
            formRef.current.reset();
        }
    }, [formState.success, formState.returnCode]);

    return (
        <form ref={formRef} action={formAction} className="space-y-8">
            <div>
                <Label htmlFor="email">Your email address</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
            </div>
            <div>
                <Label htmlFor="message">Your message</Label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Message..."
                />
            </div>
            <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start gap-4">
                <div className="w-full md:w-3/4">
                    {formState.success && (
                        <div className="flex flex-col gap-4 items-center justify-center">
                            <CircleCheck className="text-green-600 w-10 h-10" />
                            <p>
                                Thank you for your message. I&apos;ll contact
                                you soon.
                            </p>
                        </div>
                    )}
                    {formState.error && (
                        <Alert variant="destructive">
                            <AlertTitle>Contact form error</AlertTitle>
                            <AlertDescription>
                                <pre className="text-wrap">
                                    {formState.errorMessage?.replaceAll(
                                        ' | ',
                                        '\n'
                                    )}
                                </pre>
                            </AlertDescription>
                        </Alert>
                    )}
                </div>
                <SubmitButton size="lg">Submit</SubmitButton>
            </div>
        </form>
    );
};

export default ContactForm;
