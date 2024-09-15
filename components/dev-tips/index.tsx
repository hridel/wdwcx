import { ReactElement } from 'react';

import DevTip from '#/components/dev-tip';
import { fetchDevTips } from '#/lib/data';

export interface DevTipsProps {
    page: number;
}

const DevTips = async (props: DevTipsProps): Promise<ReactElement> => {
    const { page } = props;
    const tips = await fetchDevTips(page);

    return (
        <div className="flex flex-col gap-4">
            {tips.map((tip) => (
                <DevTip tip={tip} key={tip.id} />
            ))}
        </div>
    );
};

export default DevTips;
