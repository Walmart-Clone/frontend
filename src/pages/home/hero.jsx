import React from "react";
import wallpaper from "../assets/wallpaper.jpg";
import scooter from "../assets/scooter.jpeg";
import pool from "../assets/pool.jpeg";
import grill from "../assets/grill.jpeg";
import headphones from "../assets/headphones.jpg";
export const hero = () => {
  return (
    <div className="flex item-center">
      <div className="w-full h-full flex rounded-[1.8rem]">
        <img
          src={headphones}
          alt=""
          className="objects-cover w-full h-[20rem] p-4 rounded-[1.8rem] md:w-[30vw]"
        />
        <div>
          <p>Tech from $129</p>
          <p>Shop now</p>
        </div>
      </div>
      <div className="h-[50rem] flex rounded-[1.8rem] md:w-[70vw] ">
        <img
          src={wallpaper}
          alt=""
          className="objects-cover w-full h-full p-4 rounded-[1.8rem]"
        />
        <div>
          <p>Memorial Day prep</p>
          <p>Summer savings</p>
          <p>Shop all</p>
          <p>Shop fashion</p>
        </div>
      </div>

      <div className="w-full h-full flex rounded-[1.8rem]">
        <img
          src={scooter}
          alt=""
          className="objects-cover w-full h-[20rem] p-4 rounded-[1.8rem] md:w-[30vw]"
        />
        <div>
          <p>Ride on from $30</p>
        </div>
      </div>

      <div className="w-full h-full flex rounded-[1.8rem]">
        <img
          src={pool}
          alt=""
          className="objects-cover w-full h-[30rem] p-4 rounded-[1.8rem] md:w-[30vw]"
        />
        <div>
          <p>Go with the float</p>
          <p>Shop pools</p>
        </div>
      </div>

      <div className="w-full h-full flex rounded-[1.8rem]">
        <img
          src={grill}
          alt=""
          className="objects-cover w-full h-[25rem] p-4 rounded-[1.8rem] md:w-[30vw]"
        />
        <div>
          <p>Fire it up from $267</p>
          <p>Shop grills</p>
        </div>
      </div>
    </div>
  );
};
export default hero;
