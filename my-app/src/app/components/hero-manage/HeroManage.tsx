"use client";

import Image from "next/image";
import React from "react";
import Pulsante from "../Btn";
import translations from "@/app/translations";

interface HeroManageProps {
  isBeatMaker: boolean;
  language: string;
}

const HeroManage = ({ isBeatMaker = true, language }: HeroManageProps) => {
  const t: any = translations;
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
    <div className="bg-black flex flex-col gap-y-8 py-28 ">
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
          {isBeatMaker
            ? t[language].heroManage.removeBeat
            : t[language].heroManage.removeSong}
        </div>
        <div className="place-self-center">
          {/* <Pulsante content="Remove" color="#00247d" /> */}
          <button
            className={`flex justify-center border-[#00247d] bg-[#00247d] p-3 px-5 rounded-full w-[${buttonWidth}px]`}
            onClick={() => {
              RemoveSong();
            }}
          >
            {t[language].heroManage.remove}
          </button>
          {/* heroManage: {
      removeSong: "Remove a song from your projects",
      removeBeat: "Remove a beat from your projects",
      remove: "remove",
      changeVisibility: "Change the visibility of your project",
      visibility: "Visibility",
      editSong: "Edit a Song from one of your projects",
      edit: "Edit",
    }, */}
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
          {t[language].heroManage.changeVisibility}
        </div>
        <div className="place-self-center">
          {/* <Pulsante content="Remove" color="#00247d" /> */}
          <button
            className={`flex justify-center border-[#00247d] bg-[#00247d] p-3 px-5 rounded-full w-[${buttonWidth}px]`}
            onClick={() => {
              ModifySongVisibility();
            }}
          >
            {t[language].heroManage.visibility}
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
          {isBeatMaker
            ? t[language].heroManage.editBeat
            : t[language].heroManage.editSong}
        </div>
        <div className="place-self-center">
          {/* <Pulsante content="Remove" color="#00247d" /> */}
          <button
            className={`flex justify-center border-[#00247d] bg-[#00247d] p-3 px-5 rounded-full w-[${buttonWidth}px]`}
            onClick={() => {
              EditSong();
            }}
          >
            {t[language].heroManage.edit}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroManage;
