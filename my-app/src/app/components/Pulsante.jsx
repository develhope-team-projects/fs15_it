"use client";
// per usare degli handlers, stato e useEffect, bisogna scrivere questo come prima linea del file

import Button from "@mui/material/Button";

export default function Pulsante({ content = "Default" }) {
  return (
    <Button
      variant="contained"
      className="bg-buttons hover:bg-buttons-hover text-white hover:text-zinc-300 font-body text-default rounded-3xl py-0"
    >
      {content}
    </Button>
  );
}
