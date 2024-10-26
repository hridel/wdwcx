import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link
            href="/"
            className="cursor-pointer w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-600 hover:scale-110"
        >
            <Image
                src="/imgs/wdw_white.png"
                alt="Web Dev Wizard"
                width={40}
                height={40}
            />
        </Link>
    );
};

export default Logo;
