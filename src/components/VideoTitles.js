import React, { useEffect, useState } from "react";
import { formatViewCount } from "./utils/Functions";

const VideoTitles = ({ info }) => {
  const [channelData, setChannelData] = useState(null);
  console.log(info);

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

  const { snippet, statistics } = info;
  const { title, channelTitle } = snippet;
  const viewCount = statistics.likeCount;

  return (
    <div className="mt-3">
      <span className="h-[25px] text-lg font-bold overflow-hidden text-ellipsis">
        {title}
      </span>
      <div className="h-14 flex mt-1 items-center justify-between">
        <div className="flex gap-3">
          <img
            className="h-10 w-10 rounded-full"
            src={channelData?.snippet?.thumbnails?.medium?.url}
            alt="tumbnail"
          />
          <div className="flex flex-col">
            <span
              className="text-md text-black font-semibold"
              title={channelTitle}
            >
              {channelTitle}
            </span>
            <span className="text-[13px] font-semibold text-gray-800">
              {formatViewCount(channelData?.statistics?.subscriberCount)}{" "}
              Subscribers
            </span>
          </div>
          <button className="bg-black text-white px-4 font-semibold pb-[3px] rounded-r-full rounded-l-full text-sm hover:bg-[rgba(0,0,0,0.85)]">
            Subscribe
          </button>
        </div>
        <div className="flex items-center gap-2 mr-2 cursor-pointer">
          <div className="hover:bg-gray-200 py-3 px-4 rounded-r-full rounded-l-full flex  gap-2 ">
            <div className=" flex items-center gap-2 border-r-2 border-gray-300 ">
              <img
                className="h-6"
                src="https://lh3.googleusercontent.com/v3qgnUEYaccG4Io_1X4EAjaWSOJ_Fckv-HuDhHHa4A-Yc9d9Y1pRRAQ_KK4lNNEk_2TF-CRLKhvTmzuwawe1vk7sbQ=s60"
                alt=""
              />
              <span className="text-[16px] font-semibold pr-3">
                {formatViewCount(viewCount)}
              </span>
            </div>
            <img
              className="h-6 rotate-180 "
              src="https://lh3.googleusercontent.com/v3qgnUEYaccG4Io_1X4EAjaWSOJ_Fckv-HuDhHHa4A-Yc9d9Y1pRRAQ_KK4lNNEk_2TF-CRLKhvTmzuwawe1vk7sbQ=s60"
              alt=""
            />
          </div>
          <span className="flex gap-2 items-center hover:bg-gray-200 py-3 px-4 rounded-r-full rounded-l-full">
            <img
              className="h-7 w-7"
              src="https://img.icons8.com/ios/50/forward-arrow.png"
              alt="forward-arrow"
            />
            <span className="text-[15px] font-semibold">Share</span>
          </span>
          <span className="flex items-center gap-2 hover:bg-gray-200 py-3 px-4 rounded-r-full rounded-l-full">
            <i className="fa-solid fa-arrow-down text-[20px] text-gray-800 border-b-2 border-gray-800"></i>
            <span className="font-semibold">Download</span>
          </span>
          <i className="fa-solid fa-ellipsis text-lg hover:bg-gray-200 py-1 px-2  rounded-full"></i>
        </div>
      </div>
    </div>
  );
};

export default VideoTitles;
