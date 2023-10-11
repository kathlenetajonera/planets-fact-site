import Link from 'next/link';
import Navicon from './Navicon';
import NavList from './NavList';

const Header = () => {
    return (
        <nav
            className={`flex items-center justify-between py-5 px-8 
            sm:flex-col sm:pb-6 sm:border-b-[1px] sm:border-b-light-gray
            xl:flex-row xl:h-[5.438rem] xl:py-0
            `}
        >
            <Link href="/">
                <h1 className="font-medium text-[1.75rem]">THE PLANETS</h1>
            </Link>

            <Navicon />
            <NavList />
        </nav>
    );
};

export default Header;
