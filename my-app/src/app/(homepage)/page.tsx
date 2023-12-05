"use client";

import NewsLetterSection from "../components/NewsLetterSection";
import { useLanguage } from "../components/LanguageContext";
import translations from "../translations";

export default function Home() {
  const { language } = useLanguage();
  const t: any = translations;

  return (
    <div className="m-0 p-0 box-border ">
      <div className=" text-white font-body h-screen text-default m-0 w-full">
        <div className="background-image absolute h-full w-full m-0 p-0 -z-10">
          <img
            src="/background top image.jpg"
            alt=""
            height=""
            width=""
            className="w-full h-full m-0 p-0 object-cover"
          ></img>
        </div>

        {/* TITLES */}
        <div className="section-homepage w-1/2  p-8">
          <div className="title-homepage">
            <h1 className="text-header">{t[language].hero.header}</h1>
            <h2 className="text-sub-header mt-7">
              {t[language].hero.subHeader}
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-t from-[#0c111c] to-black">
        <NewsLetterSection language={language} />
      </div>
    </div>
  );
}
