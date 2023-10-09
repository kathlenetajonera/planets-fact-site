import data from './data';

const NavList = () => {
    return (
        <ul
            className={`hidden sm:flex justify-between w-full mt-10
            xl:mt-0 xl:flex-1 xl:justify-end`}
        >
            {data.map(({ id, label }) => (
                <li
                    id={id}
                    className="text-gray text-sm font-bold uppercase xl:ml-8"
                >
                    {label}
                </li>
            ))}
        </ul>
    );
};

export default NavList;
