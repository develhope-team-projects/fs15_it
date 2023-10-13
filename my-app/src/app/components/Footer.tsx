import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <footer className=" text-white font-body px-36 py-12">
        <div className="flex justify-between w-full">
          <div>
            <ul>
              <Link href={"/"} className=" text-xl font-semibold">
                Links
              </Link>
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
                className="cursor-pointer"
                width="200"
                height="25"
              />
            </ul>
          </div>
          <div>
            <ul className="flex flex-col">
              <Link href={"/"} className=" text-xl font-semibold mb-4">
                SoundBridge
              </Link>
              <Link href={"/"} className="footer-links mb-2">
                About us
              </Link>
              <Link href={"/"} className="footer-links mb-2">
                Carriers
              </Link>
              <Link href={"/"} className="footer-links mb-2">
                Merch
              </Link>
              <Link href={"/"} className="footer-links mb-2">
                Blog
              </Link>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col">
              <Link href={"/"} className="text-xl mb-4 font-semibold">
                Support
              </Link>
              <Link href={"/"} className="footer-links mb-2">
                Pricing
              </Link>
              <Link href={"/"} className="footer-links mb-2">
                Help Desk
              </Link>
              <Link href={"/"} className="footer-links mb-2">
                Cookies preferencies
              </Link>
              <Link href={"/"} className="footer-links mb-2">
                Sign up
              </Link>
              <Link href={"/"} className="footer-links mb-2">
                Sign in
              </Link>
              <Link href={"/"} className="footer-links mb-2">
                Contact us
              </Link>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col ">
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
          2023 SoundBridge Version 1.0.1
        </p>
      </footer>
    </>
  );
}
