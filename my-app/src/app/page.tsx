"use client";
import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import HeroMockup from "./components/hero-mockup/HeroMockup";
import { Typography } from "@mui/material";
import CardPlayerHome from "./components/cardplayerhome";
import img1 from "../../public/drakedogs.png";
import img2 from "../../public/kendrickllamar.jpg";
import img3 from "../../public/Metro_Boomin_Not_All_Heroes_Wear_Capes.png";
import img4 from "../../public/kidcudikidsseeghost.jpg";
import NewsLetterSection from "./components/NewsLetterSection";
import Footer from "./components/Footer";
import CardGenre from "./components/navbar/cardgenre";
import { HamburgerMenu } from "./components/navbar/HamburgerMenu";

const cardData = [
  { content: "Drake-ABC", cover: img1.src, slider: "24" },
  { content: "Kendrick-ABC", cover: img2.src, slider: 12 },
  { content: "Metro-ABC", cover: img3.src, slider: 36 },
  { content: "Kid Cudi-ABC", cover: img4.src, slider: "full" },
];

const CardGenres = [
  { content: "Pop", color: "bg-green-500" },
  { content: "Rock", color: "bg-red-500" },
  { content: "Rap", color: "bg-yellow-500" },
  { content: "Country", color: "bg-purple-500" },
  { content: "Indie", color: "bg-violet-500" },
  { content: "Lo-fi", color: "bg-gray-500" },
];

export default function Home() {
  return (
    <div className="m-0 p-0 box-border">
      <div className=" text-white font-body h-screen text-default m-0">
        <div className="background-image absolute h-screen w-screen m-0 p-0 -z-10">
          <Image
            src="/background top image.jpg"
            alt=""
            height="5865"
            width="3915"
            className="w-full h-full m-0 p-0"
          />
        </div>

        {/* TITLES */}
        <div className="section-homepage w-1/2  p-8">
          <div className="title-homepage">
            <h1 className="text-header">Where music meets collaboration</h1>
            <h2 className="text-sub-header mt-7">Join the revolution</h2>
          </div>
        </div>
      </div>
      <HeroMockup />

      <div className=" flex flex-col background-image ">
        <div className="background-image absolute w-full  m-0 p-0 -z-10 ">
          <Image
            src="/sfondo-temp-discoverartist.jpg"
            alt=""
            height="1920"
            width="1080"
            className="w-full h-full m-0 p-0"
          />
        </div>
        <Typography className="text-white text-7xl p-12 text-center text-shadow-lg shadow-gray-500">
          Discover New Artists
        </Typography>
        <div className="flex flex-wrap flex-row gap-28 p-12 ml-10 w-[700px] h-[700px] relative mb-32">
          {cardData.map((data, index) => (
            <CardPlayerHome
              key={index}
              content={data.content}
              cover={data.cover}
              slider={data.slider}
            />
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-t from-[#0c111c] to-black">
        <NewsLetterSection />
        <div className="bg-gradient-to-b from-blue-950 items-center align-middle justify-center text-center pb-24 ">
          <Typography className="text-white text-5xl p-12 text-shadow-lg shadow-gray-500 mr-14">
            Favorite Genres
          </Typography>

          <div className="grid grid-cols-3  gap-44 p-24  max-w-screen-2xl mx-auto h-[700px]  justify-center items-center ">
            {CardGenres.map((data, index) => (
              <CardGenre
                key={index}
                content={data.content}
                color={data.color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
