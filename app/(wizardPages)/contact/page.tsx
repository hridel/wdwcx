import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import ContactForm from '#/components/contact-form';
import Divider from '#/components/divider';
import MaxWidthWrapper from '#/components/max-width-wrapper';
import GitHubIcon from '#/public/icons/github.svg';
import LinkedInIcon from '#/public/icons/linkedin.svg';
import XIcon from '#/public/icons/x.svg';

export const metadata: Metadata = {
    title: 'Send me an e-mail',
    description: 'TODO: Add description',
};

export default function ContactPage() {
    return (
        <>
            <MaxWidthWrapper>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
                    Contact me
                </h1>
                <div className="mt-8">
                    <ContactForm />
                </div>
                <Divider className="my-8" />
                <div className="flex items-center justify-center gap-4">
                    <Link
                        href="https://x.com/wdwcx"
                        target="_blank"
                        title="X profile"
                    >
                        <Image src={XIcon} alt="X" width={32} height={32} />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/hridel/"
                        target="_blank"
                        title="LinkedIn profile"
                    >
                        <Image
                            src={LinkedInIcon}
                            alt="LinkedIn"
                            width={32}
                            height={32}
                        />
                    </Link>
                    <Link
                        href="https://github.com/hridel"
                        target="_blank"
                        title="GitHub profile"
                    >
                        <Image
                            src={GitHubIcon}
                            alt="GitHub"
                            width={32}
                            height={32}
                        />
                    </Link>
                </div>
            </MaxWidthWrapper>
        </>
    );
}
