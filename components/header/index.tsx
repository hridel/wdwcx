import Link from 'next/link';

import Logo from '#/components/header/logo';
import MaxWidthWrapper from '#/components/max-width-wrapper';

const MenuItems = [
    {
        name: 'About me',
        href: '/about',
    },
    {
        name: 'Contact',
        href: '/contact',
    },
];

const MenuItem = ({ children }: { children: React.ReactNode }) => {
    return (
        <li className="p-2 font-semibold transition-all duration-600 hover:scale-110">
            {children}
        </li>
    );
};

const Menu = () => {
    return (
        <nav className="flex items-center py-3">
            <div className="bg-gradient-to-br from-green-500 to-blue-700 rounded-full p-0.5 hover:from-green-400 hover:to-blue-600 transition-all duration-600">
                <ul className="bg-background rounded-full flex items-center justify-end gap-4 pl-4">
                    {MenuItems.map((item) => (
                        <MenuItem key={item.name}>
                            <Link href={item.href}>{item.name}</Link>
                        </MenuItem>
                    ))}
                    <Logo />
                </ul>
            </div>
        </nav>
    );
};
const Header = () => {
    return (
        <header className="w-full flex justify-end">
            <MaxWidthWrapper>
                <Menu />
            </MaxWidthWrapper>
        </header>
    );
};

export default Header;
