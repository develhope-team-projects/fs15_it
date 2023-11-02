import Image from "next/image";
// import icon1 from "../../public/user-icon.png";
// import icon2 from "../../../../../public/assets/img/";
import icon1 from "../../../../../public/user-icon.png";
import icon2 from "../../../../../public/bx-download.svg";
import HeroMultisection from "@/app/components/heroMultisection";
import DenseAppBar from "@/app/components/navbar-multisection/NavbarMulti";

const items: Array<string> = ["Titolo Brano", "Durata", "Downloads"];

const texts = [
  {
    col1: [<Image src={icon1} alt="" width={60} height={60} />, "Titolo Brano"],
    col2: "2:38",
    col3: ["987986678", <Image src={icon2} alt="" width={40} height={40} />],
  },
  {
    col1: [<Image src={icon1} alt="" width={60} height={60} />, "Titolo Brano"],
    col2: "2:38",
    col3: ["987986678", <Image src={icon2} alt="" width={40} height={40} />],
  },
  {
    col1: [<Image src={icon1} alt="" width={60} height={60} />, "Titolo Brano"],
    col2: "2:38",
    col3: ["987986678", <Image src={icon2} alt="" width={40} height={40} />],
  },
  {
    col1: [<Image src={icon1} alt="" width={60} height={60} />, "Titolo Brano"],
    col2: "2:38",
    col3: ["987986678", <Image src={icon2} alt="" width={40} height={40} />],
  },
];

export default function UploadSongs() {
  return (
    <>
      <DenseAppBar content="Upload Songs" link="/artists" />
      <HeroMultisection items={items} texts={texts} />
    </>
  );
}
