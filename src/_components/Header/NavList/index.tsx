import data from './data';
import NavItem from '../NavItem';
import { Props } from '../types';

const NavList = ({ isNavOpen }: Props) => {
    return (
        <ul
            className={`overflow-hidden w-full h-screen bg-dark-blue z-10 absolute top-[90px] left-0 ${
                isNavOpen
                    ? 'opacity-1 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
            } transition-opacity duration-300 
            sm:relative sm:top-0 sm:h-8 sm:flex sm:justify-between sm:w-full sm:mt-10
            xl:mt-0 xl:flex-1 xl:justify-end xl:h-full`}
        >
            {data.map(({ id, label }) => (
                <NavItem key={id} href={id} label={label} />
            ))}
        </ul>
    );
};

export default NavList;
