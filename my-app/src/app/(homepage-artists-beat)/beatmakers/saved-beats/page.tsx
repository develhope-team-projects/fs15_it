"use client";

import DenseAppBar from "@/app/components/navbar-multisection/NavbarMulti";
import { useLanguage } from "@/app/components/LanguageContext";
import translations from "@/app/translations";

export default function SavedBeats() {
  const { language } = useLanguage();
  const t: any = translations;

  return (
    <>
      <DenseAppBar
        content={t[language].navbarMulti.savedBeats}
        link="/beatmakers"
      />
    </>
  );
}
