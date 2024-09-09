import { Metadata } from 'next';

import { HackerText } from '#/components/hacker-text';
import MaxWidthWrapper from '#/components/max-width-wrapper';

export const metadata: Metadata = {
    title: 'Send me an e-mail',
    description: 'TODO: Add description',
};

export default function ContactPage() {
    return (
        <MaxWidthWrapper>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
                Contact me
            </h1>
            <div className="h-20 flex items-center justify-center text-2xl">
                <HackerText text="hridel@hey.com" />
            </div>
        </MaxWidthWrapper>
    );
}
