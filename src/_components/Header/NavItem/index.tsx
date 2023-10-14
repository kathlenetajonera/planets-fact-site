'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PlanetKeys } from './types';

type Props = {
    href: string;
    label: string;
};

const NavItem = ({ href, label }: Props) => {
    const planetName = href.replace('/', '');
    const pathname = usePathname();
    const isActive = pathname === href;
    const accentColor = {
        mercury: 'before:bg-mercury',
        venus: 'before:bg-venus',
        earth: 'before:bg-earth',
        mars: 'before:bg-mars',
        jupiter: 'before:bg-jupiter',
        saturn: 'before:bg-saturn',
        uranus: 'before:bg-uranus',
        neptune: 'before:bg-neptune',
    };

    return (
        <Link href={href}>
            <li
                key={href}
                id={href}
                className={`flex relative text-sm font-bold uppercase py-5 px-6 border-b-[1px] border-b-light-gray before:content-[''] before:block before:w-5 before:h-5 before:rounded-full before:mr-5
                    ${accentColor[planetName as keyof PlanetKeys]}
                    sm:before:absolute sm:before:left-0 sm:before:bottom-0 sm:before:w-full sm:before:h-1 sm:before:translate-y-full sm:hover:before:translate-y-0 sm:before:transition-transform sm:p-0 sm:border-y-0 sm:text-xs sm:h-full sm:transition-[color] sm:hover:text-white 
                    lg:text-[0.688rem]
                    xl:ml-8 xl:flex xl:items-center xl:before:top-0 xl:before:-translate-y-full
                    ${
                        isActive
                            ? 'text-white sm:before:translate-y-0 xl:before:translate-y-0'
                            : 'text-gray'
                    }`}
            >
                {label}
            </li>
        </Link>
    );
};

export default NavItem;
