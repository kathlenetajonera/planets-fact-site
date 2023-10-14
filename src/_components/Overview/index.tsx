import { motion } from 'framer-motion';
import { containerVariant } from '../TabContent/Content/transitions';
import { DetailsType } from '@/app/[planet]/types';
import DetailCard from '../DetailCard';

type Props = {
    details: DetailsType[];
};

const Overview = ({ details }: Props) => {
    return (
        <motion.div
            variants={containerVariant}
            className="px-6 mb-12 sm:flex sm:px-8 xl:px-0"
        >
            {details.map(({ key, label, value }) => (
                <DetailCard key={key} label={label} value={value} />
            ))}
        </motion.div>
    );
};

export default Overview;
