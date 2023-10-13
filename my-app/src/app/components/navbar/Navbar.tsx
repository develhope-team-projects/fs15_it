"use client";

import Link from "next/link";
import Pulsante from "../Pulsante";
import { SoundBridgeLogo } from "./SoundBridgeLogo";
import { LanguageSelect } from "./LanguageSelect";
import { HamburgerMenu } from "./HamburgerMenu";

export default function Navbar() {
  return (
    <div className="z-10">
      <div className="navbar relative flex items-center py-3 justify-between">
        <div className="navbar-background absolute bg-black opacity-20 h-full w-full p-0 m-0 left-0 shadow-md shadow-zinc-500"></div>
        <div className="flex items-center ml-1 sm:ml-8">
          {/* Hamburger Menu with sign up and login, visible in mobile layout */}
          <HamburgerMenu />

          {/* Clicking on Logo takes you to Home page*/}
          <SoundBridgeLogo />

          <Link href="/design-system" className="ml-2 z-50 hover:text-zinc-300">
            Design System
          </Link>
        </div>

        {/* Desktop sign up and login  */}
        <div className="flex mr-1 sm:mr-4 items-center">
          <div className="flex mr-2">
            <Link
              href="/signup"
              className="mx-6 items-center z-50 hidden sm:flex hover:text-zinc-300"
            >
              Sign Up
            </Link>
            <div className="hidden sm:block">
              <Link href="/login-page">
                <Pulsante
                  content="Log in"
                  color="button-color-base"
                  colorhover="button-hover"
                ></Pulsante>
              </Link>
            </div>
          </div>

          {/* Language flags Select  */}
          <LanguageSelect />
        </div>
      </div>
    </div>
  );
}
