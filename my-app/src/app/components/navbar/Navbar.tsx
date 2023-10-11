import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Pulsante from "../Pulsante";

export default function Navbar() {
  return (
    <div className="z-10">
      <div className="navbar relative flex items-center p-3 justify-between">
        <div className="navbar-background absolute bg-black opacity-10 h-full w-full p-0 m-0 "></div>
        <div className="flex items-center ml-8">
          {/* Cliccare sul logo riporta alla home page */}
          <Link href="/" className="mr-4 flex items-center z-50">
            <Image src="/Logo.svg" alt="" className="" width="50" height="50" />
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
          <Link href="" className="mx-4 flex items-center z-50">
            Sign Up
          </Link>
          <Pulsante content="Log in" color="" colorhover=""></Pulsante>
        </div>
      </div>
    </div>
  );
}
