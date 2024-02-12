import React from 'react'
import { YT_LOGO } from './utils/Constants'

const Head = () => {
  return (
    <div className='h-14 flex justify-between items-center'>
      <div className='flex ml-10 items-center gap-5'>
        <span><i className="fa-solid fa-bars text-xl"></i></span>
        <img className='mix-blend-color-burn h-16' src={YT_LOGO}  alt="" />
      </div>
      <div className='flex items-center gap-5'>
        <div className='flex items-center'>
            <input className='border-[rgba(142,131,131,0.6)] border-[1px] h-10 w-[500px] pl-5 pb- rounded-l-full ' type="text" placeholder='Search'/>
            <span className='h-10 w-16  border-[rgba(142,131,131,0.6)] border-[1px] pl-5 rounded-r-full border-l-0'><i class="fa-solid fa-magnifying-glass text-xl mt-[6px] text-gray-500"></i></span>
        </div>
        <i class="fa-solid fa-microphone text-xl"></i>
      </div>
      <div className='flex items-center mr-10 gap-5'>
        <i class="fa-regular fa-bell text-xl"></i>
        <i class="fa-regular fa-user text-xl"></i>
      </div>
    </div>
  )
}

export default Head
