export const containerVariant = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05,
        },
    },
};

export const staggerVariant = {
    hidden: {
        x: 30,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'tween',
        },
    },
};
