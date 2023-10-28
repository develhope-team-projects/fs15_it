"use client";

import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#311cf4",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: "white",
  fontFamily: "body",
  fontSize: "30px",
}));

// Props

interface MyComponentProps {
  items: string[];
  texts: textProp[];
}

// Table Props

interface textProp {
  col1: any[];
  col2: string;
  col3: any[];
}

export default function HeroMultisection({ items, texts }: MyComponentProps) {
  return (
    <div className="bg-[#0c111c]">
      <Box sx={{ flexGrow: 1 }} className="m-3">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {items.map((item) => (
            <Grid item xs={2} sm={4} md={4}>
              <Item>{item}</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody className="bg-[#0c111c]">
            {texts.map((text) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className="flex justify-around"
              >
                <TableCell>
                  <div className=" text-white font-secondary text-default flex justify-center items-center">
                    {text.col1}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-white font-secondary text-default flex justify-center items-center">
                    {text.col2}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-white font-secondary text-default flex gap-3 items-center">
                    {text.col3}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

// Esempio:

// import Image from "next/image";
// import icon1 from "../../public/user-icon.png";
// import icon2 from "../../public/bx-download.svg";

// import HeroMultisection from "./components/Hero-multisection";

// const items: Array<string> = ["Titolo Brano", "Durata", "Downloads"];

// const texts = [
//   {
//     col1: [<Image src={icon1} alt="" width={40} height={40} />, "Titolo Brano"],
//     col2: "2:38",
//     col3: ["87897868", <Image src={icon2} alt="" width={25} height={25} />],
//   },
//   {
//     col1: [<Image src={icon1} alt="" width={40} height={40} />, "Titolo Brano"],
//     col2: "2:38",
//     col3: ["87897868", <Image src={icon2} alt="" width={25} height={25} />],
//   },
//   {
//     col1: [<Image src={icon1} alt="" width={40} height={40} />, "Titolo Brano"],
//     col2: "2:38",
//     col3: ["87897868", <Image src={icon2} alt="" width={25} height={25} />],
//   },
//   {
//     col1: [<Image src={icon1} alt="" width={40} height={40} />, "Titolo Brano"],
//     col2: "2:38",
//     col3: ["87897868", <Image src={icon2} alt="" width={25} height={25} />],
//   },
// ];

{
  /* <HeroMultisection items={items} texts={texts} /> */
}
