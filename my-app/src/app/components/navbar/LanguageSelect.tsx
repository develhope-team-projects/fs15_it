import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export function LanguageSelect() {
  const [language, setLanguage] = useState("en");

  function handleLanguageChange(event: SelectChangeEvent<string>) {
    setLanguage(event.target.value);
  }

  return (
    <Select
      inputProps={{
        IconComponent: () => null,
        MenuProps: {
          PaperProps: {
            sx: {
              backgroundColor: "black",
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
      className="text-white relative top-[2px] border-0 ml-4 "
      variant="standard"
      disableUnderline
    >
      <MenuItem value={"en"} className="">
        <Image alt="en" src="/gb.svg" width="28" height="28" className="" />
      </MenuItem>
      <MenuItem value={"it"} className="">
        <Image alt="en" src="/it.svg" width="28" height="28" className="" />
      </MenuItem>
    </Select>
  );
}
