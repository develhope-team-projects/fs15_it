import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function DesignSystem() {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button variant="text" className="bg-black hover:bg-slate-800 text-red-600">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
}
