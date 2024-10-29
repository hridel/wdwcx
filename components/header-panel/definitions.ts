export type MenuSubItem = { title: string; href: string; description: string };

export const packages: MenuSubItem[] = [
    {
        title: 'modulo',
        href: '/npm-packages/modulo',
        description:
            'A modular arithmetic utility for JavaScript, handling both positive and negative integers.',
    },
    {
        title: 'convert-kit',
        href: '/npm-packages/convert-kit',
        description:
            'A library for converting colors between different formats (RGB, HSL, HEX).',
    },
];

export type MobileMenuItem = { title: string; href: string };

export type MobileMenuCategory = {
    title: string;
    items: MenuSubItem[];
};
