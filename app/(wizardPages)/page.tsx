import { Ubuntu_Mono } from 'next/font/google';
import { Suspense } from 'react';

import { HackerText } from '#/components/hacker-text';
import MaxWidthWrapper from '#/components/max-width-wrapper';
import RandomTip from '#/components/random-tip';
import RandomTipSkeleton from '#/components/random-tip/skeleton';

const ubuntuMono = Ubuntu_Mono({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

export const dynamic = 'force-dynamic';

export default function Home() {
    return (
        <MaxWidthWrapper>
            <div className="flex flex-col items-center justify-center min-h-[40vh]">
                <div
                    className={`${ubuntuMono.className} text-2xl md:text-4xl lg:text-6xl font-bold text-green-500`}
                >
                    <HackerText text="#WebDevWizard" />
                </div>
                <h1 className="relative magic my-16 text-2xl md:text-3xl lg:text-4xl text-foreground text-center leading-10">
                    Crafting Modern Web Solutions with a Touch of Magic
                </h1>
                <Suspense fallback={<RandomTipSkeleton />}>
                    <RandomTip />
                </Suspense>
            </div>
        </MaxWidthWrapper>
    );
}
