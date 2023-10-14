import { Props } from '../types';

const Navicon = ({ isNavOpen, setIsNavOpen }: Props) => {
    const handleToggle = () => {
        setIsNavOpen && setIsNavOpen(!isNavOpen);
    };

    return (
        <button className="sm:hidden" onClick={handleToggle}>
            <span
                className={`block w-7 h-1 bg-white rounded-full mb-1 transition-transform origin-[3px_4px] ${
                    isNavOpen ? 'rotate-45' : ''
                }`}
            />
            <span
                className={`block w-7 h-1 bg-white rounded-full mb-1 transition-opacity ${
                    isNavOpen ? 'opacity-0' : ''
                }`}
            />
            <span
                className={`block w-7 h-1 bg-white rounded-full transition-transform  origin-[4px_0px] ${
                    isNavOpen ? '-rotate-45' : ''
                }`}
            />
        </button>
    );
};

export default Navicon;
