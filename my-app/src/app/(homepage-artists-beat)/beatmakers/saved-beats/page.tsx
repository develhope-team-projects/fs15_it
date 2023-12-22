"use client";

import DenseAppBar from "@/app/components/navbar-multisection/NavbarMulti";
import { useLanguage } from "@/app/components/LanguageContext";
import translations from "@/app/translations";
import { useCardContext } from "../../../components/CardContext";
import Image from "next/image";

export default function SavedBeats() {
  const { language } = useLanguage();
  const t: any = translations;

  const { cardInfo } = useCardContext();

  return (
    <>
      <DenseAppBar
        content={t[language].navbarMulti.savedBeats}
        link="/beatmakers"
      />

      <div className="flex flex-wrap bg-[#0c111c]">
        {cardInfo.map((info, index) => (
          <div className="bg-[#0c111c] p-6">
            <div
              key={index}
              className="bg-white border rounded-lg overflow-hidden shadow-md p-3 flex flex-col items-center text-center w-60 h-80 ml-11"
            >
              <Image className="mb-1" src={info.Image} alt=""></Image>
              <div className="flex-grow w-full">
                <h3 className="text-xl font-bold mb-1 ">{info.artist}</h3>
                <p className="text-gray-600">{info.title}</p>
              </div>
              <div className="flex justify-end w-full">
                <Image src={info.imageHeart} alt=""></Image>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
