'use client';
import { useState } from 'react';

const Navicon = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <button className="sm:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
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
