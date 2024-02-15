import React from 'react'
import { HOME_URL, YT_SHORTS, YT_SUBS, YT_YOU } from './utils/Constants'
import { Link } from 'react-router-dom'

const SecondarySideBar = () => {
  return (
    <div className='w-[85px] ml-[px]'>
        <ul className='flex flex-col justify-center gap-3 mt-5 cursor-pointer'>
            <Link to="/"><li className='flex flex-col items-center gap-2 text-[10px] font-semibold'> <img className='h-5 ' src={HOME_URL} alt="yt-shorts" /> Home</li></Link>
            <li className='flex flex-col items-center gap-2 text-[10px] font-semibold'> <img className='h-7 ' src={YT_SHORTS} alt="yt-shorts" /> Shorts</li>
            <li className='flex flex-col items-center gap-2 text-[10px] font-semibold'> <img className='h-5' src={YT_SUBS} alt="yt-shorts" /> Subscriptions</li>
            <li className='flex flex-col items-center gap-2 text-[10px] font-semibold'> <img className='h-6' src={YT_YOU} alt="yt-shorts" /> You</li>
        </ul>
    </div>
  )
}

export default SecondarySideBar