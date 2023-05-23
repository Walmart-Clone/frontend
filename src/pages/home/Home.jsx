import React from "react";
import wallpaper from "./wallpaper.jpg";
import scooter from "./scooter.jpg";
import pool from "./pool.jpg";
import grill from "./grill.jpg";
import headphones from "./headphones.jpg";

function Home() {
  return (
    <div className="flex items-center">
      <div className="h-[35rem] flex rounded-[1.8rem] md:w-[70vw] ">
        <img
          src={wallpaper}
          alt=""
          className="object-cover w-full h-full p-4 rounded-[1.8rem]"
        />
      </div>

      <div className="hidden md:flex flex-1 h-[35rem] rounded-[1.8rem] relative">
        <img
          src={headphones}
          alt=""
          className="absolute object-cover top-32 rounded-[1.8rem]"
        />
        <div className="p-4 flex flex-col justify-between">
          <p className="font-bold text-[20px]">Special Deals</p>
          <p className="font-bold text-[20px]">Buy now</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
