"use client";

import Image from "next/image";
// import icon1 from "../../public/user-icon.png";
// import icon2 from "../../../../../public/assets/img/";
import icon1 from "../../../../../public/user-icon.png";
import icon2 from "../../../../../public/bx-download.svg";
import HeroMultisection from "@/app/components/heroMultisection";
import DenseAppBar from "@/app/components/navbar-multisection/NavbarMulti";
import { useLanguage } from "@/app/components/LanguageContext";
import translations from "@/app/translations";

// const items: Array<string> = ["Titolo Brano", "Durata", "Downloads"];

// const texts = [
//   {
//     col1: [<Image src={icon1} alt="" width={60} height={60} />, "Titolo Brano"],
//     col2: "2:38",
//     col3: ["987986678", <Image src={icon2} alt="" width={40} height={40} />],
//   },
//   {
//     col1: [<Image src={icon1} alt="" width={60} height={60} />, "Titolo Brano"],
//     col2: "2:38",
//     col3: ["987986678", <Image src={icon2} alt="" width={40} height={40} />],
//   },
//   {
//     col1: [<Image src={icon1} alt="" width={60} height={60} />, "Titolo Brano"],
//     col2: "2:38",
//     col3: ["987986678", <Image src={icon2} alt="" width={40} height={40} />],
//   },
//   {
//     col1: [<Image src={icon1} alt="" width={60} height={60} />, "Titolo Brano"],
//     col2: "2:38",
//     col3: ["987986678", <Image src={icon2} alt="" width={40} height={40} />],
//   },
// ];

export default function UploadBeats() {
  const { language } = useLanguage();
  const t: any = translations;

  const items: Array<string> = [
    t[language].uploadBeatsPage.title,
    t[language].uploadBeatsPage.duration,
    t[language].uploadBeatsPage.downloads,
  ];

  const texts = [
    {
      col1: [
        <Image src={icon1} alt="" width={60} height={60} />,
        t[language].uploadBeatsPage.title,
      ],
      col2: "2:38",
      col3: ["987986678", <Image src={icon2} alt="" width={40} height={40} />],
    },
    {
      col1: [
        <Image src={icon1} alt="" width={60} height={60} />,
        t[language].uploadBeatsPage.title,
      ],
      col2: "2:38",
      col3: ["987986678", <Image src={icon2} alt="" width={40} height={40} />],
    },
    {
      col1: [
        <Image src={icon1} alt="" width={60} height={60} />,
        t[language].uploadBeatsPage.title,
      ],
      col2: "2:38",
      col3: ["987986678", <Image src={icon2} alt="" width={40} height={40} />],
    },
    {
      col1: [
        <Image src={icon1} alt="" width={60} height={60} />,
        t[language].uploadBeatsPage.title,
      ],
      col2: "2:38",
      col3: ["987986678", <Image src={icon2} alt="" width={40} height={40} />],
    },
  ];
  return (
    <>
      <DenseAppBar
        content={t[language].navbarMulti.uploadBeats}
        link="/beatmakers"
      />
      <HeroMultisection items={items} texts={texts} />
    </>
  );
}
