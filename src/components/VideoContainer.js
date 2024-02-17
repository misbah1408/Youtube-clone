import React, { useEffect, useState } from 'react'
import { YT_API } from './utils/Constants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos, setVideos] = useState(null);
    useEffect(()=>{
        getVideos();
    },[]);

    const getVideos = async() =>{
        const data = await fetch (YT_API);
        const json = await data.json();
        setVideos(json?.items)
    }
    if (!videos) return null;
  return (
    <div className='relative z-10 flex flex-wrap gap-4'>
      {videos?.map((video)=> 
        <Link to={"watch?v=" + video?.id} key={video?.id}><VideoCard  info={video} /></Link>
      )}
    </div>
  )
}

export default VideoContainer
