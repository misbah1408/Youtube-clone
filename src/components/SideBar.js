import { useSelector } from "react-redux";
import { HOME_URL, SIDEBAR_LI, YT_SHORTS, YT_SUBS } from "./utils/Constants";
import React from "react";
// import SecondarySideBar from './SecondarySideBar';
import { NavLink }  from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="fixed left-0 top-[3.5rem] bg-white  w-[15%] h-[100%] px-3 flex flex-col gap-5 z-50">
      <ul className="py-3 flex flex-col leading-[1.5rem] border-b-2 cursor-pointer">
        <NavLink to="/" className={({isActive})=>`${isActive?"bg-gray-100 rounded-lg font-medium" :"bg-white" }`}>
          <li className="flex items-center gap-4  text-sm hover:bg-gray-100 rounded-lg " title="Home">
            <span className="h-10 w-10 flex justify-center items-center ">
              <img
                className="h-[19px] w-[20px]"
                src={HOME_URL}
                alt="yt-shorts"
              />
            </span>
            Home
          </li>
          </NavLink>
          <NavLink to="/subscription" className={({isActive})=>`${isActive?"bg-gray-100 rounded-lg font-medium":"bg-white" }`}>
        <li className="flex items-center gap-4 text-sm hover:bg-gray-100 rounded-lg " title="Shorts">
          <img className="h-10 brightness-75" src={YT_SHORTS} alt="yt-shorts" /> Shorts
        </li>
        </NavLink>
          <NavLink to="/shorts" className={({isActive})=>`${isActive?"bg-gray-100 rounded-lg font-medium":"bg-white" }`}>
        <li className="flex items-center gap-4 text-sm hover:bg-gray-100 rounded-lg " title="Subscriptions">
          <span className="h-10 w-10 flex justify-center items-center ">
            <img className="h-[19px] w-[20px]" src={YT_SUBS} alt="yt-shorts" />
          </span>
          Subscriptions
        </li>
          </NavLink>
      </ul>

      <ul className="py-5 flex flex-col leading-[1.5rem] border-b-2 cursor-pointer">
        <span className="font-semibold">
          You <i className="fa-solid fa-chevron-right text-[70%]"></i>{" "}
        </span>
        <li className={SIDEBAR_LI}>Your channel</li>
        <li className={SIDEBAR_LI}>Playlists</li>
        <li className={SIDEBAR_LI}>History</li>
        <li className={SIDEBAR_LI}>Your videos</li>
        <li className={SIDEBAR_LI}>Watch later</li>
        <li className={SIDEBAR_LI}>Your clips</li>
      </ul>
    </div>
  );
};

export default SideBar;
