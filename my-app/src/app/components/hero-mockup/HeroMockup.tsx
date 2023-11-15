import Image from "next/image";
import React from "react";
import MockupTitle from "../MockupTitle";
import translations from "@/app/translations";

interface HeroMockupProps {
  language: string;
}
const HeroMockup = ({ language }: HeroMockupProps) => {
  const t: any = translations;

  return (
    <div className="bg-[#0d111d]">
      <MockupTitle customText={t[language].mockups.title} />
      <div className="flex justify-evenly items-center  h-screen text-stone-50 flex-wrap">
        <div className="min-w-fit">
          <Image
            src="/assets/img/hero-mockup/mac.png"
            alt="Mockup picture of a macbook"
            width={800}
            height={800}
          />
        </div>

        <div className="">
          <Image
            src="/assets/img/hero-mockup/iphone.png"
            alt="Mockup picture of an iphone"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroMockup;
