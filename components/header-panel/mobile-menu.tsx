'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import {
    MobileMenuItem,
    packages,
} from '#/components/header-panel/definitions';
import { Button } from '#/components/ui/button';
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '#/components/ui/drawer';

const MenuItems: MobileMenuItem[] = [
    {
        title: 'home',
        href: '/',
        type: 'link',
    },
    {
        title: 'about me ',
        href: '/about',
        type: 'link',
    },
    {
        title: 'dev tips',
        href: '/dev-tips',
        type: 'link',
    },
    {
        title: 'NPM packages',
        type: 'category',
        items: packages,
    },
    {
        title: 'contact',
        href: '/contact',
        type: 'link',
    },
];

const MobileMenu = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    const onDrawerOpenChange = (open: boolean) => {
        setIsDrawerOpen(open);
    };

    const handleMenuClick = () => {
        setIsDrawerOpen(false);
    };

    return (
        <Drawer open={isDrawerOpen} onOpenChange={onDrawerOpenChange}>
            <DrawerTrigger asChild>
                <Button
                    className="flex items-center  md:hidden"
                    variant="ghost"
                >
                    <Menu className="w-4 h-4 mr-2" />
                    <span>Menu</span>
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <VisuallyHidden>
                        <DrawerHeader>
                            <DrawerTitle>Menu</DrawerTitle>
                            <DrawerDescription>
                                WebDevWizard page menu
                            </DrawerDescription>
                        </DrawerHeader>
                    </VisuallyHidden>
                    <nav>
                        <ul className="my-2">
                            {MenuItems.map((item) => {
                                if (item.type === 'link') {
                                    return (
                                        <li key={item.href} className="mt-2">
                                            <Link
                                                href={item.href}
                                                onClick={handleMenuClick}
                                                className="block p-2 font-semibold rounded-sm bg-gray-100 dark:bg-gray-600"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    );
                                } else if (item.type === 'category') {
                                    return (
                                        <li key={item.title} className="my-2">
                                            <strong>{item.title}</strong>
                                            <ul className="my-2">
                                                {item.items.map((subItem) => (
                                                    <li
                                                        key={subItem.href}
                                                        className="ml-4"
                                                    >
                                                        <Link
                                                            href={subItem.href}
                                                            onClick={
                                                                handleMenuClick
                                                            }
                                                            className="block py-1 px-2 text-sm font-semibold rounded-sm bg-gray-100 dark:bg-gray-600"
                                                        >
                                                            {subItem.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    );
                                }
                            })}
                        </ul>
                    </nav>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default MobileMenu;
