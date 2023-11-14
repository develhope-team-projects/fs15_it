"use client";

import Image from "next/image";
// import icon1 from "../../public/user-icon.png";
// import icon2 from "../../../../../public/assets/img/";
import icon1 from "../../../../../public/user-icon.png";
import icon2 from "../../../../../public/bx-heart.svg";
import HeroMultisection from "@/app/components/heroMultisection";
import DenseAppBar from "@/app/components/navbar-multisection/NavbarMulti";
import { useLanguage } from "@/app/components/LanguageContext";
import translations from "@/app/translations";

// const items: Array<string> = ["Titolo Brano", "Artista", "Durata"];

// const texts = [
//   {
//     col1: [<Image src={icon1} alt="" width={60} height={60} />, "Titolo Brano"],
//     col2: "Nome Artista",
//     col3: ["2:38", <Image src={icon2} alt="" width={40} height={40} />],
//   },
//   {
//     col1: [<Image src={icon1} alt="" width={60} height={60} />, "Titolo Brano"],
//     col2: "Nome Artista",
//     col3: ["2:38", <Image src={icon2} alt="" width={40} height={40} />],
//   },
//   {
//     col1: [<Image src={icon1} alt="" width={60} height={60} />, "Titolo Brano"],
//     col2: "Nome Artista",
//     col3: ["2:38", <Image src={icon2} alt="" width={40} height={40} />],
//   },
//   {
//     col1: [<Image src={icon1} alt="" width={60} height={60} />, "Titolo Brano"],
//     col2: "Nome Artista",
//     col3: ["2:38", <Image src={icon2} alt="" width={40} height={40} />],
//   },
// ];

export default function SavedBeats() {
  const { language } = useLanguage();
  const t: any = translations;

  const items: Array<string> = [
    t[language].savedBeatsPage.title,
    t[language].savedBeatsPage.artist,
    t[language].savedBeatsPage.duration,
  ];

  const texts = [
    {
      col1: [
        <Image src={icon1} alt="" width={60} height={60} />,
        t[language].savedBeatsPage.title,
      ],
      col2: t[language].savedBeatsPage.artistName,
      col3: ["2:38", <Image src={icon2} alt="" width={40} height={40} />],
    },
    {
      col1: [
        <Image src={icon1} alt="" width={60} height={60} />,
        t[language].savedBeatsPage.title,
      ],
      col2: t[language].savedBeatsPage.artistName,
      col3: ["2:38", <Image src={icon2} alt="" width={40} height={40} />],
    },
    {
      col1: [
        <Image src={icon1} alt="" width={60} height={60} />,
        t[language].savedBeatsPage.title,
      ],
      col2: t[language].savedBeatsPage.artistName,
      col3: ["2:38", <Image src={icon2} alt="" width={40} height={40} />],
    },
    {
      col1: [
        <Image src={icon1} alt="" width={60} height={60} />,
        t[language].savedBeatsPage.title,
      ],
      col2: t[language].savedBeatsPage.artistName,
      col3: ["2:38", <Image src={icon2} alt="" width={40} height={40} />],
    },
  ];

  return (
    <>
      <DenseAppBar
        content={t[language].navbarMulti.savedBeats}
        link="/beatmakers"
      />
      <HeroMultisection items={items} texts={texts} />
    </>
  );
}
