import { Lightbulb } from 'lucide-react';
import React, { ReactElement } from 'react';

import { Alert, AlertDescription, AlertTitle } from '#/components/ui/alert';
import { prisma } from '#/lib/db';

const RandomTip = async (): Promise<ReactElement> => {
    const relatedTips = await prisma.devTip.findMany({
        take: 1,
        orderBy: { id: 'asc' },
        skip: Math.floor(Math.random() * (await prisma.devTip.count())),
    });
    const tip = relatedTips[0] || null;

    return (
        <aside className="flex flex-col items-center sm:items-end gap-3">
            <Alert className="drop-shadow-lg">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle
                    className="mb-2"
                    dangerouslySetInnerHTML={{
                        __html: `<span class="text-cyan-600">#${tip?.tags.join(', #')}</span> ${tip?.title}`,
                    }}
                ></AlertTitle>
                <AlertDescription
                    dangerouslySetInnerHTML={{ __html: tip?.description || '' }}
                ></AlertDescription>
            </Alert>
        </aside>
    );
};

export default RandomTip;
