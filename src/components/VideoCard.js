import React from "react";
import { DUMMY_USER } from "./utils/Constants";

const VideoCard = ({ info }) => {
  if (!info) return null;
  const { statistics, snippet, contentDetails } = info;
  const { title, channelTitle, thumbnails } = snippet;
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
    const shortViewCount =
      (viewCount / threshold.limit).toFixed(1) + threshold.symbol;

    return shortViewCount;
  }

  function formatTimeAgo(publishedAt) {
    const currentDate = new Date();
    const publishedDate = new Date(publishedAt);
    const millisecondsDiff = currentDate - publishedDate;
    const secondsDiff = millisecondsDiff / 1000;
    const minutesDiff = secondsDiff / 60;
    const hoursDiff = minutesDiff / 60;
    const daysDiff = hoursDiff / 24;
    const monthsDiff = daysDiff / 30;
    const yearsDiff = daysDiff / 365;

    if (yearsDiff >= 1) {
      return (
        Math.floor(yearsDiff) +
        " year" +
        (Math.floor(yearsDiff) > 1 ? "s" : "") +
        " ago"
      );
    } else if (monthsDiff >= 1) {
      return (
        Math.floor(monthsDiff) +
        " month" +
        (Math.floor(monthsDiff) > 1 ? "s" : "") +
        " ago"
      );
    } else if (daysDiff >= 1) {
      return (
        Math.floor(daysDiff) +
        " day" +
        (Math.floor(daysDiff) > 1 ? "s" : "") +
        " ago"
      );
    } else if (hoursDiff >= 1) {
      return (
        Math.floor(hoursDiff) +
        " hour" +
        (Math.floor(hoursDiff) > 1 ? "s" : "") +
        " ago"
      );
    } else if (minutesDiff >= 1) {
      return (
        Math.floor(minutesDiff) +
        " minute" +
        (Math.floor(minutesDiff) > 1 ? "s" : "") +
        " ago"
      );
    } else {
      return (
        Math.floor(secondsDiff) +
        " second" +
        (Math.floor(secondsDiff) > 1 ? "s" : "") +
        " ago"
      );
    }
  }

  const publishedAt = snippet?.publishedAt;
  function formatYouTubeDuration(duration) {
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
        style={{ backgroundImage: `url(${thumbnails.medium.url})` }}
        ><span className="absolute mt-[12.1rem] ml-[22.4rem] bg-[rgba(0,0,0,0.8)] text-white text-[12px] font-semibold p-1 rounded-md">{formatYouTubeDuration(duration)}</span></p>
        
        {/* <img
          className="h-[190px] w-[254px] rounded-sm scale-100 -z-30 "
          src={thumbnails.standard.url}
        /> */}
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
            {formatViewCount(statistics?.viewCount)} views ·{" "}
            {formatTimeAgo(publishedAt)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
