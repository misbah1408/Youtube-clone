import React from 'react';
import { Link } from 'react-router-dom';


const RecomendedVideoList = ({ data }) => {
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
    const { snippet, statistics, contentDetails } = data;
    const { title, channelTitle, thumbnails } = snippet || {};
    const duration = contentDetails?.duration;
    const viewCount = statistics?.viewCount;
    const publishedAt = snippet?.publishedAt;
    if (!data) return null;
  return (
    
    <div className='flex my-3 gap-3'>
      <div className='w-[170px]'>
        <img className='relative h-24 rounded-lg' src={thumbnails?.medium?.url} alt="" />
        <span className="absolute mt-[-1.7rem] ml-[8.3rem] bg-[rgba(0,0,0,0.8)] text-white text-[10px] font-semibold p-1 rounded-md">
            {formatYouTubeDuration(duration)}
          </span>
      </div>
      <div className='w-[202px] h-[96px] flex flex-col'>
        <p className='text-[14px] font-semibold h-10 overflow-hidden' >{title}</p>
        <span className='text-[12px] font-semibold text-gray-500' title={channelTitle}>{channelTitle}</span>
        <span className="text-[12px] font-semibold text-gray-500">
          {formatViewCount(viewCount)} views · {formatTimeAgo (publishedAt)}
        </span>
      </div>
    </div>
  );
};

export default RecomendedVideoList;
