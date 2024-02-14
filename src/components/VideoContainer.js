import React, { useEffect, useState } from 'react'
import { YT_API } from './utils/Constants'
import VideoCard from './VideoCard';

const VideoContainer = () => {
    const [videos, setVideos] = useState(null);
    useEffect(()=>{
        getVideos();
    },[]);

    const getVideos = async() =>{
        const data = await fetch (YT_API);
        const json = await data.json();
        console.log(json)
        setVideos(json?.items)
    }
    if (!videos) return null;
  return (
    <div className='flex flex-wrap'>
      {videos?.map((video)=> <VideoCard key={video?.id} info={video} />)}
      {videos?.map((video)=> <VideoCard key={video?.id} info={video} />)}
      {videos?.map((video)=> <VideoCard key={video?.id} info={video} />)}
      {videos?.map((video)=> <VideoCard key={video?.id} info={video} />)}
      {videos?.map((video)=> <VideoCard key={video?.id} info={video} />)}
      {videos?.map((video)=> <VideoCard key={video?.id} info={video} />)}
      {videos?.map((video)=> <VideoCard key={video?.id} info={video} />)}
      {videos?.map((video)=> <VideoCard key={video?.id} info={video} />)}
      {videos?.map((video)=> <VideoCard key={video?.id} info={video} />)}
      {videos?.map((video)=> <VideoCard key={video?.id} info={video} />)}
      {videos?.map((video)=> <VideoCard key={video?.id} info={video} />)}
      {videos?.map((video)=> <VideoCard key={video?.id} info={video} />)}
    </div>
  )
}

export default VideoContainer
