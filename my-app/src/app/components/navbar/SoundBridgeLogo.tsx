import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export function SoundBridgeLogo() {
  return (
    <Link href="/" className="mr-2 flex items-center z-50 ">
      <div className="relative">
        <div className="bg-zinc-800 opacity-0 hover:opacity-20 md:hover:opacity-0 w-full h-full absolute rounded-full"></div>
        <Image
          src="/Logo.svg"
          alt=""
          className="min-w-[50px]"
          width="50"
          height="50"
        />
      </div>

      <Typography className="font-body text-default ml-2 hidden md:flex text-white hover:text-blue-400 transition-colors ease-in-out">
        SoundBridge
      </Typography>
    </Link>
  );
}
