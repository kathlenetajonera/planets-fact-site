import { motion } from 'framer-motion';
import { staggerVariant } from '../TabContent/Content/transitions';
import useMediaQuery from '@/_hooks/useMediaQuery';
import { TabButtonType } from '../TabContent/types';
import { PlanetKeys } from '../Header/NavItem/types';
import { accentColor, accentColorActive } from './data';

type Props = {
    name: string;
    btn: TabButtonType;
    index: number;
    activeTab: number;
    setActiveTab: (val: number) => void;
};

const TabButton = ({ name, btn, index, activeTab, setActiveTab }: Props) => {
    const { isTablet } = useMediaQuery();
    const label = isTablet ? btn.tablet : btn.mobile;
    const planet = name.toLowerCase();
    const dynamicAccent = accentColor[planet as keyof PlanetKeys];
    const dynamicAccentActive = accentColorActive[planet as keyof PlanetKeys];

    return (
        <motion.button
            variants={staggerVariant}
            className={`text-xs font-medium uppercase tracking-widest py-5 relative overflow-hidden transition-[background] after:content-[''] after:block after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[115%] after:h-1 ${dynamicAccent} after:transition-transform 
            sm:text-left sm:after:content-none sm:border-[1px] sm:border-light-gray sm:py-4 sm:px-6 sm:text-xs sm:mb-4 sm:last:mb-0 sm:min-w-[16.75rem] ${
                index === activeTab
                    ? `after:translate-y-0 ${dynamicAccentActive}`
                    : `after:translate-y-full sm:bg-transparent`
            }`}
            onClick={() => setActiveTab(index)}
        >
            {isTablet && (
                <span className="mr-4 text-lighter-gray font-medium">
                    0{index + 1}
                </span>
            )}
            {label}
        </motion.button>
    );
};

export default TabButton;
