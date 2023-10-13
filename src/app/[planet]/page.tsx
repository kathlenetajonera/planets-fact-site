'use client';
import { notFound, usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import json from '@/_data/data.json';
import { DataType, DetailsType, OverviewType, Props } from './types';
import { overviewLabels } from './data';
import { variant } from './transitions';
import TabContent from '@/_components/TabContent';
import Overview from '@/_components/Overview';

function Page({ params }: Props) {
    const pathname = usePathname();
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
        <AnimatePresence>
            <motion.div
                key={pathname}
                variants={variant}
                initial="hidden"
                animate="visible"
                className="mx-auto xl:max-w-[69.375rem]"
            >
                <TabContent planet={data.name} data={data} />
                <Overview details={details} />
            </motion.div>
        </AnimatePresence>
    );
}

export default Page;
