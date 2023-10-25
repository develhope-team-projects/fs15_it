import * as React from "react";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import { Typography } from "@mui/material";
import Link from "next/link";
import Btn from "../components/Btn";

export default function DesignSystem() {
  return (
    <div className="bg-[#0D111D] text-white font-body h-screen text-default">
      <div className="navbar relative flex items-center p-3 justify-between">
        <div className="navbar-background absolute bg-black opacity-20 h-full w-full p-0 m-0 "></div>
        <div className="flex items-center ml-8">
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

        {/* <div className="flex mr-8">
          <Link href="./design-system" className="mx-4 flex items-center z-50">
            Sign Up
          </Link>
          <Pulsante content="Log in"></Pulsante>
        </div> */}
      </div>
      <hr />
      <h1 className="text-header mt-4 mb-8 text-center">Design System</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-8 p-8">
        <div className="border-[0.2px] border-white rounded-lg p-4">
          <h3 className="text-sub-header mb-4 underline underline-offset-8">
            Logo
          </h3>
          <div className="flex w-96 items-center  text-white">
            <Image src="Logo.svg" alt="" className="" width="50" height="50" />
            <Typography className="font-body text-default ml-2">
              SoundBridge
            </Typography>
          </div>
        </div>
        <div className="border-[0.2px] border-white rounded-lg p-4">
          <h3 className="text-sub-header mb-4 underline underline-offset-8">
            Buttons
          </h3>
          <Stack spacing={2} direction="row">
            <Btn content={"Prova"} />
          </Stack>
        </div>
        <div className="border-[0.2px] border-white rounded-lg p-4">
          <h3 className="text-sub-header mb-4 underline underline-offset-8">
            Icons
          </h3>
          <div className="flex gap-4">
            <div className="rounded-2xl bg-[#1877F2]">
              <Image
                src="/facebook.svg"
                alt=""
                className=""
                width="25"
                height="25"
              />
            </div>

            <Image
              src="/twitter.svg"
              alt=""
              className=""
              width="25"
              height="25"
            />
            <Image
              src="/tiktok.svg"
              alt=""
              className=""
              width="25"
              height="25"
            />
            <Image
              src="/gmail.svg"
              alt=""
              className=""
              width="25"
              height="25"
            />
            <Image
              src="/whatsapp.svg"
              alt=""
              className=""
              width="25"
              height="25"
            />
            <Image
              src="/instagram.svg"
              alt=""
              className=""
              width="25"
              height="25"
            />
          </div>
        </div>
        <div className="border-[0.2px] border-white rounded-lg p-4">
          <h3 className="text-sub-header mb-4 underline underline-offset-8">
            Typography
          </h3>
          <div>
            <div className="flex gap-2 mb-2">
              <Typography className="font-body font-bold text-default">
                Fonts:{" "}
              </Typography>
              <Typography className="font-body text-default">
                Kanit, sans-serif,
              </Typography>
              {/* se si usano elementi di MUI e si vuole usare un font custom, bisogna
            rimetterlo con className altrimenti ti dà quello di default */}
              <Typography className="font-secondary text-default">
                Playfair Display
              </Typography>
            </div>

            <Typography className="font-body  text-default">
              SoundBridge
            </Typography>

            <Typography className="font-body text-header">
              Header: 40px
            </Typography>

            <Typography className="font-body text-sub-header">
              Sub-header: 32px
            </Typography>

            <Typography className="font-body text-default">
              Default: 18px
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
