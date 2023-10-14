'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import useMediaQuery from '@/_hooks/useMediaQuery';
import Link from 'next/link';
import Navicon from './Navicon';
import NavList from './NavList';

const Header = () => {
    const pathname = usePathname();
    const { isMobile, isTablet } = useMediaQuery();
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        if (isTablet) {
            setIsNavOpen(true);
        }
    }, [isTablet]);

    useEffect(() => {
        if (isMobile) {
            setIsNavOpen(false);
        }
    }, [pathname, isMobile]);

    return (
        <nav
            className={`relative flex items-center justify-between py-5 px-6
            sm:flex-col sm:px-8 sm:pb-0 sm:border-b-[1px] sm:border-b-light-gray
            xl:flex-row xl:h-[5.438rem] xl:py-0
            2xl:px-10
            `}
        >
            <Link href="/">
                <h1 className="font-medium text-[1.75rem]">THE PLANETS</h1>
            </Link>

            <Navicon isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
            <NavList isNavOpen={isNavOpen} />
        </nav>
    );
};

export default Header;
