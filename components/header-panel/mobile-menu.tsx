'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import React from 'react';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import Divider from '#/components/divider';
import {
    MobileMenuCategory,
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
    },
    {
        title: 'about me ',
        href: '/about',
    },
    {
        title: 'dev tips',
        href: '/dev-tips',
    },
    {
        title: 'contact',
        href: '/contact',
    },
];

const mobileMenuCategories: MobileMenuCategory[] = [
    {
        title: 'NPM packages',
        items: packages,
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
                    <nav className="p-2">
                        <ul className="my-2">
                            {MenuItems.map((item) => (
                                <li key={item.href} className="mt-2">
                                    <Link
                                        href={item.href}
                                        onClick={handleMenuClick}
                                        className="block p-2 font-semibold rounded-sm bg-gradient-to-r from-green-300 via-blue-300 to-transparent dark:from-green-800 dark:via-blue-800"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Divider className="my-4" />
                        {mobileMenuCategories.map((category) => (
                            <React.Fragment key={category.title}>
                                <p className="text-xl font-semibold">
                                    {category.title}
                                </p>
                                <ul className="ml-4">
                                    {category.items.map((item) => (
                                        <li key={item.title} className="my-2">
                                            <Link
                                                href={item.href}
                                                onClick={handleMenuClick}
                                                className="block py-1 px-2 text-sm font-semibold rounded-sm bg-gradient-to-r from-green-300 via-blue-300 to-transparent dark:from-green-800 dark:via-blue-800"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </React.Fragment>
                        ))}
                    </nav>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default MobileMenu;
