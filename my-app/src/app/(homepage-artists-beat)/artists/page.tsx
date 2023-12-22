"use client";

import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import CardAnalytics from "../../components/CardAnalytics";
import { Sidebar } from "../../components/sidebar/Sidebar";
import artist from "@/../public/jhene_aiko.jpeg";
import beatmaker from "@/../public/chad_hugo.webp";
import UseSidebar from "@/app/components/sidebar/UseSidebar";
import Link from "next/link";
import { useLanguage } from "../../components/LanguageContext";
import translations from "../../translations";

import Image from "next/image";

import { CardProvider, useCardContext } from "../../components/CardContext";

import MoneyImage from "../../../../public/Money_1973.jpg";
import HeartImage from "../../../../public/heart-solid-24.png";
import PinkFloyd from "../../../../public/pink floyd.jpeg";
import Santana from "../../../../public/santana.jpg";
import SantanaCor from "../../../../public/santana-corazon.jpg";
import Metallica from "../../../../public/metallica.jpg";
import Metallica2 from "../../../../public/metallica-.and-justice-for-all-album-audioteka.jpg";
import Bob from "../../../../public/Bob.jpg";
import Bob2 from "../../../../public/Bob2.jpg";
import Eminem from "../../../../public/eminem.jpg";
import Eminem2 from "../../../../public/eminem2.png";

const userData1 = {
  username: "Jhené Aiko",
  profilePic: artist.src,
  userType: "artist",
};

const userData2 = {
  username: "Chad Hugo",
  profilePic: beatmaker.src,
  userType: "beatmaker",
};

export default function HomepageArtisti() {
  const { isSidebarOpen, toggleSidebar } = UseSidebar();
  const { language } = useLanguage();
  const t: any = translations;
  const [songs, setSongs] = useState<
    Array<{ title: string; artist: string; Image: any; imageHeart: any }>
  >([]);

  const cardsArray = [
    {
      image: t[language].homepageArtists.likes,
      content: 199000,
      svg: "/likes.svg",
    },
    {
      title: t[language].homepageArtists.playbacks,
      content: 200300,
      svg: "/play.svg",
    },
    {
      title: t[language].homepageArtists.monthlyRevenue,
      content: 54000,
      svg: "/revenues.svg",
    },
    {
      title: t[language].homepageArtists.yearlyRevenue,
      content: 700120,
      svg: "/revenues.svg",
    },
  ];

  const cardsSaved = [
    {
      Image: MoneyImage,
      artist: "Pink Floyd",
      title: "Money",
      imageHeart: HeartImage,
    },
    {
      Image: PinkFloyd,
      artist: "Pink Floyd",
      title: "Time",
      imageHeart: HeartImage,
    },
    {
      Image: Santana,
      artist: "Santana",
      title: "Moonflower",
      imageHeart: HeartImage,
    },
    {
      Image: SantanaCor,
      artist: "Santana",
      title: "Corazòn",
      imageHeart: HeartImage,
    },
    {
      Image: Metallica,
      artist: "Metallica",
      title: "Load",
      imageHeart: HeartImage,
    },
    {
      Image: Metallica2,
      artist: "Metallica",
      title: "S&M",
      imageHeart: HeartImage,
    },
    {
      Image: Bob,
      artist: "Bob Marley",
      title: "Natural Mystic",
      imageHeart: HeartImage,
    },
    {
      Image: Bob2,
      artist: "Bob Marley",
      title: "Stir It Up",
      imageHeart: HeartImage,
    },
    {
      Image: Eminem,
      artist: "Eminem",
      title: "Recovery",
      imageHeart: HeartImage,
    },
    {
      Image: Eminem2,
      artist: "Eminem",
      title: "Relapse",
      imageHeart: HeartImage,
    },
  ];

  const { updateCardInfo } = useCardContext();

  const handleCardClick = (song: {
    title: string;
    artist: string;
    Image: any;
    imageHeart: any;
  }) => {
    updateCardInfo(song);
    setSongs((prevSongs) => [
      ...prevSongs,
      {
        title: song.title,
        artist: song.artist,
        Image: song.Image,
        imageHeart: song.imageHeart,
      },
    ]);
  };

  useEffect(() => {
    console.log(songs);
  }, [songs]);

  return (
    <>
      <div className="flex bg-black w-full">
        <Sidebar
          userData={userData1}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          links={[
            "/artists/favorite-genres",
            "/artists/saved-songs",
            "/artists/upload-songs",
            // "/artists/manage-songs",
          ]}
          language={language}
        />
        <div className="flex flex-col w-[80%]">
          <div className="w-full flex justify-between ">
            <div></div>
            <Link href="/" className="mr-4 flex items-center z-50">
              <img src="Logo.svg" width={50} height={50} alt=""></img>
              <Typography className="font-body text-default ml-2 text-white hover:text-blue-400">
                SoundBridge
              </Typography>
            </Link>
          </div>
          <h1 className=" ml-4 text-sub-header text-white">
            {t[language].homepageArtists.welcome} {userData1.username}!
          </h1>

          <Container className="mt-24">
            <Grid container spacing={10}>
              {cardsArray.map((data, index) => (
                <Grid key={index} item xl={6}>
                  <CardAnalytics
                    title={data.title}
                    content={data.content}
                    svg={data.svg}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </div>

      <div className="grid grid-cols-5 grid-rows-2">
        {cardsSaved.map((card, index) => (
          <div className="bg-[#0c111c] p-6">
            <div
              key={index}
              className="bg-white border rounded-lg overflow-hidden shadow-md p-3 flex flex-col items-center text-center w-60 h-80 ml-11"
            >
              <Image className="mb-1" src={card.Image} alt=""></Image>
              <div className="flex-grow w-full">
                <h3 className="text-xl font-bold mb-1 ">{card.artist}</h3>
                <p className="text-gray-600">{card.title}</p>
              </div>
              <div className="flex justify-end w-full">
                <Image
                  className="cursor-pointer"
                  src={card.imageHeart}
                  alt=""
                  onClick={() => handleCardClick(card)}
                ></Image>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
