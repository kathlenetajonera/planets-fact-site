import { DetailsType } from '@/app/[planet]/types';
import DetailCard from '../DetailCard';

type Props = {
    details: DetailsType[];
};

const Overview = ({ details }: Props) => {
    return (
        <div className="px-8 mb-12 sm:flex xl:px-0">
            {details.map(({ key, label, value }) => (
                <DetailCard key={key} label={label} value={value} />
            ))}
        </div>
    );
};

export default Overview;
