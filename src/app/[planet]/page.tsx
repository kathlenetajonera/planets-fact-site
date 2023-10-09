import Image from 'next/image';
import { antonio } from '../fonts';
import SourceIcon from '@/_components/Icons/SourceIcon';

function Page() {
    return (
        <div className="mx-auto xl:max-w-[69.375rem]">
            <div className="relative text-center px-8 mt-32 sm:mt-0 xl:flex xl:items-center xl:px-0 xl:mt-24">
                <div className="my-16 xl:basis-full xl:my-0">
                    <Image
                        src="/images/planet-earth.svg"
                        alt="earth"
                        width={200}
                        height={200}
                        className="mx-auto sm:w-64 xl:w-[28rem]"
                    />
                </div>

                <div className="sm:flex sm:gap-20 xl:flex-col xl:basis-2/4 xl:gap-8">
                    <div className="sm:text-left">
                        <h1 className="text-[2.5rem] xl:text-[5rem]">EARTH</h1>
                        <p className="text-sm text-lighter-gray leading-6 my-6 xl:text-base xl:mt-4">
                            Third planet from the Sun and the only known planet
                            to harbor life. About 29.2% of Earth's surface is
                            land with remaining 70.8% is covered with water.
                            Earth's distance from the Sun, physical properties
                            and geological history have allowed life to evolve
                            and thrive.
                        </p>

                        <p className="flex items-center justify-center text-gray sm:justify-start">
                            Source:
                            <a
                                href="#"
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
                        <button
                            className={`text-xs font-medium uppercase tracking-widest py-5 relative after:content-[''] after:block after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[115%] after:h-1 after:bg-earth 
                            sm:text-left sm:after:content-none sm:border-[1px] sm:border-light-gray sm:p-4 sm:text-xs sm:mb-4 sm:min-w-[16.75rem]`}
                        >
                            overview
                        </button>
                        <button
                            className={`text-xs font-medium uppercase tracking-widest py-5 relative after:content-[''] after:block after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[115%] after:h-1 after:bg-earth 
                            sm:text-left sm:after:content-none sm:border-[1px] sm:border-light-gray sm:p-4 sm:text-xs sm:mb-4 sm:min-w-[16.75rem]`}
                        >
                            structure
                        </button>
                        <button
                            className={`text-xs font-medium uppercase  tracking-widest py-5 relative after:content-[''] after:block after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[115%] after:h-1 after:bg-earth 
                            sm:text-left sm:after:content-none sm:border-[1px] sm:border-light-gray sm:p-4 sm:text-xs sm:min-w-[16.75rem]`}
                        >
                            surface
                        </button>
                    </div>
                </div>
            </div>

            <div className="px-8 mt-8 mb-12 sm:flex xl:px-0 xl:mt-20">
                <div
                    className={`flex items-center justify-between px-6 py-3 border-[1px] border-light-gray mb-2
                    sm:flex-col sm:items-start sm:py-6 sm:px-4 sm:mr-4 sm:mb-0 sm:flex-1`}
                >
                    <p className="text-xs text-gray font-medium tracking-wide sm:mb-2">
                        ROTATION TIME
                    </p>
                    <p className={`text-xl ${antonio.className} sm:text-2xl`}>
                        0.99 DAYS
                    </p>
                </div>
                <div
                    className={`flex items-center justify-between px-6 py-3 border-[1px] border-light-gray mb-2
                    sm:flex-col sm:items-start sm:py-6 sm:px-4 sm:mb-0 sm:flex-1`}
                >
                    <p className="text-xs text-gray font-medium tracking-wide sm:mb-2">
                        ROTATION TIME
                    </p>
                    <p className={`text-xl ${antonio.className} sm:text-2xl`}>
                        0.99 DAYS
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Page;
