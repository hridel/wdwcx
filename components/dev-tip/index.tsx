import { Lightbulb } from 'lucide-react';
import React, { ReactElement } from 'react';

import { DevTip as DevTipDef } from '@prisma/client';

import { Alert, AlertDescription, AlertTitle } from '#/components/ui/alert';

export interface DevTipProps {
    tip: DevTipDef;
}

const DevTip = (props: DevTipProps): ReactElement => {
    const { tip } = props;

    return (
        <Alert className="drop-shadow-lg">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle
                className="mb-2"
                dangerouslySetInnerHTML={{
                    __html: `<span class="text-[#fcac29]">#${tip.tags.join(', #')}</span> ${tip.title}`,
                }}
            ></AlertTitle>
            <AlertDescription
                dangerouslySetInnerHTML={{ __html: tip.description || '' }}
            ></AlertDescription>
        </Alert>
    );
};
export default DevTip;
