import { Ubuntu } from 'next/font/google';
import React from 'react';

import Footer from '#/components/footer';
import Header from '#/components/header';
import { cn } from '#/lib/utils';
import '#/styles/index.scss';

const ubuntu = Ubuntu({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function WizardPagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <body
            className={cn(
                ubuntu.className,
                'min-h-screen flex flex-col items-center justify-start bg-background antialiased bg-[radial-gradient(circle_at_top_left,_rgba(0,255,0,0.2)_0%,_transparent_20%),_radial-gradient(circle_at_bottom_right,_rgba(0,191,255,0.2)_0%,_transparent_20%)]'
            )}
        >
            <Header />
            <main className="w-full flex-1">{children}</main>
            <Footer />
        </body>
    );
}
