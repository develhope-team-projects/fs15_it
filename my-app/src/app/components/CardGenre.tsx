import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";

interface CardGenre {
  color: string;
  content: string;
}

const CardGenre: React.FC<CardGenre> = ({ content = "Default", color }) => (
  <div
    className={`border border-white flex-col ${color} p-4 rounded-3xl shadow-[1px_2px_10px_1px] shadow-gray-400 max-sm:h-28 h-44 max-sm:w-32 w-56 text-center justify-center items-center hover:bg-slate-500  transition duration-300 ease-in-out`}
  >
    <h1 className="text-white mt-14 text-xl font-bold">{content}</h1>
  </div>
);

export default CardGenre;
