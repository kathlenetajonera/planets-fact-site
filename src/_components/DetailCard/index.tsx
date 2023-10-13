import { motion } from 'framer-motion';
import { staggerVariant } from '../TabContent/Content/transitions';
import { antonio } from '@/app/fonts';

type Props = {
    label: string;
    value: string;
};

const DetailCard = ({ label, value }: Props) => {
    return (
        <motion.div
            variants={staggerVariant}
            className={`flex items-center justify-between px-6 py-3 border-[1px] border-light-gray mb-2 last:mb-0
            sm:flex-col sm:items-start sm:p-4 sm:mr-4 sm:last:mr-0 sm:mb-0 sm:flex-1`}
        >
            <p className="text-xs text-gray font-medium uppercase tracking-wide sm:mb-2 lg:mb-1">
                {label}
            </p>
            <p className={`text-xl ${antonio.className} uppercase sm:text-2xl`}>
                {value}
            </p>
        </motion.div>
    );
};

export default DetailCard;
