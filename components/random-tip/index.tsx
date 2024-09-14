import { Lightbulb } from 'lucide-react';
import React, { ReactElement } from 'react';

// import SubmitButton from '#/components/random-tip/submit-button';
import { Alert, AlertDescription, AlertTitle } from '#/components/ui/alert';
// import { revalidateRandomTip } from '#/lib/actions';
import { fetchRandomTip } from '#/lib/fetchers/tips';

const RandomTip = async (): Promise<ReactElement> => {
    const tip = await fetchRandomTip();

    return (
        <aside className="flex flex-col items-center sm:items-end gap-3">
            <Alert className="drop-shadow-lg">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle
                    className="mb-2"
                    dangerouslySetInnerHTML={{
                        __html: `<span class="text-cyan-600">${tip.hashtag}</span> ${tip.title}`,
                    }}
                ></AlertTitle>
                <AlertDescription
                    dangerouslySetInnerHTML={{ __html: tip.description }}
                ></AlertDescription>
            </Alert>
            {/*
            <form action={revalidateRandomTip}>
                <SubmitButton variant="ghost" type="submit">
                    <Shuffle />
                </SubmitButton>
            </form>
            */}
        </aside>
    );
};

export default RandomTip;
