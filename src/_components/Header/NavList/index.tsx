import data from './data';
import NavItem from '../NavItem';

const NavList = () => {
    return (
        <ul
            className={`hidden sm:flex justify-between w-full mt-10
            xl:mt-0 xl:flex-1 xl:justify-end xl:h-full`}
        >
            {data.map(({ id, label }) => (
                <NavItem key={id} href={id} label={label} />
            ))}
        </ul>
    );
};

export default NavList;
