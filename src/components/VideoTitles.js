import React, { useEffect, useState } from "react";
import { formatViewCount } from "./utils/Functions";

const VideoTitles = ({ info }) => {
  const [channelData, setChannelData] = useState(null);

  useEffect(() => {
    const fetchChannelData = async () => {
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${info?.snippet?.channelId}&key=${process.env.REACT_APP_YT_API_KEY}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch channel data");
        }
        const json = await response.json();
        setChannelData(json?.items[0]);
      } catch (error) {
        console.error("Error fetching channel data:", error);
      }
    };

    if (info) {
      fetchChannelData();
    }
  }, [info]);

  if (!info || !channelData) return null;

  const { snippet } = info;
  const { title, channelTitle } = snippet;

  return (
    <div className="mt-3">
      <span className="h-[25px] text-lg font-bold overflow-hidden text-ellipsis">
        {title}
      </span>
      <div className="h-14 flex mt-1 items-center justify-between">
        <div className="flex gap-3">
          <img className="h-10 w-10 rounded-full" src={channelData?.snippet?.thumbnails?.medium?.url} alt="tumbnail" />
          <div className="flex flex-col">
            <span
              className="text-md text-black font-semibold"
              title={channelTitle}
            >
              {channelTitle}
            </span>
            <span className="text-[13px] font-semibold text-gray-800">{formatViewCount(channelData?.statistics?.subscriberCount)} Subscribers</span>
          </div>
          <button className="bg-black text-white px-4 font-semibold pb-[3px] rounded-r-full rounded-l-full text-sm hover:bg-[rgba(0,0,0,0.85)]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitles;
