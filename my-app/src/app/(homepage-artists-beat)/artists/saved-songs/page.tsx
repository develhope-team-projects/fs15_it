"use client";

import DenseAppBar from "@/app/components/navbar-multisection/NavbarMulti";
import translations from "@/app/translations";
import { useLanguage } from "@/app/components/LanguageContext";

export default function SavedSongs() {
  const { language } = useLanguage();
  const t: any = translations;

  return (
    <>
      <DenseAppBar
        content={t[language].navbarMulti.savedSongs}
        link="/artists"
      />
      <div>
        <h2>Saved Songs </h2>
      </div>
    </>
  );
}
