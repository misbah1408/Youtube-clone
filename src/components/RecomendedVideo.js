import React, { useEffect, useState } from 'react'
import { RECOMMENDED_API } from './utils/Constants'
import RecomendedVideoList from './RecomendedVideoList'
import { Link } from 'react-router-dom'

const RecomendedVideo = () => {
    const [recommeded, setRecommended] = useState([])
    useEffect(()=>{
        recommendedFetch()
    },[])
    const recommendedFetch = async() =>{
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&videoCategoryId=24&key=${process.env.REACT_APP_YT_API_KEY}`)
        const json = await data.json()
        setRecommended(json?.items)
    }
  return (
    <div>
      {recommeded.map((v)=> <Link to ={"/watch?v=" + v?.id} key={v.id} ><RecomendedVideoList data={v} /></Link>)}
    </div>
  )
}

export default RecomendedVideo
