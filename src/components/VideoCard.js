import React from "react";
import { DUMMY_USER } from "./utils/Constants";
import useTimeAgo from "../hooks/useTimeAgo";

const VideoCard = ({ info }) => {
  const { statistics, snippet, contentDetails } = info || {}; // Destructure info object conditionally
  const { title, channelTitle, thumbnails } = snippet || {};
  const publishedAt = snippet?.publishedAt;
  const timeAgo = useTimeAgo(publishedAt); // Call hook unconditionally

  if (!info) return null;

  function formatViewCount(viewCount) {
    // Function body remains the same
    // If viewCount is not defined or null, return empty string
    if (!viewCount) return "";

    // Convert viewCount to number
    viewCount = parseInt(viewCount);

    // Define thresholds for conversion
    const thresholds = [
      { limit: 1000000, symbol: "m" }, // million
      { limit: 1000, symbol: "k" }, // thousand
    ];

    // Find the appropriate threshold to use
    const threshold = thresholds.find((t) => viewCount >= t.limit);

    // If no threshold is found, return original viewCount
    if (!threshold) return viewCount.toString();

    // Otherwise, calculate the shortened viewCount
    const shortViewCount =
      (viewCount / threshold.limit).toFixed(1) + threshold.symbol;

    return shortViewCount;
  }

  function formatYouTubeDuration(duration) {
    // Function body remains the same
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

    const hours = parseInt(match[1]) || 0;
    const minutes = parseInt(match[2]) || 0;
    const seconds = parseInt(match[3]) || 0;

    // Initialize an empty array to store the components
    const components = [];

    // Conditionally add hours to the components array if they are non-zero
    if (hours > 0) {
        components.push(hours.toString().padStart(2, '0'));
    }

    // Add minutes and seconds to the components array
    components.push(minutes.toString().padStart(2, '0'));
    components.push(seconds.toString().padStart(2, '0'));

    // Join the components array with colons to get the formatted duration string
    return components.join(':');
  }

  const duration = contentDetails?.duration;

  return (
    <div className="w-[400.71px] my-5 cursor-pointer">
      <div className="relative h-[224.84px] w-[399.79px] -z-40 ">
        <p
          className=" h-[224.84px] w-[399.71px]  rounded-lg bg-cover "
          style={{ backgroundImage: `url(${thumbnails?.medium?.url})` }}
        >
          <span className="absolute mt-[12.1rem] ml-[22.4rem] bg-[rgba(0,0,0,0.8)] text-white text-[12px] font-semibold p-1 rounded-md">
            {formatYouTubeDuration(duration)}
          </span>
        </p>
      </div>
      <div className="flex mt-3 gap-3 ml-2">
        <div>
          <img className="h-[36px] w-[43px] rounded-full" src={DUMMY_USER} alt="" />
        </div>
        <div className="relative h-[78px] w-[100%] flex flex-col z-30">
          <span className="h-[25px] text-lg font-bold overflow-hidden text-ellipsis">{title}</span>
          <span className="text-sm text-gray-500 mt-2" title={channelTitle}>
            {channelTitle}
          </span>
          <span className="text-sm text-gray-500">
            {formatViewCount(statistics?.viewCount)} views · {timeAgo}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
