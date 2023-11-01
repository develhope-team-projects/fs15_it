"use client";

// Props

interface MyComponentProps {
  items: string[];
  texts: textProp[];
}

// Table Props

interface textProp {
  col1: any[];
  col2: string;
  col3: any[];
}

export default function HeroMultisection({ items, texts }: MyComponentProps) {
  return (
    <div className="hero bg-[#0c111c] flex justify-center">
      <div className=" flex justify-between p-6 text-white w-3/4 max-lg:w-full max-sm:flex-col">
        <div className="container1 flex flex-col">
          <div className="header text-4xl bg-blue-800 rounded-3xl p-5 mb-8 max-lg:text-3xl text-center">
            {items[0]}
          </div>
          <div className="col1">
            {texts.map((text, index) => (
              <div
                className="text flex justify-center gap-4 items-center text-default mb-7"
                key={index}
              >
                {text.col1}
              </div>
            ))}
          </div>
        </div>
        <div className="container2 flex flex-col">
          <div className="header text-4xl bg-blue-800 rounded-3xl p-5 mb-10 max-lg:text-3xl text-center">
            {items[1]}
          </div>
          <div className="col2">
            {texts.map((text, index) => (
              <div
                className="text flex items-center justify-center text-default mb-[63px] mt-[10px]"
                key={index}
              >
                {text.col2}
              </div>
            ))}
          </div>
        </div>
        <div className="container3 flex flex-col">
          <div className="header text-4xl bg-blue-800 rounded-3xl p-5 mb-10 max-lg:text-3xl text-center">
            {items[2]}
          </div>
          <div className="col3 ">
            {texts.map((text, index) => (
              <div
                className="text flex justify-center gap-4 items-center text-default mb-12 mt-1"
                key={index}
              >
                {text.col3}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Esempio:

// import Image from "next/image";
// import icon1 from "../../public/user-icon.png";
// import icon2 from "../../public/bx-download.svg";

// import HeroMultisection from "./components/Hero-multisection";

// const items: Array<string> = ["Titolo Brano", "Durata", "Downloads"];

// const texts = [
//   {
//     col1: [<Image src={icon1} alt="" width={60} height={60} />, "Titolo Brano"],
//     col2: "2:38",
//     col3: ["87897868", <Image src={icon2} alt="" width={40} height={40} />],
//   },
//   {
//     col1: [<Image src={icon1} alt="" width={60} height={60} />, "Titolo Brano"],
//     col2: "2:38",
//     col3: ["87897868", <Image src={icon2} alt="" width={40} height={40} />],
//   },
//   {
//     col1: [<Image src={icon1} alt="" width={60} height={60} />, "Titolo Brano"],
//     col2: "2:38",
//     col3: ["87897868", <Image src={icon2} alt="" width={40} height={40} />],
//   },
//   {
//     col1: [<Image src={icon1} alt="" width={60} height={60} />, "Titolo Brano"],
//     col2: "2:38",
//     col3: ["87897868", <Image src={icon2} alt="" width={40} height={40} />],
//   },
// ];

{
  /* <HeroMultisection items={items} texts={texts} /> */
}
