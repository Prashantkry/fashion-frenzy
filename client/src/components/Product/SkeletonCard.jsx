const SkeletonCard = () => {
    return (
        <div className="flex flex-wrap items-start pt-20 justify-around w-full h-[80vh] z-40 overflow-hidden">
            <div className="flex mt-3 card text-nowrap my-5 mx-5 w-auto animate-pulse">
                <div className="rounded overflow-hidden shadow-lg flex flex-col w-[314px] bg-gray-100 justify-center">
                    <div className="relative">
                        <div className="w-full h-[350px] p-3 pb-1 bg-gray-200"></div>
                        <div className="absolute top-0 right-0 bg-gray-300 px-4 py-2 mt-3 mr-3"></div>
                    </div>
                    <div className="px-6 py-3 mb-auto">
                        <div className="bg-gray-200 h-4 w-3/4 mb-2"></div>
                        <div className="bg-gray-200 h-3 w-full"></div>
                    </div>
                    <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                        <div className="bg-gray-200 p-1 text-sm px-2 rounded font-semibold -mt-1 -ml-3 w-24"></div>
                        <div className="flex items-center justify-center">
                            <span className="bg-gray-200 h-4 w-12"></span>
                            <span className="bg-gray-200 h-4 w-16 ml-2"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mt-3 card text-nowrap my-5 mx-5 w-auto animate-pulse">
                <div className="rounded overflow-hidden shadow-lg flex flex-col w-[314px] bg-gray-100 justify-center">
                    <div className="relative">
                        <div className="w-full h-[350px] p-3 pb-1 bg-gray-200"></div>
                        <div className="absolute top-0 right-0 bg-gray-300 px-4 py-2 mt-3 mr-3"></div>
                    </div>
                    <div className="px-6 py-3 mb-auto">
                        <div className="bg-gray-200 h-4 w-3/4 mb-2"></div>
                        <div className="bg-gray-200 h-3 w-full"></div>
                    </div>
                    <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                        <div className="bg-gray-200 p-1 text-sm px-2 rounded font-semibold -mt-1 -ml-3 w-24"></div>
                        <div className="flex items-center justify-center">
                            <span className="bg-gray-200 h-4 w-12"></span>
                            <span className="bg-gray-200 h-4 w-16 ml-2"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mt-3 card text-nowrap my-5 mx-5 w-auto animate-pulse">
                <div className="rounded overflow-hidden shadow-lg flex flex-col w-[314px] bg-gray-100 justify-center">
                    <div className="relative">
                        <div className="w-full h-[350px] p-3 pb-1 bg-gray-200"></div>
                        <div className="absolute top-0 right-0 bg-gray-300 px-4 py-2 mt-3 mr-3"></div>
                    </div>
                    <div className="px-6 py-3 mb-auto">
                        <div className="bg-gray-200 h-4 w-3/4 mb-2"></div>
                        <div className="bg-gray-200 h-3 w-full"></div>
                    </div>
                    <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                        <div className="bg-gray-200 p-1 text-sm px-2 rounded font-semibold -mt-1 -ml-3 w-24"></div>
                        <div className="flex items-center justify-center">
                            <span className="bg-gray-200 h-4 w-12"></span>
                            <span className="bg-gray-200 h-4 w-16 ml-2"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonCard;
