import React from "react";

const ShimmerVideoCard = () => {
  return (
    <div>
      <div className="w-[400.71px] my-5 cursor-pointer">
        <div className="relative h-[224.84px] w-[399.79px] -z-40 ">
          <p className=" h-[224.84px] w-[399.71px] bg-gray-300 rounded-lg bg-cover "></p>
        </div>
        <div className="flex mt-3 gap-3 ml-2">
          <div>
            <p className="h-[36px] w-[36px] rounded-full bg-gray-300"> </p>
          </div>
          <div className="relative h-[78px] w-[100%] flex flex-col z-30 gap-2 -mt-1">
            <p className="h-4 w-80 mt-2  bg-gray-300 rounded-l-full rounded-r-full"> </p>
            <p className=" h-4 w-80 bg-gray-300 rounded-l-full rounded-r-full"> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerVideoCard;
