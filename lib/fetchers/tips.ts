import { baseUrl } from '#/config';
import { WebDevTip } from '#/lib/definitions';

export const fetchRandomTip = async (): Promise<WebDevTip> => {
    const response = await fetch(`${baseUrl}/api/dev-tips/random`, {
        next: {
            tags: ['random-dev-tip'],
        },
    });
    return await response.json();
};
