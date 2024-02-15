import React from "react";

const VideoTitles = ({ info }) => {
  if (!info) return null;

  const { statistics, snippet, contentDetails } = info;
  const { title, channelTitle } = snippet;
  function formatViewCount(viewCount) {
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
    let shortViewCount = (viewCount / threshold.limit).toFixed(1);

    // If the decimal part is ".0" or ".5", remove it
    if (shortViewCount.endsWith('.0') || shortViewCount.endsWith('.5')) {
        shortViewCount = Math.floor(viewCount / threshold.limit).toString();
    }

    // Append the symbol (e.g., "k" or "m")
    shortViewCount += threshold.symbol;

    return shortViewCount;
}

  return (
    <div className="mt-3">
      <span className="h-[25px] text-lg font-bold overflow-hidden text-ellipsis">
        {title}
      </span>
      <div className="h-14 flex mt-1 items-center justify-between">
        <div className="flex gap-3">
          <span className="h-10 w-10 bg-gray-300 rounded-full"> </span>
          <div className="">
            <span
              className="text-md text-black font-semibold"
              title={channelTitle}
            >
              {channelTitle}
            </span>
          </div>
          <button className="bg-black text-white px-4 font-semibold pb-[3px] rounded-r-full rounded-l-full text-sm hover:bg-[rgba(0,0,0,0.85)]">
            Subscribe
          </button>
        </div>
        <div className="flex items-center gap-7 mr-2 cursor-pointer">
          <div className="w-[83px] flex items-center gap-2 border-r-2 border-gray-300">
            <img
              className="h-6"
              src="https://lh3.googleusercontent.com/v3qgnUEYaccG4Io_1X4EAjaWSOJ_Fckv-HuDhHHa4A-Yc9d9Y1pRRAQ_KK4lNNEk_2TF-CRLKhvTmzuwawe1vk7sbQ=s60"
              alt=""
            />
            <span className="text-[16px] font-semibold">{formatViewCount(statistics.likeCount)}</span>
          </div>
          <img
              className="h-6 rotate-180"
              src="https://lh3.googleusercontent.com/v3qgnUEYaccG4Io_1X4EAjaWSOJ_Fckv-HuDhHHa4A-Yc9d9Y1pRRAQ_KK4lNNEk_2TF-CRLKhvTmzuwawe1vk7sbQ=s60"
              alt=""
            />
            <span className="flex gap-2 items-center"><img className="h-7 w-7" src="https://img.icons8.com/ios/50/forward-arrow.png" alt="forward-arrow"/><span className="text-[15px] font-semibold">Share</span></span>
            <span className="flex items-center gap-2" ><i className="fa-solid fa-arrow-down text-[20px] text-gray-800 border-b-2 border-gray-800"></i><span className="font-semibold">Download</span></span>
            <i className="fa-solid fa-ellipsis text-lg"></i>
        </div>
      </div>
    </div>
  );
};

export default VideoTitles;
