import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import { cn } from '#/lib/utils';
import '#/styles/index.scss';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const metadata: Metadata = {
    title: 'wdw | Web Dev Wizard',
    description: 'Web Dev Wizard',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable
                )}
            >
                {children}
            </body>
        </html>
    );
}
