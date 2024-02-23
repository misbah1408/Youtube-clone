import React, { useEffect, useState } from "react";
import { closeMenu } from "./utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import LiveChat from "./LiveChat";
import DummyLive from "./DummyLive";
import { addMesseges } from "./utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "./utils/Helper";

const LiveContainer = () => {
  const [liveMessege, setLiveMessege] = useState("")
  const chatMesseges = useSelector((store) => store.chat.messeges);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  useEffect(() => {
    const i = setInterval(() => {

      dispatch(
        addMesseges({
          name: generateRandomName(),
          messege: generateRandomMessage(),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);
  return (
    <div className="mt-14 ml-10">
      <div className="flex ml-12 mt-[25px] gap-5">
        <DummyLive />
        <div className="w-[400px] rounded-xl border-[0.2px] border-gray-300 bg-gray-100">
          <div className="h-14 flex items-center justify-between border-b-2 border-gray-300">
            <p className="text-lg font-semibold px-5 ">Live Chat</p>
            <i className="fa-solid fa-ellipsis text-lg px-5"></i>
          </div>
          <div className="flex flex-col-reverse justify-start overflow-y-scroll h-[27.5rem] border-b-2 border-gray-300">
            {chatMesseges.map((msg, i) => (
              <LiveChat key={i} name={msg.name} messege={msg.messege} />
            ))}
          </div>
          <div className="h-[56px] w-full flex">
            <form className="h-[56px] w-full flex px-3 items-center gap-4 justify-between" 
            onSubmit={(e) => {e.preventDefault();
              dispatch(addMesseges({
                name: "Misbah",
                messege: liveMessege,
              }, setLiveMessege("")
              ))}
            }>
              <div className="h-9 w-16">
                <p className="h-7 w-7 bg-gray-300 rounded-full"></p>
              </div>
              <input className="h-9 w-[17rem] px-3 text-[14px] outline-none border-b-2 border-gray-300" value={liveMessege}
              onChange={(e)=>{
                setLiveMessege(e.target.value);
                
              }}
              type="text" placeholder="Chat"/>
              <button><i className="fa-regular fa-paper-plane pr-5"></i></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveContainer;
