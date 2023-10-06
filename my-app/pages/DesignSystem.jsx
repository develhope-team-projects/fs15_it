import * as React from "react";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import logoFirst from "../public/logos1.png";
import logoSecond from "../public/logos3.png";
import logo from "../public/Logo.svg";
import Pulsante from "./Pulsante";
import { Typography } from "@mui/material";
import facebook from "../public/facebook.svg";
import instagram from "../public/instagram.svg";
import twitter from "../public/twitter.svg";
import gmail from "../public/gmail.svg";
import whatsapp from "../public/whatsapp.svg";
import tiktok from "../public/tiktok.svg";

export default function DesignSystem() {
  return (
    <div className="bg-[#0D111D] text-white font-body p-8 h-screen">
      <h1 className="text-header mb-8 text-center">Design System</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-8">
        <div className="border-[0.2px] border-white rounded-lg p-4">
          <h3 className="text-sub-header mb-4 underline underline-offset-8">
            Logo
          </h3>
          <div className="flex w-96 items-center  text-white">
            <Image src={logo} alt="" className="" width="50" height="50" />
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
            <Pulsante content={"Prova"} />
          </Stack>
        </div>
        <div className="border-[0.2px] border-white rounded-lg p-4">
          <h3 className="text-sub-header mb-4 underline underline-offset-8">
            Icons
          </h3>
          <div className="flex gap-4">
            <div className="rounded-2xl bg-[#1877F2]">
              <Image
                src={facebook}
                alt=""
                className=""
                width="25"
                height="25"
              />
            </div>

            <Image src={twitter} alt="" className="" width="25" height="25" />
            <Image src={tiktok} alt="" className="" width="25" height="25" />
            <Image src={gmail} alt="" className="" width="25" height="25" />
            <Image src={whatsapp} alt="" className="" width="25" height="25" />
            <Image src={instagram} alt="" className="" width="25" height="25" />
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
