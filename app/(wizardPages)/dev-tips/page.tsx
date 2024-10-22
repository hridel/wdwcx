import { Metadata } from 'next';
import { Suspense } from 'react';

import DevTips from '#/components/dev-tips';
import Divider from '#/components/divider';
import MaxWidthWrapper from '#/components/max-width-wrapper';
import PaginationLinks from '#/components/pagination-links';
import { fetchTotalDevTipsPages } from '#/lib/data';

export const metadata: Metadata = {
    title: "Web Dev Wizard's tips",
    description: '',
};

export default async function DevTipsPage(
    props: {
        searchParams?: Promise<{
            page?: string;
        }>;
    }
) {
    const searchParams = await props.searchParams;
    const totalPages = await fetchTotalDevTipsPages();
    return (
        <MaxWidthWrapper>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
                Dev Tips
            </h1>
            <div className="mt-8">
                <Suspense fallback={<div>Loading...</div>}>
                    <DevTips
                        page={
                            searchParams?.page ? Number(searchParams.page) : 1
                        }
                    />
                    <Divider className="my-8" />
                    <PaginationLinks totalPages={totalPages} />
                </Suspense>
            </div>
        </MaxWidthWrapper>
    );
}
