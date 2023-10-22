"use client";
import { Sidebar } from "../components/sidebar/Sidebar";
import artist from "../../../public/jhene_aiko.jpeg";
import beatmaker from "../../../public/chad_hugo.webp";
import { useState } from "react";

const userData1 = {
  username: "Jhené Aiko",
  profilePic: artist.src,
  userType: "artist",
};

const userData2 = {
  username: "Chad Hugo",
  profilePic: beatmaker.src,
  userType: "beatmaker",
};

export default function ArtistPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((open) => !open);
  };

  return (
    <Sidebar
      userData={userData2}
      isSidebarOpen={isSidebarOpen}
      toggleSidebar={toggleSidebar}
    />
  );
}
