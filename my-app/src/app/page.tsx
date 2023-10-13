import Image from "next/image";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <div className=" text-white font-body h-screen text-default m-0">
      <div className="background-image absolute h-screen w-screen m-0 p-0 -z-10">
        <Image
          src="/background top image.jpg"
          alt=""
          height="5865"
          width="3915"
          className="w-full h-full m-0 p-0"
        />
      </div>

      <Navbar />
      {/* TITLES */}
      <div className="section-homepage w-1/2 mt-5 p-8">
        <div className="title-homepage">
          <h1 className="text-header">Where music meets collaboration</h1>
          <h2 className="text-sub-header mt-7">Join the revolution</h2>
        </div>
      </div>
    </div>
  );
}
