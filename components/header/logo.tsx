'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
    const router = useRouter();

    return (
        <li
            onClick={() => {
                router.push('/');
            }}
            className="cursor-pointer w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-600 hover:scale-110"
        >
            <Image
                src="/imgs/wdw_white.png"
                alt="Web Dev Wizard"
                width={40}
                height={40}
            />
        </li>
    );
};

export default Logo;
