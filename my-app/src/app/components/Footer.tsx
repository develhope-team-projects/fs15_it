import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import translations from "../translations";

export default function Footer() {
  const { language } = useLanguage();
  const t: any = translations;

  return (
    <>
      <footer className=" text-white font-body px-36 py-12 bg-gradient-to-b from-[#0c111c] to-black max-sm:text-center">
        <div className="max-md:flex-col max-sm:mb-8 flex justify-between w-full ">
          <div>
            <ul>
              <Link href={"/"} className=" text-xl font-semibold ">
                Links
              </Link>
              <div className="">
                <Image
                  src="/googleplay.png"
                  alt=""
                  className="mb-4 mt-10 cursor-pointer"
                  width="200"
                  height="25"
                />
                <Image
                  src="/appstore (1).png"
                  alt=""
                  className="mb-4 mt-10 cursor-pointer"
                  width="200"
                  height="25"
                />
              </div>
            </ul>
          </div>
          <div className="max-sm:hidden">
            <ul className="flex flex-col md:ml-6">
              <Link href={"/"} className=" text-xl font-semibold mb-4">
                SoundBridge
              </Link>
              <Link href={"/"} className="footer-links mb-2">
                {t[language].footer.aboutUs}
              </Link>
              <Link href={"/"} className="footer-links mb-2">
                {t[language].footer.careers}
              </Link>
              <Link href={"/"} className="footer-links mb-2">
                {t[language].footer.merch}
              </Link>
              <Link href={"/"} className="footer-links mb-2">
                {t[language].footer.blog}
              </Link>
            </ul>
          </div>
          <div className="max-sm:hidden">
            <ul className="flex flex-col md:ml-6">
              <Link href={"/"} className="text-xl mb-4 font-semibold">
                {t[language].footer.support}
              </Link>
              <Link href={"/"} className="footer-links mb-2">
                {t[language].footer.pricing}
              </Link>
              <Link href={"/"} className="footer-links mb-2 max-sm:hidden">
                {t[language].footer.helpDesk}
              </Link>
              <Link href={"/"} className="footer-links mb-2 max-sm:hidden">
                {t[language].footer.cookiesPreferences}
              </Link>
              <Link href={"/"} className="footer-links mb-2">
                {t[language].footer.signUp}
              </Link>
              <Link href={"/"} className="footer-links mb-2">
                {t[language].footer.signIn}
              </Link>
              <Link href={"/"} className="footer-links mb-2">
                {t[language].footer.contactUs}
              </Link>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col md:ml-6">
              <Link href={"/"} className=" text-xl mb-4 font-semibold">
                Social media
              </Link>
              <Link href={"/"} className="flex footer-links mb-2">
                <Image
                  src="/facebook.svg"
                  alt=""
                  className="mx-2"
                  width="25"
                  height="25"
                />
                Facebook
              </Link>
              <Link href={"/"} className="flex footer-links mb-2">
                <Image
                  src="/twitter.svg"
                  alt=""
                  className="mx-2"
                  width="25"
                  height="25"
                />
                Twitter
              </Link>
              <Link href={"/"} className="flex footer-links mb-2">
                <Image
                  src="/tiktok.svg"
                  alt=""
                  className="mx-2"
                  width="25"
                  height="25"
                />
                TikTok
              </Link>
              <Link href={"/"} className="flex footer-links mb-2">
                <Image
                  src="/whatsapp.svg"
                  alt=""
                  className="mx-2"
                  width="25"
                  height="25"
                />
                Whatsapp
              </Link>
              <Link href={"/"} className="flex footer-links mb-2">
                <Image
                  src="/instagram.svg"
                  alt=""
                  className="mx-2"
                  width="25"
                  height="25"
                />
                Instagram
              </Link>
            </ul>
          </div>
        </div>
        <p className="mt-12 flex justify-center">
          {t[language].footer.copyright}
        </p>
      </footer>
    </>
  );
}
