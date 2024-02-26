import React from "react";
import Button from "./Button";
import { Link, NavLink } from "react-router-dom";

const ButtonList = () => {
  // const list = ["All", "Gaming", "Music", "Cricket", "Gaming shows", "Gaming shows", "Lofi",]
  return (
    <div className=" mt-5 flex gap-8">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `${isActive ? "bg-black text-white rounded-lg hover:bg-black" : ""} `
        }
      >
        <button className='px-3 py-1 font-semibold text-nowrap'>All</button>
      </NavLink>
      <NavLink
        to={"/live"}
        className={({ isActive }) =>
          `${isActive ? "bg-black text-white rounded-lg hover:bg-black" : ""} `
        }
      >
        <Button name="Live" />
      </NavLink>
      <Button name="Gaming" />
      <Button name="Music" />
      <Button name="Cricket" />
      <Button name="Gaming shows" />
      <Button name="Gaming shows" />
    </div>
  );
};

export default ButtonList;
