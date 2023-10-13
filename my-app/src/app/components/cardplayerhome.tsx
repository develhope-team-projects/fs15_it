import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";

interface CardPlayerHomeProps {
  content: string;
  cover: string;
  slider: number | string;
}

const CardPlayerHome: React.FC<CardPlayerHomeProps> = ({
  content = "Default",
  cover,
  slider,
}) => (
  <div className="border border-white flex-col bg-gray-200 p-4 rounded-3xl shadow-[1px_2px_10px_1px] shadow-gray-500 h-[310px] w-52 justify-center hover:bg-white hover:shadow-gray-600 transition duration-300 ease-in-out">
    <Image src={cover} alt="" className="p-3" width="170" height="170" />

    <Typography className="text-black pb-3 text-center">{content}</Typography>
    <div className="pb-1 pt-1">
      <div className="h-2 w-full bg-slate-400 rounded-lg flex items-center shadow-[1px_2px_1px_1px] shadow-slate-300">
        <div className={`h-2 w-${slider} bg-slate-700 rounded-lg`}></div>
      </div>
    </div>

    <div className="gap-4 flex items-center justify-between pr-3 pl-3 pt-2">
      <button className="w-8 h-8 rounded-full bg-gray-200 shadow-[3px_3px_1px_1px] shadow-slate-400 ring-1 opacity-40 ring-white text-white flex justify-center items-center hover:bg-slate-400 transition duration-200 ease-in-out hover:shadow-[1px_1px_9px_1px] hover:shadow-slate-500 hover:ring-slate-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <path d="M4 2v20h-2v-20h2zm18 0l-16 10 16 10v-20z" />
        </svg>
      </button>
      <button className="w-11 h-11 rounded-full bg-gray-200 shadow-[3px_3px_1px_1px] shadow-slate-400 ring-1 opacity-40 ring-white text-white flex justify-center hover:bg-slate-400 transition duration-200 ease-in-out hover:shadow-[1px_1px_10px_1px] hover:shadow-slate-500 hover:ring-slate-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mt-3 ml-1"
          width="22"
          height="22"
          viewBox="0 0 24 24"
        >
          <path d="M2 24v-24l20 12-20 12z" />
        </svg>
      </button>
      <button className="w-8 h-8 rounded-full bg-gray-200 shadow-[3px_3px_1px_1px] shadow-slate-400 ring-1 opacity-40 ring-white text-white flex justify-center items-center hover:bg-slate-400 transition duration-200 ease-in-out hover:shadow-[1px_1px_10px_1px] hover:shadow-slate-500 hover:ring-slate-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <path d="M20 22v-20h2v20h-2zm-18 0l16-10-16-10v20z" />
        </svg>
      </button>
    </div>
  </div>
);

export default CardPlayerHome;
