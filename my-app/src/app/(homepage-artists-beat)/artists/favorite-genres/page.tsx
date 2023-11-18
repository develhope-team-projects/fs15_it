"use client";

import CardGenre from "@/app/components/CardGenre";
import { useLanguage } from "@/app/components/LanguageContext";
import DenseAppBar from "@/app/components/navbar-multisection/NavbarMulti";
import translations from "@/app/translations";

const CardGenres = [
  { content: "Pop", color: "bg-green-500" },
  { content: "Rock", color: "bg-red-500" },
  { content: "Rap", color: "bg-yellow-500" },
  { content: "Country", color: "bg-purple-500" },
  { content: "Indie", color: "bg-violet-500" },
  { content: "Lo-fi", color: "bg-gray-500" },
];

export default function FavoriteGenres() {
  const { language } = useLanguage();
  const t: any = translations;

  return (
    <>
      <div className="bg-gradient-to-b from-black to-[#0c111c]">
        <DenseAppBar
          content={t[language].navbarMulti.favoriteGenres}
          link="/artists"
        />
        <div className="grid max-md:grid-cols-2 grid-cols-3  gap-2 max-sm:p-16 sm:p-32 max-w-screen-2xl mx-auto h-[700px]  justify-items-center place-items-center ">
          {CardGenres.map((data, index) => (
            <CardGenre key={index} content={data.content} color={data.color} />
          ))}
        </div>
      </div>
    </>
  );
}
