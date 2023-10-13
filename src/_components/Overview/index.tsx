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
            className="px-8 mb-12 sm:flex xl:px-0"
        >
            {details.map(({ key, label, value }) => (
                <DetailCard key={key} label={label} value={value} />
            ))}
        </motion.div>
    );
};

export default Overview;
