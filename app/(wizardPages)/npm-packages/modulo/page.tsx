import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Divider from '#/components/divider';
import MaxWidthWrapper from '#/components/max-width-wrapper';
import ResumeDownload from '#/components/resume-download';
import LinkedInIcon from '#/public/icons/linkedin.svg';
import { fetchMarkdown } from '#/lib/services/markdown';
import RenderMd from '#/components/render-md';

export const metadata: Metadata = {
    title: 'modulo – npm package for JavaScript/TypeScript modular arithmetic',
    description:
        'A robust modular arithmetic utility for JavaScript, handling both positive and negative integers with ease. Ensure consistent, non-negative results for your modulo operations. Perfect for mathematical computations, circular buffer implementations, and more.',
};

export default async function AboutPage() {
    const mdContent = await fetchMarkdown("https://raw.githubusercontent.com/hridel/modulo/refs/heads/main/README.md");
    return (
        <MaxWidthWrapper>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
                @hridel/modulo
            </h1>
            <article className="prose prose-sm md:prose lg:prose-lg">
                <RenderMd mdContent={mdContent} />
            </article>
        </MaxWidthWrapper>
    );
}
