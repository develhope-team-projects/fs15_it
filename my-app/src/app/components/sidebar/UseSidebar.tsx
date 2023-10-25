import { useState } from "react";

const UseSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((open) => !open);
  };
  return { isSidebarOpen, toggleSidebar };
};

export default UseSidebar;
