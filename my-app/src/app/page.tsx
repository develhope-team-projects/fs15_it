import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import HeroMockup from "./components/hero-mockup/HeroMockup";
import Link from "next/link";
import { Typography } from "@mui/material";
import Pulsante from "./components/Pulsante";
import CardPlayerHome from "./components/cardplayerhome";
import img1 from "../../public/drakedogs.png";
import img2 from "../../public/kendrickllamar.jpg";
import img3 from "../../public/Metro_Boomin_Not_All_Heroes_Wear_Capes.png";
import img4 from "../../public/kidcudikidsseeghost.jpg";

const cardData = [
  { content: "Drake-ABC", cover: img1.src, slider: "24" },
  { content: "Kendrick-ABC", cover: img2.src, slider: 12 },
  { content: "Metro-ABC", cover: img3.src, slider: 36 },
  { content: "Kid Cudi-ABC", cover: img4.src, slider: "full" },
];

export default function Home() {
  return (
    <div>
        <Navbar />
        {/* TITLES */}
        <div className="section-homepage w-1/2 mt-5 p-8">
          <div className="title-homepage">
            <h1 className="text-header">Where music meets collaboration</h1>
            <h2 className="text-sub-header mt-7">Join the revolution</h2>
          </div>
        </div>
      </div>
      <HeroMockup />
      <div className="flex background-image  ">
        <div className="background-image absolute h-screen w-screen m-0 p-0 -z-10 ">
          <Image
            src="/sfondo-temp-discoverartist.jpg"
            alt=""
            height="1920"
            width="1080"
            className="w-full h-full m-0 p-0"
          />
        </div>

        <Typography className="text-white text-7xl p-20 text-center text-shadow-lg shadow-gray-500">
          Discover New Artists
        </Typography>
      </div>
      <div className="flex flex-wrap flex-row gap-32 p-12 ml-10 w-[700px] h-[600px] relative">
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
  );
}
