"use client";
// per usare degli handlers, stato e useEffect, bisogna scrivere questo come prima linea del file

import Button from "@mui/material/Button";

export default function Pulsante({ content = "Default", color, colorhover }) {
  return (
    <Button
      variant="contained"
      className={`bg-${color} hover:${colorhover} shadow-[0px_0px_1px_2px] hover:shadow-[0px_0px_1px_2px] text-white  font-body text-default rounded-3xl py-0`}
    >
      {content}
    </Button>
  );
}
