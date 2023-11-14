"use client";

import { Container, Grid, Typography } from "@mui/material";
import CardAnalytics from "../../components/CardAnalytics";
import { Sidebar } from "../../components/sidebar/Sidebar";
import artist from "@/../public/jhene_aiko.jpeg";
import beatmaker from "@/../public/chad_hugo.webp";
import { useState } from "react";
import UseSidebar from "@/app/components/sidebar/UseSidebar";
import Link from "next/link";
import { useLanguage } from "@/app/components/LanguageContext";
import translations from "@/app/translations";

// const cardsArray = [
//   { title: "Likes", content: 199000, svg: "/likes.svg" },
//   { title: "Playbacks", content: 200300, svg: "/play.svg" },
//   { title: "Monthly Revenue", content: 54000, svg: "/revenues.svg" },
//   { title: "Yearly Revenue", content: 700120, svg: "/revenues.svg" },
// ];

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
  const cardsArray = [
    {
      title: t[language].homepageBeatmakers.likes,
      content: 199000,
      svg: "/likes.svg",
    },
    {
      title: t[language].homepageBeatmakers.playbacks,
      content: 200300,
      svg: "/play.svg",
    },
    {
      title: t[language].homepageBeatmakers.monthlyRevenue,
      content: 54000,
      svg: "/revenues.svg",
    },
    {
      title: t[language].homepageBeatmakers.yearlyRevenue,
      content: 700120,
      svg: "/revenues.svg",
    },
  ];
  return (
    <>
      <div className="flex bg-black w-full">
        <Sidebar
          userData={userData2}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          links={[
            "/beatmakers/favorite-genres",
            "/beatmakers/saved-beats",
            "/beatmakers/upload-beats",
            "/beatmakers/manage-beats",
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
            Welcome {userData2.username}!
          </h1>

          <Container className="mt-24">
            <Grid container spacing={10}>
              {cardsArray.map((data, index) => (
                <Grid item xl={6}>
                  <CardAnalytics
                    key={index}
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
    </>
  );
}
