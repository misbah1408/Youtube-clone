import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatTimeAgo, formatViewCount } from "./utils/Functions";
import NestedComments from "./NestedComments";
import { toggleReply } from "./utils/appSlice";
import { useDispatch, useSelector } from "react-redux";

const Comments = ({ commentMap }) => {
  const [nestedComments, setNestedComments] = useState([]);
  const isReplyOpen = useSelector((store) => store.app.isReplyOpen);
  const rotate = !isReplyOpen ? "down" : "up";
  const dispatch = useDispatch();
  const handleReply = () => {
    dispatch(toggleReply());
  };

  useEffect(() => {
    if (commentMap && commentMap.replies && commentMap.replies.comments) {
      console.log(commentMap.replies.comments);
      setNestedComments(commentMap.replies.comments);
    }
  }, [commentMap]);

  if (!commentMap) return null;
  const { snippet } = commentMap;
  const {
    authorProfileImageUrl: profilePicture,
    authorChannelUrl,
    textOriginal: displayComment,
    likeCount,
    publishedAt,
    authorDisplayName,
  } = snippet?.topLevelComment?.snippet || {};

  var totalReplyCount = snippet?.totalReplyCount;

  return (
    <div className="flex mt-6 w-[853.33px] text-wrap">
      <div className="flex">
        <div className={`w-9 `}>
          <Link to={authorChannelUrl}>
            <img
              className={`w-9 rounded-full`}
              src={profilePicture}
              alt="profilePicture"
            />
          </Link>
        </div>
        </div>
        <div className="flex flex-col align-middle ml-5 gap-1">
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
        
        {totalReplyCount === 0 ? null : (
          <div>
          <div className="flex flex-col">
            <div
              onClick={handleReply}
              className="ml-6 mt-1 flex items-center gap-1 hover:bg-blue-100 px-5 w-max p-2 rounded-l-full rounded-r-full text-blue-600"
            >
              <i className={`fa-solid fa-caret-${rotate} text-[13px]`}></i>
              <span className="ml-1 text-[13px] font-semibold">
                {formatViewCount(totalReplyCount)}
              </span>
              <span className="text-[13px] font-semibold">Replies</span>
            </div>
            <div>
              <div className="ml-5 -mt-5">
                {nestedComments.map((comments) => (
                  <NestedComments key={comments.id} replies={comments} />
                ))}
              </div>
            </div>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
