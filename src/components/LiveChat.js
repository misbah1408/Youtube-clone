import React from "react";

const LiveChat = ({ name, messege }) => {
  return (
    <div className="px-5 py-2 flex gap-2 items-start">
      <div className="h-7 w-9">
      <p className="h-7 w-7 bg-gray-300 rounded-full"></p>
      </div>
      <p className="text-sm"><span className="text-sm text-gray-600 font-semibold text-wrap">{name} </span>{messege}</p>
    </div>
  );
};

export default LiveChat;
