"use client";
import Link from "next/link";
import Pulsante from "../Pulsante";
import { SoundBridgeLogo } from "./SoundBridgeLogo";
import { LanguageSelect } from "./LanguageSelect";
import { HamburgerMenu } from "./HamburgerMenu";

interface menuElement {
  content: string;
  linkHref: string;
}

const hamburgerMenuElements: menuElement[] = [
  { content: "Sign Up", linkHref: "/signup" },
  { content: "Login", linkHref: "/login-page" },
];

export default function Navbar() {
  return (
    <div className="z-10">
      <div className="navbar relative flex items-center py-3 justify-between">
        <div className="navbar-background absolute bg-black opacity-80 h-full w-full p-0 m-0 left-0 shadow-sm shadow-zinc-500"></div>
        <div className="flex items-center ml-1 sm:ml-8">
          {/* Hamburger Menu is visible in mobile layout only */}
          <HamburgerMenu menuItems={hamburgerMenuElements} />

          {/* Clicking on Logo takes you to Home page*/}
          <SoundBridgeLogo />
        </div>

        {/* Desktop sign up and login  */}
        <div className="flex mr-1 sm:mr-4 items-center">
          <div className="flex mr-2">
            <Link
              href="/signup"
              className="mx-6 items-center z-50 hidden sm:flex text-white hover:text-blue-400 transition-colors ease-in-out"
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
