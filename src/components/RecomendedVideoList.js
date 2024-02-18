import React from 'react';
import { Link } from 'react-router-dom';
import { formatTimeAgo, formatViewCount, formatYouTubeDuration } from './utils/Functions';


const RecomendedVideoList = ({ data }) => {
     
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
          {formatViewCount(viewCount)} views · {formatTimeAgo(publishedAt)}
        </span>
      </div>
    </div>
  );
};

export default RecomendedVideoList;
