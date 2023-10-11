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
        mercury: 'xl:after:bg-mercury',
        venus: 'xl:after:bg-venus',
        earth: 'xl:after:bg-earth',
        mars: 'xl:after:bg-mars',
        jupiter: 'xl:after:bg-jupiter',
        saturn: 'xl:after:bg-saturn',
        uranus: 'xl:after:bg-uranus',
        neptune: 'xl:after:bg-neptune',
    };

    return (
        <Link href={href}>
            <li
                key={href}
                id={href}
                className={`relative text-xs font-bold uppercase h-full transition-[color] hover:text-white xl:hover:after:translate-y-0
                    lg:text-[0.688rem] xl:ml-8 xl:flex xl:items-center
                    xl:after:content-[''] xl:after:block xl:after:w-full xl:after:h-1 ${
                        accentColor[planetName as keyof PlanetKeys]
                    } xl:after:absolute xl:after:top-0 xl:after:left-0 xl:after:-translate-y-full xl:after:transition-transform
                    ${
                        isActive
                            ? 'text-white xl:after:translate-y-0'
                            : 'text-gray'
                    }`}
            >
                {label}
            </li>
        </Link>
    );
};

export default NavItem;
