import { Metadata } from 'next';
import Image from 'next/image';

import MaxWidthWrapper from '#/components/max-width-wrapper';

// Add this import

export const metadata: Metadata = {
    title: 'About Jan Hřídel',
    description:
        'Discover the journey of Ing. Jan Hřídel, a passionate Web Dev Wizard. From junior developer to senior frontend expert, learn about his skills in React, Next.js, and more.',
};

export default function AboutPage() {
    return (
        <MaxWidthWrapper>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
                Ing. Jan Hřídel
                <br />
                <small className="text-lg md:text-xl lg:text-2xl">
                    Web Dev Wizard
                </small>
            </h1>
            <article className="prose prose-sm md:prose lg:prose-lg">
                <Image
                    src="/imgs/wdwcx.jpg"
                    alt="Ing. Jan Hřídel (Web Dev Wizard)"
                    width={300}
                    height={300}
                    className="mx-auto my-4 rounded-md"
                />
                <p className="mt-4">
                    Once upon a time, there was a software developer named Jan.
                    Jan was very curious and, since his high school studies, he
                    was fascinated by computers and the internet. After high
                    school, he went on to study information technology to become
                    a software engineer because he loved creating beautiful and
                    functional websites.
                </p>
                <p className="mt-2">
                    Jan started his career as a junior developer in a small
                    company. He was very diligent and constantly learned new
                    technologies and practices. Soon, he became an expert in
                    HTML, CSS, JavaScript, as well as PHP and the Laravel
                    framework. His work was always precise, and his code was
                    clean and well-structured.
                </p>
                <p className="mt-2">
                    One day, his talent was noticed by the head of development
                    at a large tech company. He offered Jan a position as a
                    senior frontend developer. Jan did not hesitate and accepted
                    the offer. In his new role, he had the opportunity to work
                    on large projects and collaborate with a team of experienced
                    developers. He particularly focused on technologies like
                    React, Next.js, TypeScript, and also Angular.
                </p>
                <p className="mt-2">
                    Jan quickly advanced and became an indispensable member of
                    the team. His skills and knowledge were admirable. He was
                    not only a great programmer but also an excellent mentor for
                    younger colleagues. He was always willing to help and share
                    his knowledge.
                </p>
                <p className="mt-2">
                    After several years of hard work and continuous improvement,
                    Jan became the Head of Frontend. In this role, he was in
                    charge of the entire frontend team and oversaw all the
                    projects the team implemented. Jan was very proud of his
                    team and what they achieved together.
                </p>
                <p className="mt-2">
                    Under his leadership, the company became a leader in web
                    application development. Jan and his team created modern,
                    fast, and user-friendly applications that were appreciated
                    by both users and experts.
                </p>
                <p className="mt-2">
                    Besides his work at the company, Jan also engaged in
                    teaching at the university, where he taught young aspiring
                    developers. He himself had studied computer science, and his
                    academic knowledge was as impressive as his practical
                    skills.
                </p>
                <p className="mt-2">
                    And so, Jan, who started as a junior developer, became a
                    recognized expert and head of the frontend team. His story
                    is proof that with hard work, determination, and passion for
                    what you do, you can achieve great things.
                </p>
                <p className="mt-2">
                    And if he hasn&apos;t died, he&apos;s still programming
                    there today, now known as the{' '}
                    <strong>Web Dev Wizard</strong>, casting spells of code and
                    conjuring the most magical web applications.
                </p>
            </article>
        </MaxWidthWrapper>
    );
}
