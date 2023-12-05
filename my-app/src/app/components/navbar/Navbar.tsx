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
    <div className="z-10 ">
      <div className="navbar relative flex items-center py-3 justify-between bg-[#0C0F18] p-4 ">
        <div className="navbar-background absolute bg-gradient-to-br from-[#007984] h-full w-full p-8 left-0 rounded-xl my-4"></div>
        <div className="flex items-center ml-1 sm:ml-8 ">
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
              className="mx-6 items-center z-50 hidden sm:flex text-white hover:bg-blue-600 font-semibold bg-[#006171] rounded-3xl p-2 transition-colors ease-in-out"
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
