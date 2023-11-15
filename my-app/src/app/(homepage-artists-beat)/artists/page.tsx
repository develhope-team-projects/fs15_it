"use client";

import { Container, Grid, Typography } from "@mui/material";
import CardAnalytics from "../../components/CardAnalytics";
import { Sidebar } from "../../components/sidebar/Sidebar";
import artist from "@/../public/jhene_aiko.jpeg";
import beatmaker from "@/../public/chad_hugo.webp";
import UseSidebar from "@/app/components/sidebar/UseSidebar";
import Link from "next/link";
import { useLanguage } from "../../components/LanguageContext";
import translations from "../../translations";

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
      title: t[language].homepageArtists.likes,
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
            "/artists/manage-songs",
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
    </>
  );
}
