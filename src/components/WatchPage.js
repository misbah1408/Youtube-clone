import React, { useEffect } from "react";
import WatchPageContent from "./WatchPageContent";
import ButtonList from "./ButtonList";
import { useSelector } from "react-redux";
import RecomendedVideo from "./RecomendedVideo";

const WatchPage = ({ setProgress }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const bgToggle = !isMenuOpen ? "bg-white" : "bg-[rgba(0,0,0,0.5)]";
  useEffect(() => {
    setProgress(30);
    setTimeout(() => {
      setProgress(100);
    }, 2000);
  }, []);

  return (
    <div className={`${bgToggle}`}>
      <div className={`flex gap-4 mt-[3.5rem] ml-[5.3rem] `}>
        <WatchPageContent setProgress={setProgress} />
        <div className="ml-5 w-[426px] flex flex-col ">
          <div className="overflow-scroll overflow-y-hidden no-scrollbar">
            <ButtonList />
          </div>
          <RecomendedVideo />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
