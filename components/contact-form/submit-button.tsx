'use client';

import { Repeat } from 'lucide-react';
import { RefAttributes } from 'react';
import { useFormStatus } from 'react-dom';

import { Button, ButtonProps } from '#/components/ui/button';

const SubmitButton = (
    props: ButtonProps & RefAttributes<HTMLButtonElement>
) => {
    const { children, ...buttonProps } = props;
    const { pending } = useFormStatus();

    return (
        <Button
            type={buttonProps.type ?? 'submit'}
            disabled={pending}
            {...buttonProps}
        >
            {pending ? (
                <>
                    <Repeat className="animate-spin w-4 h-4" /> Sending...
                </>
            ) : (
                children
            )}
        </Button>
    );
};

export default SubmitButton;
