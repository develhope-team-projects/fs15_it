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
  Button,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Pulsante from "../Pulsante";
import { useState, useRef, useEffect } from "react";
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

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className="z-10">
      <div className="navbar relative flex items-center p-3 justify-between">
        <div className="navbar-background absolute bg-black opacity-20 h-full w-full p-0 m-0 left-0 shadow-md shadow-zinc-500"></div>
        <div className="flex items-center ml-1 sm:ml-8">
          {/* Hamburger Menu with sign up and login */}
          <div className="flex sm:hidden ">
            <IconButton
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <MenuIcon className="text-white" fontSize="large" />
            </IconButton>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Paper className="bg-transparent text-white">
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={handleClose}>
                          <Link href="/signup">Sign up</Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
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
            <Image
              src="/Logo.svg"
              alt=""
              className="min-w-[50px]"
              width="50"
              height="50"
            />
            <Typography className="font-body text-default ml-2 hidden md:flex">
              SoundBridge
            </Typography>
          </Link>

          <Link href="/design-system" className="ml-2 z-50">
            Design System
          </Link>
        </div>

        {/* Desktop sign up and login  */}
        <div className="flex mr-4 sm:mr-12 items-center">
          <div className="flex mr-2">
            <Link
              href="/signup"
              className="mx-6 items-center z-50 hidden sm:flex"
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
            className="text-white relative top-[2px] border-0 ml-0"
            variant="standard"
            disableUnderline
          >
            <MenuItem value={"en"} className="mt-2">
              <Image
                alt="en"
                src="/gb.svg"
                width="28"
                height="28"
                className="absolute left-1/2"
              />
            </MenuItem>
            <MenuItem value={"it"} className="mt-6">
              <Image
                alt="en"
                src="/it.svg"
                width="28"
                height="28"
                className="absolute left-1/2"
              />
            </MenuItem>
          </Select>
        </div>
      </div>
    </div>
  );
}
