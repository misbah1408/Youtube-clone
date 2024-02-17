import React from "react";
import WatchPageContent from "./WatchPageContent";
import ButtonList from "./ButtonList";
import { useSelector } from "react-redux";
import RecomendedVideo from "./RecomendedVideo";

const WatchPage = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const bgToggle = !isMenuOpen ? 'bg-white' : 'bg-[rgba(0,0,0,0.5)]';

 
  return (
    <div className={`flex gap-4 mt-[3.5rem] ml-[5.3rem] ${bgToggle}`}>
      <WatchPageContent/>
      <div className="ml-5 w-[426px] flex flex-col ">
      <div className="overflow-scroll overflow-y-hidden no-scrollbar">
      <ButtonList/>
      </div>
      <RecomendedVideo/>
    </div>
    </div>
  );
};

export default WatchPage;
