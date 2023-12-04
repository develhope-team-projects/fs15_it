"use client";
import Link from "next/link";
import Btn from "../Btn";
import { SoundBridgeLogo } from "./SoundBridgeLogo";
import { LanguageSelect } from "./LanguageSelect";
import { HamburgerMenu } from "./HamburgerMenu";
import { useLanguage } from "../LanguageContext";
import translations from "../../translations";

interface menuElement {
  content: string;
  linkHref: string;
}

// const hamburgerMenuElements: menuElement[] = [
//   { content: "Sign Up", linkHref: "/artists" },
//   { content: "Login", linkHref: "/beatmakers" },
// ];
// I am not using this array above because if I did the translations object couldn't be accessed outside of the Navbar function

export default function Navbar() {
  const { language } = useLanguage();
  const t: any = translations;

  return (
    <div className="z-10">
      <div className="navbar relative flex items-center py-3 justify-between">
        <div className="navbar-background absolute bg-black opacity-80 h-full w-full p-0 m-0 left-0 shadow-sm shadow-zinc-500"></div>
        <div className="flex items-center ml-1 sm:ml-8">
          {/* Hamburger Menu is visible in mobile layout only */}
          <HamburgerMenu
            menuItems={[
              { content: t[language].navbar.signUp, linkHref: "/artists" },
              { content: t[language].navbar.login, linkHref: "/beatmakers" },
            ]}
          />

          {/* Clicking on Logo takes you to Home page*/}
          <SoundBridgeLogo />
        </div>

        {/* Desktop sign up and login  */}
        <div className="flex mr-1 sm:mr-4 items-center">
          <div className="flex mr-2">
            <Link
              href="/sign-up"
              className="mx-6 items-center z-50 hidden sm:flex text-white hover:text-blue-400 transition-colors ease-in-out"
            >
              {t[language].navbar.signUp}
            </Link>
            {/* <div className="hidden sm:block">
              <Link href="/log-in">
                <Btn
                  content={t[language].navbar.login}
                  color="button-color-base"
                  colorhover="button-hover"
                ></Btn>
              </Link>
            </div> */}
          </div>

          {/* Language flags Select  */}
          <LanguageSelect isFlexCol={false} />
        </div>
      </div>
    </div>
  );
}
