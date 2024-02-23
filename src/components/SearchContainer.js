import React, { useEffect } from 'react'
import ChannelSearch from './ChannelSearch'
import VideoSearch from './VideoSearch'
import { useSelector } from 'react-redux'

const SearchContainer = () => {
    const searchResult = useSelector((store)=>store.searchApp.search);

    console.log(searchResult)
    useEffect(()=>{
        fetchData()
    },[searchResult])
    const fetchData = async()=>{
        if (searchResult) return
        const data = await fetch ("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+ searchResult[searchResult.length-1] +"&key="+process.env.REACT_APP_YT_API_KEY);
        const json = await data.json()
        const channels =json?.items?.filter((c) => c.id?.kind === "youtube#channel");
        console.log(channels)
    }
    if (!searchResult) return null;
  return (
    <div className='mt-12'>
      <ChannelSearch/>
      <VideoSearch/>
    </div>
  )
}

export default SearchContainer
