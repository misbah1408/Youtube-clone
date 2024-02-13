import React from "react";
import { UPLOAD_URL, YT_LOGO } from "./utils/Constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const handleToggle = () =>{
    dispatch(toggleMenu())
  }
  return (
    <div className="h-14 flex justify-between items-center">
      <div className="flex ml-8 items-center gap-5">
        <span>
          <i onClick={handleToggle} className="fa-solid fa-bars text-xl cursor-pointer"></i>
        </span>
        <span className="relative">
          <img className="mix-blend-color-burn h-14" src={YT_LOGO} alt="" />
          <sub className="absolute mb-10 ml-[100px] ">IN</sub>
        </span>
      </div>
      <div className="flex items-center gap-5 mr-2">
        <div className="flex items-center">
          <input
            className="border-[rgba(142,131,131,0.4)] border-[0.3px] h-10 w-[540px] pl-5 pb-1 rounded-l-full outline-[rgba(53,54,185,0.4)]"
            type="text"
            placeholder="Search"
          />
          <span className="h-10 w-16  border-[rgba(142,131,131,0.4)] border-[1px] pl-5 rounded-r-full border-l-0">
            <i className="fa-solid fa-magnifying-glass text-xl mt-[6px] text-gray-500"></i>
          </span>
        </div>
        <i className="fa-solid fa-microphone text-xl ml-3"></i>
      </div>
      <div className="flex items-center mr-14 gap-9">
        <img className="h-5" src={UPLOAD_URL} alt="" />
        <i className="fa-regular fa-bell text-xl"></i>
        <i className="fa-regular fa-user text-xl"></i>
      </div>
    </div>
  );
};

export default Head;