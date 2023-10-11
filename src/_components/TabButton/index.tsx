import useMediaQuery from '@/_hooks/useMediaQuery';
import { TabButtonType } from '../TabContent/types';

type Props = {
    btn: TabButtonType;
    index: number;
    activeTab: string;
    setActiveTab: (val: string) => void;
};

const TabButton = ({ btn, index, activeTab, setActiveTab }: Props) => {
    const { isTablet } = useMediaQuery();
    const label = isTablet ? btn.tablet : btn.mobile;

    return (
        <button
            className={`text-xs font-medium uppercase tracking-widest py-5 relative overflow-hidden transition-[background] after:content-[''] after:block after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[115%] after:h-1 after:bg-earth after:transition-transform
            sm:text-left sm:after:content-none sm:border-[1px] sm:border-light-gray sm:py-4 sm:px-6 sm:text-xs sm:mb-4 sm:last:mb-0 sm:min-w-[16.75rem] sm:hover:bg-earth ${
                activeTab === btn.key
                    ? `after:translate-y-0 sm:bg-earth`
                    : `after:translate-y-full sm:bg-transparent`
            }`}
            onClick={() => setActiveTab(btn.key)}
        >
            {isTablet && (
                <span className="mr-4 text-gray font-medium">0{index + 1}</span>
            )}
            {label}
        </button>
    );
};

export default TabButton;
