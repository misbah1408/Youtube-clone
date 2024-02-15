import React from "react";
import WatchPageContent from "./WatchPageContent";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const WatchPage = () => {
 
  return (
    <div className="flex gap-4 ">
      <WatchPageContent/>
      <div className="ml-5 w-[426px] flex flex-col ">
      <div className="overflow-scroll overflow-y-hidden no-scrollbar">
      <ButtonList/>
      </div>
      <VideoContainer/>
    </div>
    </div>
  );
};

export default WatchPage;
