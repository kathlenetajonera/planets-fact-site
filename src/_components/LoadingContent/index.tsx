const LoadingContent = () => {
    return (
        <div className="animate-pulse relative text-center px-8 pb-8 mt-32 sm:mt-0 xl:pb-20 xl:flex xl:px-0 xl:mt-24">
            <div className="relative my-16 xl:basis-full xl:mt-12">
                <div className="h-52 bg-loading rounded-md mx-auto sm:w-80 sm:h-64 xl:w-[28rem] xl:h-[28rem]" />
            </div>

            <div className="sm:flex sm:gap-20 xl:flex-col xl:basis-2/4 xl:gap-4">
                <div className="sm:text-left sm:basis-3/5">
                    <div className="h-14 bg-loading rounded-md mx-auto xl:h-20 xl:mt-8" />
                    <div className="h-48 bg-loading rounded-md my-6 sm:h-32 xl:text-base xl:mt-8" />
                    <div className="h-8 bg-loading rounded-md" />
                </div>

                <div
                    className={`absolute top-0 left-0 -translate-y-[124px] flex justify-between px-8 w-full
                        sm:relative sm:translate-y-0 sm:flex-col sm:p-0 sm:justify-center sm:items-start sm:basis-2/5
                    `}
                >
                    <div className="h-8 bg-loading flex-1 rounded-md py-7 sm:mb-4 sm:w-full sm:flex-none" />
                    <div className="h-8 bg-loading flex-1 rounded-md mx-4 py-7 sm:mx-0 sm:mb-4 sm:w-full sm:flex-none" />
                    <div className="h-8 bg-loading flex-1 rounded-md py-7 sm:mb-0 sm:w-full sm:flex-none" />
                </div>
            </div>
        </div>
    );
};

export default LoadingContent;
