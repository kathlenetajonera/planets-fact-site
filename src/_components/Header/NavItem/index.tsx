'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
    href: string;
    label: string;
};

const NavItem = ({ href, label }: Props) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href}>
            <li
                key={href}
                id={href}
                className={`text-sm font-bold uppercase xl:ml-8 hover:text-white transition-[color] ${
                    isActive ? 'text-white' : 'text-gray'
                }`}
            >
                {label}
            </li>
        </Link>
    );
};

export default NavItem;
