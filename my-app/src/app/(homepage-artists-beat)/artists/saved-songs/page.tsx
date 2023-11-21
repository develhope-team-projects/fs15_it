"use client";

import Image from "next/image";
// import icon1 from "../../public/user-icon.png";
// import icon2 from "../../../../../public/assets/img/";
import icon1 from "../../../../../public/user-icon.png";
import icon2 from "../../../../../public/bx-heart.svg";
import HeroMultisection from "@/app/components/heroMultisection";
import DenseAppBar from "@/app/components/navbar-multisection/NavbarMulti";
import translations from "@/app/translations";
import { useLanguage } from "@/app/components/LanguageContext";

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

export default function SavedSongs() {
  const { language } = useLanguage();
  const t: any = translations;

  const items: Array<string> = [
    t[language].savedSongsPage.title,
    t[language].savedSongsPage.artist,
    t[language].savedSongsPage.duration,
  ];

  const texts = [
    {
      col1: [
        <Image src={icon1} alt="" width={60} height={60} />,
        "Congratulations",
      ],
      col2: "Post Malone",
      col3: ["2:56", <Image src={icon2} alt="" width={40} height={40} />],
    },
    {
      col1: [<Image src={icon1} alt="" width={60} height={60} />, "Sere Nere"],
      col2: "Tiziano Ferro",
      col3: ["3:45", <Image src={icon2} alt="" width={40} height={40} />],
    },
    {
      col1: [<Image src={icon1} alt="" width={60} height={60} />, "Mask Off"],
      col2: "Future",
      col3: ["4:35", <Image src={icon2} alt="" width={40} height={40} />],
    },
    {
      col1: [<Image src={icon1} alt="" width={60} height={60} />, "A Lot"],
      col2: "21 Savage",
      col3: ["3:35", <Image src={icon2} alt="" width={40} height={40} />],
    },
  ];

  return (
    <>
      <DenseAppBar
        content={t[language].navbarMulti.savedSongs}
        link="/artists"
      />
      <HeroMultisection items={items} texts={texts} />
    </>
  );
}
