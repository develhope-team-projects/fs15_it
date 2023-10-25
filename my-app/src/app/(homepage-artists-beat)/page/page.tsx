"use client";

import { Container, Grid } from "@mui/material";
import CardAnalytics from "../../components/CardAnalytics";
import { Sidebar } from "../../components/sidebar/Sidebar";
import artist from "@/../public/jhene_aiko.jpeg";
import beatmaker from "@/../public/chad_hugo.webp";
import { useState } from "react";
import UseSidebar from "@/app/components/sidebar/UseSidebar";

const cardsArray = [
  { title: "Likes", content: 199000, svg: "/likes.svg" },
  { title: "Playbacks", content: 200300, svg: "/play.svg" },
  { title: "Monthly Revenue", content: 54000, svg: "/revenues.svg" },
  { title: "Year Revenue", content: 700120, svg: "/revenues.svg" },
];

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

  return (
    <div className="bg-[#0c111c]">
      <div className="flex">
        <Sidebar
          userData={userData1}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <div className="bg-[#0c111c]">
          <div className="flex justify-between">
            <h1 className="text-white">Welcome Username!</h1>
            <div className="text-white">SoundBridge</div>
          </div>
          <Container>
            <Grid container spacing={3}>
              {cardsArray.map((data, index) => (
                <Grid item xs={6}>
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
    </div>
  );
}
