'use client';

import { Repeat } from 'lucide-react';
import React, { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

import { Button } from '#/components/ui/button';

export interface SubmitButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled?: boolean;
    fullWidth?: boolean;
    darkMode?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    className?: string;
    isLoading?: boolean;
    variant?:
        | 'default'
        | 'destructive'
        | 'outline'
        | 'secondary'
        | 'ghost'
        | 'link';
}

const SubmitButton = (props: SubmitButtonProps) => {
    const { children, ...buttonProps } = props;
    const { pending } = useFormStatus();

    return (
        <Button
            type={buttonProps.type ?? 'submit'}
            disabled={pending}
            {...buttonProps}
        >
            {pending ? <Repeat className="animate-spin w-4 h-4" /> : children}
        </Button>
    );
};

export default SubmitButton;
