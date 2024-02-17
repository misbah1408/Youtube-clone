import React from "react";
import useTimeAgo from "../hooks/useTimeAgo";
import { Link } from "react-router-dom";
import useLikeCount from "../hooks/useLikeCount";

const Comments = ({ commentMap }) => {
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
      components.push(hours.toString().padStart(2, "0"));
    }

    // Add minutes and seconds to the components array
    components.push(minutes.toString().padStart(2, "0"));
    components.push(seconds.toString().padStart(2, "0"));

    // Join the components array with colons to get the formatted duration string
    return components.join(":");
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
  if (!commentMap) return null;
  const { snippet, replies } = commentMap;
  const {
    authorProfileImageUrl: profilePicture,
    authorChannelUrl,
    textOriginal: displayComment,
    likeCount,
    publishedAt,
    authorDisplayName,
  } = snippet?.topLevelComment?.snippet || {};

  var totalReplyCount = snippet?.totalReplyCount;

  if (!commentMap) return null;
  return (
    <div className="flex mt-6 w-[853.33px] text-wrap">
      <div className="w-10 ">
        <Link to={authorChannelUrl}>
          <img
            className="w-9 rounded-full"
            src={profilePicture}
            alt="profilePicture"
          />
        </Link>
      </div>
      <div className="flex flex-col align-middle ml-5 gap-1">
        <div className="flex gap-3 items-center">
        <Link to={authorChannelUrl}><p className="text-sm font-semibold">{authorDisplayName}</p></Link>
          <span className="text-[12px] text-gray-500">
            {formatTimeAgo(publishedAt)}
          </span>
        </div>
        <div className="mt-0 w-[757.5px]">
          <p className="text-wrap text-[15px]">{displayComment}</p>
        </div>
        <div className="mt-3 flex gap-3 items-center">
          <p className="flex gap-1 items-center">
            <img
              className="h-5"
              src="https://lh3.googleusercontent.com/v3qgnUEYaccG4Io_1X4EAjaWSOJ_Fckv-HuDhHHa4A-Yc9d9Y1pRRAQ_KK4lNNEk_2TF-CRLKhvTmzuwawe1vk7sbQ=s60"
              alt=""
            />
            <span className="text-[12px]">{formatViewCount(likeCount)}</span>
          </p>
          <img
            className="h-5 rotate-180"
            src="https://lh3.googleusercontent.com/v3qgnUEYaccG4Io_1X4EAjaWSOJ_Fckv-HuDhHHa4A-Yc9d9Y1pRRAQ_KK4lNNEk_2TF-CRLKhvTmzuwawe1vk7sbQ=s60"
            alt=""
          />
          <span className="text-[13px] font-semibold ml-3">Reply</span>
        </div>
        {totalReplyCount === 0 ? null : (
          <div className="ml-6 mt-1 flex items-center gap-1 hover:bg-blue-100 px-5 w-max p-2 rounded-l-full rounded-r-full text-blue-600">
            <i className="fa-solid fa-caret-down text-[13px]"></i>
            <span className="ml-1 text-[13px] font-semibold">
              {formatViewCount(totalReplyCount)}
            </span>
            <span className="text-[13px] font-semibold">Replies</span>
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
