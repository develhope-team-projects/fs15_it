"use client";

import { useLanguage } from "@/app/components/LanguageContext";
import HeroManage from "@/app/components/hero-manage/HeroManage";
import DenseAppBar from "@/app/components/navbar-multisection/NavbarMulti";
import translations from "@/app/translations";

export default function ManageSongs() {
  const { language } = useLanguage();
  const t: any = translations;
  return (
    <>
      <DenseAppBar
        content={t[language].navbarMulti.manageSongs}
        link="/artists"
      />
      <HeroManage isBeatMaker={false} language={language} />
    </>
  );
}
