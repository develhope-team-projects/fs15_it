import Image from "next/image";
import Link from "next/link";
import { Typography } from "@mui/material";
import Pulsante from "./components/Pulsante";
import Navbar from "./components/navbar/Navbar";

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
      <Navbar />
    </div>
  );
}
