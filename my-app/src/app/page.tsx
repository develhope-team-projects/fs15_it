import Image from "next/image";
import Link from "next/link";
import { Typography } from "@mui/material";
import Pulsante from "./components/Pulsante";

export default function Home() {
  return (
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
                alt=""
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
            <Pulsante content="Log in" color={""} colorhover={""} />
          </div>
        </div>
        <div className="section-homepage w-1/2 mt-5 p-8">
          <div className="title-homepage">
            <h1 className="text-8xl">Where music meets collaboration</h1>
            <h2 className="text-5xl mt-7">Join the revolution</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
