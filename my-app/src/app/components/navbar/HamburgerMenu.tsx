import {
  MenuItem,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuList,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import { useState, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";

interface menuElement {
  content: string;
  linkHref: string;
}

interface HamburgerMenuProps {
  menuItems: menuElement[];
}

export function HamburgerMenu({ menuItems }: HamburgerMenuProps) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

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
        <MenuIcon className="text-white hover:text-zinc-300" fontSize="large" />
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
            <Paper className="bg-black text-white relative top-3 -left-1">
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {menuItems.map((menuItem) => {
                    return (
                      <MenuItem className="hover:bg-zinc-700 rounded-md">
                        <Link href={menuItem.linkHref}>{menuItem.content}</Link>
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
