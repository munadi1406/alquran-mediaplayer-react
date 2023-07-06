const CardSkeleton = () => {
  return (
    <div className="p-2 m-1 min-h-46 bg-white/10 backdrop-blur-sm backdrop-filter rounded-md relative">
      <div className="grid grid-cols-2 ">
        <div>
          <div className="animate-pulse bg-gray-300 h-8 w-32 rounded"></div>
          <div className="animate-pulse bg-gray-300 h-4 w-24 rounded mt-1"></div>
        </div>
        <div>
          <div className="cursor-pointer flex justify-end items-center">
            <div className="animate-pulse bg-gray-300 h-12 w-12 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center space-x-2">
        <div className="animate-pulse bg-gray-300 h-4 w-32 rounded"></div>
        <div className="animate-pulse bg-blue-600 rounded-full w-16 h-6"></div>
        <div className="animate-pulse bg-gray-300 h-4 w-8 rounded"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
