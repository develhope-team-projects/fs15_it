import Image from "next/image";
import Link from "next/link";
import { Typography } from "@mui/material";
import Pulsante from "./components/Pulsante";
import CardPlayerHome from "./components/cardplayerhome";
import img1 from "../../public/drakedogs.png";
import img2 from "../../public/kendrickllamar.jpg";
import img3 from "../../public/Metro_Boomin_–_Not_All_Heroes_Wear_Capes.png";
import img4 from "../../public/kidcudikidsseeghost.jpg";
import backgrounddiscover from "../../public/sfondo-temp-discoverartist.jpg";

export default function Home() {
  return (
    <>
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
        <div className="z-10">
          <div className="navbar relative flex items-center p-3 justify-between">
            <div className="navbar-background absolute bg-black opacity-10 h-full w-full p-0 m-0 "></div>
            <div className="flex items-center ml-8">
              {/* Cliccare sul logo riporta alla home page */}
              <Link href="/" className="mr-4 flex items-center z-50">
                <Image
                  src="/Logo.svg"
                  alt="logo"
                  className=""
                  width="50"
                  height="50"
                />
                <Typography className="font-body text-default ml-2">
                  SoundBridge
                </Typography>
              </Link>
              |
              <Link href="./design-system" className="ml-4 z-50">
                Design System
              </Link>
            </div>

            <div className="flex mr-8">
              <Link
                href="./design-system"
                className="mx-4 flex items-center z-50"
              >
                Sign Up
              </Link>
              <Pulsante
                content="Log in"
                color={"button-color-base"}
                colorhover={"button-hover"}
              ></Pulsante>
            </div>
          </div>
        </div>
      </div>
      <div className="flex background-image  ">
        <div className="background-image absolute h-screen w-screen m-0 p-0 -z-10 ">
          <Image
            src="/sfondo-temp-discoverartist.jpg"
            alt=""
            height="5865"
            width="3915"
            className="w-full h-full m-0 p-0"
          />
        </div>

        <Typography className="text-white text-7xl p-20 text-center">
          Discover New Artists
        </Typography>
      </div>
      <div className="flex flex-wrap flex-row gap-32 p-12 ml-10 w-[800px] h-[600px] relative">
        <CardPlayerHome content="Drake-ABC" cover={img1.src} slider={32} />
        <CardPlayerHome content="Kendrick-ABC" cover={img2.src} slider={36} />
        <CardPlayerHome content="Metro-ABC" cover={img3.src} slider={12} />
        <CardPlayerHome content="Kid Cudi-ABC" cover={img4.src} slider={24} />
      </div>
    </>
  );
}
