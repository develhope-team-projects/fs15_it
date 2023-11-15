// import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Image from "next/image";
import { useLanguage } from "../LanguageContext";

type LanguageSelectProps = {
  isFlexCol: boolean;
};

export function LanguageSelect({ isFlexCol }: LanguageSelectProps) {
  // const [language, setLanguage] = useState("en");

  const { language, changeLanguage } = useLanguage();
  const divStyle = !isFlexCol
    ? "z-40 flex gap-4 ml-4 mr-2"
    : "z-40 flex flex-col gap-4 ml-4 mr-2";

  const handleChangeLanguage = (newLanguage: string) => {
    changeLanguage(newLanguage);
  };

  return (
    <div className={divStyle}>
      <Image
        onClick={() => handleChangeLanguage("en")}
        alt="en"
        src="/gb.svg"
        width="28"
        height="28"
        className="cursor-pointer rounded-3xl"
      />

      <Image
        onClick={() => handleChangeLanguage("it")}
        alt="en"
        src="/it.svg"
        width="28"
        height="28"
        className="cursor-pointer rounded-3xl"
      />
    </div>
    // <Select
    //   inputProps={{
    //     IconComponent: () => null,
    //     MenuProps: {
    //       PaperProps: {
    //         sx: {
    //           backgroundColor: "transparent",
    //         },
    //       },
    //       MenuListProps: {
    //         sx: {
    //           width: "65px",
    //           backgroundColor: "rgba(0, 0, 0, 0.92)",
    //         },
    //       },
    //     },
    //   }}
    //   value={language}
    //   label="Language"
    //   onChange={handleLanguageChange}
    //   className="text-white relative top-[2px] border-0 ml-4 "
    //   variant="standard"
    //   disableUnderline
    // >
    //   <MenuItem value={"en"} className="">
    //     <Image alt="en" src="/gb.svg" width="28" height="28" className="" />
    //   </MenuItem>
    //   <MenuItem value={"it"} className="">
    //     <Image alt="en" src="/it.svg" width="28" height="28" className="" />
    //   </MenuItem>
    // </Select>
  );
}
