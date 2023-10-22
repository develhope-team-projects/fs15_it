"use client";

import { MouseEventHandler } from "react";
import Image from "next/image";
import Link from "next/link";
import { LanguageSelect } from "../navbar/LanguageSelect";

interface SidebarProps {
  userData: { username: string; profilePic: string; userType: string };
  isSidebarOpen: boolean;
  toggleSidebar: MouseEventHandler<HTMLDivElement>;
}

export function Sidebar({
  userData,
  isSidebarOpen,
  toggleSidebar,
}: SidebarProps) {
  // Ricorda che hai commentato navbar in layout
  return (
    <>
      <div className="absolute h-screen w-screen text-black">
        {!isSidebarOpen && (
          <>
            <p
              onClick={toggleSidebar}
              className="absolute bg-transparent text-black hover:text-blue-400 z-10 cursor-pointer "
            >
              Sidebar
            </p>
            <div className="absolute bg-black opacity-20 h-full w-full transition"></div>
          </>
        )}
      </div>

      <aside
        className={`${
          isSidebarOpen ? "visible" : "invisible"
        } relative h-screen min-h-screen pt-4 w-1/3 max-w-sm bg-[#14213D] text-white text-default flex flex-col flex-1 justify-between items-center transition duration-1000`}
      >
        <div
          className="absolute right-0 mr-8 mt-1 hover:text-blue-400 cursor-pointer"
          onClick={toggleSidebar}
        >
          X
        </div>
        <div className="hidden lg:flex w-full ml-0 mb-4 md:mb-0 md:ml-12 ">
          <LanguageSelect />
          {/* hidden when screen is smaller  */}
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex flex-col-reverse lg:flex-col items-center">
            <div className="flex lg:hidden w-full mt-3 mb-14 sm:mb-0 ml-3 justify-center">
              <LanguageSelect />
              {/* hidden when screen is bigger  */}
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={userData.profilePic}
                alt="profile"
                width="100"
                height="100"
                min-width="100"
                className="rounded-full w-28 h-28 mt-8 lg:mt-0 object-cover"
              />
              <h3 className="flex flex-wrap mt-6 text-default sm:text-[20px] md:text-[24px] mb-1 text-center sm:text-start">
                {userData.username}
              </h3>
            </div>
          </div>
        </div>
        <div className="flex-grow flex flex-col items-start gap-[13%] justify-center">
          <Link
            href=""
            className="hover:text-blue-400 fill-white hover:fill-blue-400 flex items-center"
          >
            <div>
              <svg className="w-8" viewBox="0 0 16 16">
                <path d="M8.612,2.347L8,2.997l-0.612-0.65c-1.69-1.795-4.43-1.795-6.12,0c-1.69,1.795-1.69,4.706,0,6.502l0.612,0.65L8,16  l6.12-6.502l0.612-0.65c1.69-1.795,1.69-4.706,0-6.502C13.042,0.551,10.302,0.551,8.612,2.347z" />
              </svg>
            </div>
            <div className="hidden md:flex ml-2">Favorite genres</div>
          </Link>
          <Link
            href=""
            className="hover:text-blue-400 fill-white hover:fill-blue-400 flex items-center"
          >
            <div>
              <svg className="w-8" viewBox="0 0 512 512">
                <g>
                  <g>
                    <polygon points="193.2,381.2 181.6,392.6 256.1,466 330.6,392.6 319,381.2 264.3,435 264.3,192.9 247.9,192.9 247.9,435   " />
                  </g>
                  <g>
                    <path d="M399.2,164.4c0-1.2,0.2-2.3,0.2-3.5C399.4,97.4,346.5,46,282.6,46c-46.1,0-85.8,26.8-104.4,65.4c-8.1-4-17.1-6.3-26.8-6.3    c-29.6,0-54.1,23.3-58.9,51.3c-35.2,12-60.6,43.4-60.6,82.4c0,49.1,40.1,89.2,89.6,89.2H213v-16h-90.7    c-40.9,0-74.2-33.2-74.2-73.7c0-31.4,20.2-57.5,50.2-67.7l8.4-2.8l1.5-8.7c3.6-21.3,22.1-38.8,43.9-38.8c6.9,0,13.7,1.6,19.9,4.7    l13.5,6.7l6.5-13.6c16.6-34.4,52.1-56.6,90.4-56.6c55.3,0,100.9,42.8,100.9,97.6c0,13.1-0.2,20.1-0.2,20.1l15.2,0.1    c36.7,0.5,65.6,30,65.6,66.4c0,36.3-29.8,66.1-66.5,66.3l-3.2,0.1H297v16h101h0c45,0,81.9-37.2,81.9-82.1    C479.9,201,444.5,164.5,399.2,164.4z" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="hidden md:flex ml-2">
              Saved {userData.userType === "artist" ? "songs" : "beats"}
            </div>
          </Link>

          <Link
            href=""
            className="hover:text-blue-400 fill-white hover:fill-blue-400 flex items-center"
          >
            <div>
              <svg className="w-8" viewBox="0 0 512 512">
                <g>
                  <g>
                    <polygon points="193.3,260.4 181.7,248.8 256.2,174.5 330.7,248.8 319,260.4 264.4,205.8 264.4,447.6 247.9,447.6 247.9,205.8       " />
                  </g>
                  <g>
                    <path d="M399.3,183.6c0-1.2,0.2-2.4,0.2-3.6c0-64.3-52.8-116.4-116.8-116.4c-46.1,0-85.8,27.1-104.4,66.3    c-8.1-4.1-17.1-6.4-26.8-6.4c-29.6,0-54.1,23.6-58.9,52C57.4,187.6,32,222.2,32,261.8c0,49.7,40.1,90.2,89.6,90.2H213v-16h-90.6    c-40.9,0-74.2-33.5-74.2-74.6c0-31.8,20.2-61.2,50.2-71.6l8.4-2.9l1.5-8.8c3.6-21.6,22.1-39.3,43.9-39.3c6.9,0,13.7,1.6,19.9,4.8    l13.5,6.8l6.5-13.7c16.6-34.9,52.1-57.4,90.4-57.4c55.3,0,100.9,43.3,100.9,98.9c0,13.3-0.2,20.3-0.2,20.3l15.2,0.1    C435,199.1,464,232,464,268.9c0,36.8-29.8,66.9-66.5,67.1l-3.2,0H297v16h101h0c45,0,82-37.3,82-82.8    C480,223.7,444.5,183.7,399.3,183.6z" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="hidden md:flex ml-2">
              Upload a {userData.userType === "artist" ? "song" : "beat"}
            </div>
          </Link>
          <Link
            href=""
            className="hover:text-blue-400 fill-white hover:fill-blue-400 flex items-center"
          >
            <div>
              <svg className="w-8" viewBox="0 0 32 32">
                <style type="text/css"></style>
                <g>
                  <g>
                    <g>
                      <path d="M3,14c-0.1689453,0-0.3369141-0.0429688-0.4892578-0.1279297C2.1953125,13.6953125,2,13.3613281,2,13V5     c0-0.3613281,0.1953125-0.6953125,0.5107422-0.8720703C2.828125,3.9521484,3.2128906,3.9580078,3.5214844,4.1464844l6.5458984,4     C10.3642578,8.328125,10.5458984,8.6513672,10.5458984,9s-0.1816406,0.671875-0.4785156,0.8535156l-6.5458984,4     C3.3613281,13.9511719,3.1806641,14,3,14z M4,6.7832031v4.4335938L7.6279297,9L4,6.7832031z" />
                    </g>
                  </g>
                  <g>
                    <path d="M29,10H13c-0.5527344,0-1-0.4472656-1-1s0.4472656-1,1-1h16c0.5527344,0,1,0.4472656,1,1S29.5527344,10,29,10z" />
                  </g>
                  <g>
                    <path d="M29,28H5c-0.5527344,0-1-0.4472656-1-1s0.4472656-1,1-1h24c0.5527344,0,1,0.4472656,1,1S29.5527344,28,29,28z" />
                  </g>
                  <g>
                    <path d="M29,19H5c-0.5527344,0-1-0.4472656-1-1s0.4472656-1,1-1h24c0.5527344,0,1,0.4472656,1,1S29.5527344,19,29,19z" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="hidden md:flex ml-2">
              Manage {userData.userType === "artist" ? "songs" : "beats"}
            </div>
          </Link>
        </div>
        <div className="w-full mt-auto flex justify-end ">
          <div className="logout group cursor-pointer">
            {" "}
            <svg
              className="logout-icon-sidebar w-10 mr-1 mb-1 sm:mr-4 sm:mb-4 fill-none stroke-2 stroke-white group-hover:stroke-blue-400"
              data-name="Layer 1"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs></defs>
              <title />
              <path
                d="M13.13,8.63,32,16V56L13.25,47.87A2,2,0,0,1,12,46V10a2,2,0,0,1,2-2H41a2,2,0,0,1,2,2V46a2,2,0,0,1-2,2H32"
                // stroke={svgFill}
                className="transition-colors"
              />
              <line
                x1="27.91"
                x2="24.13"
                y1="35.06"
                y2="33.5"
                // stroke={svgFill}
                className="transition-colors"
              />
              <polyline
                points="50 32.24 54.24 28 50 23.76"
                // stroke={svgFill}
                className="transition-colors"
              />
              <line
                x1="54"
                x2="43"
                y1="28"
                y2="28"
                // stroke={svgFill}
                className="transition-colors"
              />
            </svg>
          </div>
        </div>
      </aside>
    </>
  );
}
