import { Lightbulb } from 'lucide-react';
import React from 'react';

import { Alert, AlertDescription, AlertTitle } from '#/components/ui/alert';
import { Skeleton } from '#/components/ui/skeleton';

const DevTipSkeleton = () => {
    return (
        <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle className="mb-2">
                <Skeleton className="h-4 w-1/2" />
            </AlertTitle>
            <AlertDescription>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
            </AlertDescription>
        </Alert>
    );
};

export default DevTipSkeleton;
