import React from "react";
import { DUMMY_USER } from "./utils/Constants";
import { formatTimeAgo, formatViewCount, formatYouTubeDuration } from "./utils/Functions";
import ShimmerVideoCard from "./ShimmerVideoCard";

const VideoCard = ({ info }) => {
  const { statistics, snippet, contentDetails } = info || {}; // Destructure info object conditionally
  const { title, channelTitle, thumbnails } = snippet || {};
  const publishedAt = snippet?.publishedAt;
  const duration = statistics?.viewCount;
  if (!info) return (
    <div className='relative z-10 flex flex-wrap gap-4'>
      <ShimmerVideoCard/>
      <ShimmerVideoCard/>
      <ShimmerVideoCard/>
      <ShimmerVideoCard/>
      <ShimmerVideoCard/>
      <ShimmerVideoCard/>
      <ShimmerVideoCard/>
      <ShimmerVideoCard/>
    </div>
  )

  return (
    <div className="w-[400.71px] mt-5 cursor-pointer">
      <div className="relative h-[224.84px] w-[399.79px] -z-40 ">
        <p
          className=" h-[224.84px] w-[399.71px]  rounded-lg bg-cover "
          style={{ backgroundImage: `url(${thumbnails?.medium?.url})` }}
        >
          <span className="absolute mt-[12.1rem] ml-[22.4rem] bg-[rgba(0,0,0,0.8)] text-white text-[12px] font-semibold p-1 rounded-md">
            {formatYouTubeDuration(contentDetails?.duration)}
          </span>
        </p>
      </div>
      <div className="flex mt-3 gap-3 ml-2">
        <div>
          <img className="h-[36px] w-[43px] rounded-full" src={DUMMY_USER} alt="" />
        </div>
        <div className="relative h-[100%] w-[100%] flex flex-col z-30">
          <span className="text-sm h-[40px] font-semibold overflow-hidden text-ellipsis">{title}</span>
          <span className="text-sm text-gray-500" title={channelTitle}>
            {channelTitle}
          </span>
          <span className="text-sm text-gray-500">
            {formatViewCount(duration)} views · {formatTimeAgo(publishedAt)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
