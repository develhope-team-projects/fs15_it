import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Link from "next/link";

interface MenuProps {
  content: string;
  link: string;
}

export default function DenseAppBar({
  content = "Saved Songs",
  link = "#",
}: MenuProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black", padding: 1 }}>
        <Toolbar
          variant="dense"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link href="/">
              <HomeIcon />
            </Link>
          </IconButton>
          <h2 className="font-body text-2xl font-semibold">{content}</h2>
          <IconButton edge="end" color="inherit" sx={{ marginLeft: 2 }}>
            <Link href={link}>
              <ArrowBack />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
