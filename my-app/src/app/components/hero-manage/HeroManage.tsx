"use client";

import Image from "next/image";
import React from "react";
import Pulsante from "../Pulsante";

const HeroManage = ({ isBeatMaker = true }) => {
  let iconSize = 40;
  let buttonWidth = 100;

  let mediaType = isBeatMaker ? "Beat" : "Song";
  const RemoveSong = () => {
    console.log("Song removed");
  };
  const ModifySongVisibility = () => {
    console.log("Visibility modified");
  };
  const EditSong = () => {
    console.log("Song edited");
  };
  return (
    <div className="bg-black flex flex-col gap-y-8 py-10 ">
      <div className="grid grid-cols-3 text-white">
        <div className="place-self-center">
          <Image
            src="/assets/img/hero-manage/bin.svg"
            alt="Mockup picture of a macbook"
            width={iconSize}
            height={iconSize}
          />
        </div>
        <div className="flex justify-end items-center">
          Remove a {mediaType} from your projects
        </div>
        <div className="place-self-center">
          {/* <Pulsante content="Remove" color="#00247d" /> */}
          <button
            className={`flex justify-center border-[#00247d] bg-[#00247d] p-3 px-5 rounded-full w-[${buttonWidth}px]`}
            onClick={() => {
              RemoveSong();
            }}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 text-white">
        <div className="place-self-center">
          <Image
            src="/assets/img/hero-manage/lock2.svg"
            alt="Mockup picture of a macbook"
            width={iconSize}
            height={iconSize}
          />
        </div>
        <div className="flex justify-end items-center">
          Change the visibility of your project
        </div>
        <div className="place-self-center">
          {/* <Pulsante content="Remove" color="#00247d" /> */}
          <button
            className={`flex justify-center border-[#00247d] bg-[#00247d] p-3 px-5 rounded-full w-[${buttonWidth}px]`}
            onClick={() => {
              ModifySongVisibility();
            }}
          >
            Visibility
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 text-white">
        <div className="place-self-center">
          <Image
            src="/assets/img/hero-manage/gears.svg"
            alt="Mockup picture of a macbook"
            width={iconSize}
            height={iconSize}
          />
        </div>
        <div className="flex justify-end items-center">
          Edit a {mediaType} from one of your projects
        </div>
        <div className="place-self-center">
          {/* <Pulsante content="Remove" color="#00247d" /> */}
          <button
            className={`flex justify-center border-[#00247d] bg-[#00247d] p-3 px-5 rounded-full w-[${buttonWidth}px]`}
            onClick={() => {
              EditSong();
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroManage;
