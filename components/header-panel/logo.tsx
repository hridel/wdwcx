import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link
            href="/"
            className="cursor-pointer w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-amber-400 to-yellow-400 hover:scale-110"
        >
            <Image
                src="/imgs/me_wdw.png"
                alt="Web Dev Wizard Jan Hřídel"
                width={40}
                height={40}
                className="rounded-full"
            />
        </Link>
    );
};

export default Logo;
