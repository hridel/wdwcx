'use client';

import React, { useCallback, useEffect, useState } from 'react';

const lettersAndSymbols = 'abcdefghijklmnopqrstuvwxyz01379!@#$%&*_-+=<>?';

interface HackerTextProps {
    text: string;
}

export function HackerText({ text }: HackerTextProps) {
    const [hackerText, setHackerText] = useState(text);

    const getRandomChar = useCallback(
        () =>
            lettersAndSymbols[
                Math.floor(Math.random() * lettersAndSymbols.length)
            ],
        []
    );

    const animateText = useCallback(async () => {
        const duration = 50;
        const revealDuration = 80;
        const initialRandomDuration = 300;

        const generateRandomText = () =>
            text
                .split('')
                .map(() => getRandomChar())
                .join('');

        setHackerText(generateRandomText());

        const endTime = Date.now() + initialRandomDuration;
        while (Date.now() < endTime) {
            await new Promise((resolve) => setTimeout(resolve, duration));
            setHackerText(generateRandomText());
        }

        for (let i = 0; i < text.length; i++) {
            await new Promise((resolve) => setTimeout(resolve, revealDuration));
            setHackerText(
                (prevText) =>
                    text.slice(0, i + 1) +
                    prevText
                        .slice(i + 1)
                        .split('')
                        .map(() => getRandomChar())
                        .join('')
            );
        }
    }, [text, getRandomChar]);

    useEffect(() => {
        setHackerText(text);
    }, [text]);

    useEffect(() => {
        animateText();
    }, [animateText]);

    return (
        <div className="relative inline-block" onMouseLeave={animateText}>
            {hackerText}
        </div>
    );
}
