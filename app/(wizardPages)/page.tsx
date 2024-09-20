import { Ubuntu_Mono } from 'next/font/google';
import Link from 'next/link';
import { Suspense } from 'react';

import DevTipSkeleton from '#/components/dev-tip-skeleton';
import { HackerText } from '#/components/hacker-text';
import MaxWidthWrapper from '#/components/max-width-wrapper';
import RandomTip from '#/components/random-tip';

const ubuntuMono = Ubuntu_Mono({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata = {
    description:
        'Crafting Modern Web Solutions with a Touch of Magic. "Turning lines of code into magic since 1999."',
};

export default async function Home() {
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
                <Suspense fallback={<DevTipSkeleton />}>
                    <RandomTip />
                    <div className="mt-3">
                        <Link
                            className="underline underline-offset-4 decoration-2 decoration-accent-foreground hover:no-underline"
                            href="/dev-tips"
                        >
                            show me more tips
                        </Link>
                    </div>
                </Suspense>
            </div>
        </MaxWidthWrapper>
    );
}
