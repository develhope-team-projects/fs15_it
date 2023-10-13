"use client";
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuList,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Pulsante from "../Pulsante";
import { useState, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [language, setLanguage] = useState("en");
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  function handleLanguageChange(event: SelectChangeEvent<string>) {
    setLanguage(event.target.value);
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div className="z-10">
      <div className="navbar relative flex items-center py-3 justify-between">
        <div className="navbar-background absolute bg-black opacity-20 h-full w-full p-0 m-0 left-0 shadow-md shadow-zinc-500"></div>
        <div className="flex items-center ml-1 sm:ml-8">
          {/* Hamburger Menu with sign up and login, visible in mobile layout */}
          <div className="hamburger-menu flex sm:hidden">
            <IconButton
              ref={anchorRef}
              // anchorRef holds a reference to the DOM node of the IconButton component
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              {/* this is the hamburger menu icon  */}
              <MenuIcon
                className="text-white hover:text-zinc-300"
                fontSize="large"
              />
            </IconButton>
            <Popper
              open={open}
              // the open state controls whether the dropdown is open or not
              anchorEl={anchorRef.current}
              // anchorEl is used to set the position of the popper
              role={undefined}
              placement="bottom-start"
              // dropdown is placed at the bottom start of the reference element
              transition
              disablePortal
              // transition and disablePortal are related to the animation
              // and rendering behaviour of the dropdown
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                    // placement in Popper is set as "bottom-start", therefore
                    // the dropdown appears and disappears from the top left corner
                  }}
                >
                  <Paper className="bg-transparent text-white relative top-3.5 -left-1">
                    {/* alternatively, it can be done with bg-black or another color  */}
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem className="hover:bg-zinc-700 rounded-md">
                          <Link href="/signup">Sign up</Link>
                        </MenuItem>
                        <MenuItem className="hover:bg-zinc-700 rounded-md">
                          <Link href="/login-page">Login</Link>
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
          {/* Clicking on Logo takes you to Home page*/}
          <Link href="/" className="mr-2 flex items-center z-50 ">
            <div className="relative">
              <div className="bg-zinc-800 opacity-0 hover:opacity-20 md:hover:opacity-0 w-full h-full absolute rounded-full"></div>
              <Image
                src="/Logo.svg"
                alt=""
                className="min-w-[50px]"
                width="50"
                height="50"
              />
            </div>

            <Typography className="font-body text-default ml-2 hidden md:flex hover:text-zinc-300">
              SoundBridge
            </Typography>
          </Link>

          <Link href="/design-system" className="ml-2 z-50 hover:text-zinc-300">
            Design System
          </Link>
        </div>

        {/* Desktop sign up and login  */}
        <div className="flex mr-1 sm:mr-4 items-center">
          <div className="flex mr-2">
            <Link
              href="/signup"
              className="mx-6 items-center z-50 hidden sm:flex hover:text-zinc-300"
            >
              Sign Up
            </Link>
            <div className="hidden sm:block">
              <Link href="/login-page">
                <Pulsante
                  content="Log in"
                  color="button-color-base"
                  colorhover="button-hover"
                ></Pulsante>
              </Link>
            </div>
          </div>

          {/* Language flags Select  */}
          <Select
            inputProps={{
              IconComponent: () => null,
              MenuProps: {
                PaperProps: {
                  sx: {
                    backgroundColor: "transparent",
                  },
                },
                MenuListProps: {
                  sx: {
                    width: "65px",
                  },
                },
              },
            }}
            value={language}
            label="Language"
            onChange={handleLanguageChange}
            className="text-white relative top-[2px] border-0 ml-4"
            variant="standard"
            disableUnderline
          >
            <MenuItem value={"en"} className="">
              <Image
                alt="en"
                src="/gb.svg"
                width="28"
                height="28"
                className=""
              />
            </MenuItem>
            <MenuItem value={"it"} className="">
              <Image
                alt="en"
                src="/it.svg"
                width="28"
                height="28"
                className=""
              />
            </MenuItem>
          </Select>
        </div>
      </div>
    </div>
  );
}
