export type Props = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string };
};

export type DataType = {
    name: string;
    overview: TabDataType;
    structure: TabDataType;
    geology: TabDataType;
    details: OverviewType;
};

export type TabDataType = {
    image: string;
    content: string;
    source: string;
};

export type OverviewType = {
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
};

export type DetailsType = {
    key: string;
    label: string;
    value: string;
};
