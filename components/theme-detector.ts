'use client';

import { ReactNode, useEffect } from 'react';

const ThemeDetector = (): ReactNode => {
    useEffect(() => {
        const prefersDarkMode = window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches;
        if (prefersDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    return null;
};

export default ThemeDetector;
