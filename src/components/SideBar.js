import { useSelector } from 'react-redux'
import {HOME_URL, YT_SHORTS, YT_SUBS} from './utils/Constants'
import React from 'react'
// import SecondarySideBar from './SecondarySideBar';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <div className='fixed left-0 top-[3.5rem] bg-white  w-[15%] h-[100%] px-7 flex flex-col gap-5 z-50'>
      <ul className='py-5 flex flex-col leading-[1.5rem] border-b-2 cursor-pointer'>
      <Link to="/"><li className='flex items-center py-2 px-2'> <img className='h-5 w-6 mr-[-0.3rem]' src={HOME_URL} alt="home"  /> Home</li></Link>
        <li className='flex items-center py-2 px-2'> <img className='w-12 ' src='/utils/Shorts.png' alt="yt-shorts" /> Shorts</li>
        <li className='flex items-center py-2 px-2'> <img className='h-6' src={YT_SUBS} alt="yt-shorts" /> Subscriptions</li>
      </ul>

      <ul className='py-5 flex flex-col gap-4 leading-[1.5rem] border-b-2 cursor-pointer'><span className='font-semibold'>You <i className="fa-solid fa-chevron-right text-[70%]"></i> </span>
        <li>Your chennal</li>
        <li>History</li>
        <li>Playlists</li>
        <li>Your videos</li>
        <li>Watch later</li>
        <li>Your clips</li>
      </ul>
    </div>
  )
}

export default SideBar
