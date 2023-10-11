'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { DataType } from '@/app/[planet]/types';
import { tabButtons } from './data';
import SourceIcon from '../Icons/SourceIcon';
import TabButton from '../TabButton';

type Props = {
    planet: string;
    data: DataType;
};

const TabContent = ({ planet, data }: Props) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [activeContent, setActiveContent] = useState(data.overview);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        setHasLoaded(true);
    }, []);

    useEffect(() => {
        setActiveContent(
            data[activeTab as 'overview' | 'structure' | 'geology']
        );
    }, [activeTab]);

    if (hasLoaded) {
        return (
            <div className="relative text-center px-8 mt-32 sm:mt-0 xl:flex xl:items-center xl:px-0 xl:mt-24">
                <div className="my-16 xl:basis-full xl:my-0">
                    <Image
                        src={activeContent.image}
                        priority={true}
                        alt="earth"
                        width={200}
                        height={200}
                        className="mx-auto sm:w-64 xl:w-[28rem]"
                    />
                </div>

                <div className="sm:flex sm:gap-20 xl:flex-col xl:basis-2/4 xl:gap-8">
                    <div className="sm:text-left">
                        <h1 className="text-[2.5rem] uppercase xl:text-[5rem]">
                            {planet}
                        </h1>
                        <p className="text-sm text-lighter-gray leading-6 my-6 xl:text-base xl:mt-4">
                            {activeContent.content}
                        </p>

                        <p className="flex items-center justify-center text-gray sm:justify-start">
                            Source:
                            <a
                                href={activeContent.source}
                                target="_blank"
                                className="flex items-center underline font-bold mx-1.5"
                            >
                                Wikipedia
                            </a>
                            <span className="mb-1">
                                <SourceIcon />
                            </span>
                        </p>
                    </div>

                    <div
                        className={`absolute top-0 left-0 -translate-y-[124px] flex justify-between w-full border-y-[1px] border-y-light-gray px-8 
                        sm:relative sm:translate-y-0 sm:flex-col sm:p-0 sm:border-y-transparent sm:justify-center
                        `}
                    >
                        {tabButtons.map((btn, index) => (
                            <TabButton
                                key={btn.key}
                                index={index}
                                btn={btn}
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return <></>;
};

export default TabContent;
