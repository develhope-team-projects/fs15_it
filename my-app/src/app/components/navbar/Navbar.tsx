"use client";
import { MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Pulsante from "../Pulsante";
import { useState } from "react";

export default function Navbar() {
  const [language, setLanguage] = useState("en");

  function handleLanguageChange(event: SelectChangeEvent<string>) {
    setLanguage(event.target.value);
  }

  return (
    <div className="z-10">
      <div className="navbar relative flex items-center p-3 justify-between">
        <div className="navbar-background absolute bg-black opacity-20 h-full w-full p-0 m-0 left-0 shadow-md shadow-zinc-500"></div>
        <div className="flex items-center ml-8">
          {/* Cliccare sul logo riporta alla home page */}
          <Link href="/" className="mr-4 flex items-center z-50 ">
            <Image
              src="/Logo.svg"
              alt=""
              className="min-w-[50px]"
              width="50"
              height="50"
            />
            <Typography className="font-body text-default ml-2 hidden md:flex">
              SoundBridge
            </Typography>
          </Link>

          <Link href="./design-system" className="ml-4 z-50">
            Design System
          </Link>
        </div>

        {/* Desktop sign up and login  */}
        <div className="flex mr-12">
          <div className="flex mr-2">
            <Link href="" className="mx-6 items-center z-50 hidden sm:flex">
              Sign Up
            </Link>
            <div className="hidden sm:block">
              <Pulsante
                content="Log in"
                color="button-color-base"
                colorhover="button-hover"
              ></Pulsante>
            </div>
          </div>

          {/* mobile hamburger menu */}
          <div className="flex sm:hidden">Ciao</div>

          <Select
            inputProps={{
              IconComponent: () => null,
              MenuProps: {
                PaperProps: {
                  sx: {
                    backgroundColor: "transparent", // Set the background color to transparent
                  },
                },
                MenuListProps: {
                  sx: {
                    width: "65px",
                  },
                },
              },
            }}
            value={language}
            label="Language"
            onChange={handleLanguageChange}
            className="text-white relative border-0"
            variant="standard"
            disableUnderline
          >
            <MenuItem value={"en"} className="mt-2">
              <Image
                alt="en"
                src="/gb.svg"
                width="28"
                height="28"
                className="absolute left-1/2"
              />
            </MenuItem>
            <MenuItem value={"it"} className="mt-6">
              <Image
                alt="en"
                src="/it.svg"
                width="28"
                height="28"
                className="absolute left-1/2"
              />
            </MenuItem>
          </Select>
        </div>
      </div>
    </div>
  );
}
