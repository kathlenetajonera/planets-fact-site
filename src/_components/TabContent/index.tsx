'use client';
import { useEffect, useRef, useState } from 'react';
import { DataType } from '@/app/[planet]/types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Content from './Content';
import LoadingContent from '../LoadingContent';

type Props = {
    planet: string;
    data: DataType;
};

const TabContent = ({ planet, data }: Props) => {
    const [activeTab, setActiveTab] = useState(0);
    const [hasLoaded, setHasLoaded] = useState(false);
    const sliderRef: any = useRef(null);

    const config = {
        fade: true,
        arrows: false,
        infinite: false,
    };

    const commonProps = {
        name: planet,
        activeTab,
        setActiveTab,
    };

    useEffect(() => {
        setHasLoaded(true);
    }, []);

    useEffect(() => {
        if (typeof activeTab === 'number' && sliderRef.current) {
            sliderRef.current.slickGoTo(activeTab);
        }
    }, [activeTab]);

    if (hasLoaded) {
        return (
            <Slider ref={sliderRef} {...config}>
                <Content data={data.overview} {...commonProps} />
                <Content data={data.structure} {...commonProps} />
                <Content
                    data={data.geology}
                    {...commonProps}
                    mainImage={data.overview.image}
                />
            </Slider>
        );
    }

    return <LoadingContent />;
};

export default TabContent;
