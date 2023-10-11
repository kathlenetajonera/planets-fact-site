import { notFound } from 'next/navigation';
import json from '@/_data/data.json';
import { DataType, DetailsType, OverviewType, Props } from './types';
import { overviewLabels } from './data';
import TabContent from '@/_components/TabContent';
import Overview from '@/_components/Overview';

function Page({ params }: Props) {
    const { planet } = params;
    const data = json.find((d) => d.name.toLowerCase() === planet) as DataType;

    if (!data) {
        notFound();
    }

    const details: DetailsType[] = [];
    Object.keys(data.details).forEach((key) => {
        details.push({
            key,
            label: overviewLabels[key as keyof OverviewType],
            value: data.details[key as keyof OverviewType],
        });
    });

    return (
        <div className="mx-auto xl:max-w-[69.375rem]">
            <TabContent planet={data.name} data={data} />
            <Overview details={details} />
        </div>
    );
}

export default Page;
