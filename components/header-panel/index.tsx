import DesktopMenu from '#/components/header-panel/desktop-menu';
import Logo from '#/components/header-panel/logo';
import MobileMenu from '#/components/header-panel/mobile-menu';
import MaxWidthWrapper from '#/components/max-width-wrapper';

const HeaderPanel = () => {
    return (
        <header className="w-full h-12 fixed left-0 top-0 z-50 shadow bg-white/50 dark:bg-gray-900/50 backdrop-blur-md">
            <MaxWidthWrapper className="py-0 flex items-center justify-between">
                <Logo />
                <DesktopMenu />
                <MobileMenu />
            </MaxWidthWrapper>
        </header>
    );
};
export default HeaderPanel;
