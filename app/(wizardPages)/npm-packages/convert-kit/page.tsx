import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Divider from '#/components/divider';
import MaxWidthWrapper from '#/components/max-width-wrapper';
import RenderMd from '#/components/render-md';
import { fetchMarkdown } from '#/lib/services/markdown';
import GitHubIcon from '#/public/icons/github.svg';
import NpmIcon from '#/public/icons/npm.svg';

export const revalidate = 1800; // 30 minutes in seconds

export const metadata: Metadata = {
    title: 'convert-kit – npm package for converting colors',
    description:
        'A library for converting colors between different formats (RGB, HSL, HEX).',
};

export default async function AboutPage() {
    const mdContent = await fetchMarkdown(
        'https://raw.githubusercontent.com/hridel/convert-kit/refs/heads/main/README.md'
    );
    return (
        <MaxWidthWrapper>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
                @hridel/convert-kit
            </h1>
            <article className="prose prose-sm md:prose lg:prose-lg">
                <RenderMd mdContent={mdContent} />
            </article>
            <Divider className="mt-8" />
            <aside>
                <ul className="mt-8">
                    <li className="ml-4 my-4">
                        <Link
                            href="https://github.com/hridel/convert-kit"
                            target="_blank"
                            className="flex flex-row gap-4"
                        >
                            <Image
                                src={GitHubIcon}
                                alt="GitHub"
                                width={16}
                                height={16}
                            />
                            <span>GitHub</span>
                        </Link>
                    </li>
                    <li className="ml-4 my-4">
                        <Link
                            href="https://www.npmjs.com/package/@hridel/convert-kit"
                            target="_blank"
                            className="flex flex-row gap-4"
                        >
                            <Image
                                src={NpmIcon}
                                alt="npm"
                                width={16}
                                height={16}
                            />
                            <span>npm</span>
                        </Link>
                    </li>
                </ul>
            </aside>
        </MaxWidthWrapper>
    );
}
