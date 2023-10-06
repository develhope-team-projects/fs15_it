"use client";
// per usare degli handlers, stato e useEffect, bisogna scrivere questo come prima linea del file

import Button from "@mui/material/Button";

export default function Pulsante({ content = "Default" }) {
  return (
    <Button
      variant="contained"
      className="bg-blue-500 hover:bg-blue-600 text-white font-body text-default"
    >
      {content}
    </Button>
  );
}
