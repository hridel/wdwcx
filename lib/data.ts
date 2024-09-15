import { DevTip } from '@prisma/client';

import { prisma } from '#/lib/db';
import { DEV_TIPS_PER_PAGE } from '#/lib/definitions';

export const fetchTotalDevTipsPages = async (): Promise<number> => {
    const count = await prisma.devTip.count();
    return Math.ceil(count / DEV_TIPS_PER_PAGE);
};

export const fetchDevTips = async (page: number): Promise<DevTip[]> => {
    return prisma.devTip.findMany({
        take: DEV_TIPS_PER_PAGE,
        orderBy: { id: 'asc' },
        skip: (page - 1) * DEV_TIPS_PER_PAGE,
    });
};
