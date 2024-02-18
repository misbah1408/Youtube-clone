import React from 'react'
import { formatTimeAgo, formatViewCount } from './utils/Functions';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NestedComments = ({replies}) => {
    const isReplyOpen = useSelector((store)=>store.app.isReplyOpen);
    if(!isReplyOpen) return null;
    console.log(replies)
    const { snippet } = replies;
    const {
        authorProfileImageUrl: profilePicture,
        authorChannelUrl,
        textOriginal: displayComment,
        likeCount,
        publishedAt,
        authorDisplayName,
      } = snippet || {};
    if(!replies) return null;
  return (
    <div className=''>
      <div className="flex mt-6 w-[853.33px] text-wrap ">
      <div className="w-7 ">
        <Link to={authorChannelUrl}>
          <img
            className="w-6 rounded-full"
            src={profilePicture}
            alt="profilePicture"
          />
        </Link>
      </div>
      <div className="flex flex-col align-middle ml-5 ">
        <div className="flex gap-3 items-center">
          <Link to={authorChannelUrl}>
            <p className="text-sm font-semibold">{authorDisplayName}</p>
          </Link>
          <span className="text-[12px] text-gray-500">
            {formatTimeAgo(publishedAt)}
          </span>
        </div>
        <div className="mt-0 w-[757.5px]">
          <p className="text-wrap text-[15px]">{displayComment}</p>
        </div>
        <div className="mt-3 flex gap-3 items-center">
          <p className="flex gap-1 items-center">
            <img
              className="h-5"
              src="https://lh3.googleusercontent.com/v3qgnUEYaccG4Io_1X4EAjaWSOJ_Fckv-HuDhHHa4A-Yc9d9Y1pRRAQ_KK4lNNEk_2TF-CRLKhvTmzuwawe1vk7sbQ=s60"
              alt=""
            />
            <span className="text-[12px]">{formatViewCount(likeCount)}</span>
          </p>
          <img
            className="h-5 rotate-180"
            src="https://lh3.googleusercontent.com/v3qgnUEYaccG4Io_1X4EAjaWSOJ_Fckv-HuDhHHa4A-Yc9d9Y1pRRAQ_KK4lNNEk_2TF-CRLKhvTmzuwawe1vk7sbQ=s60"
            alt=""
          />
          <span className="text-[13px] font-semibold ml-3">Reply</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NestedComments
