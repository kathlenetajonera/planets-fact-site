import { useEffect, useState } from 'react';

const useMediaQuery = () => {
    const hasWindow = typeof window !== 'undefined';

    const getWindowDimensions = () => {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;

        return { width, height };
    };

    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        if (hasWindow) {
            const handleResize = () =>
                setWindowDimensions(getWindowDimensions());

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);

    if (windowDimensions?.width) {
        return {
            isTablet: windowDimensions?.width >= 640,
            isMobile: windowDimensions?.width < 640,
        } as any;
    }

    return {
        isTablet: null,
        isMobile: null,
    };
};

export default useMediaQuery;
