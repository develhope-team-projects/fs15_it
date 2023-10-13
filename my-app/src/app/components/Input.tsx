"use client";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import EmailIcon from "@mui/icons-material/Email";
import { InputAdornment } from "@mui/material";
const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label.Mui-focused": {
            color: "white",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#7a857b",
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "white",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "white",
          },
          borderRadius: "16px",
          color: "white",
          backgroundColor: "#7a857b",
        },
      },
    },
  },
});

export default function InputField() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Outlined"
          placeholder='placeholder'
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon sx={{ color: "white", marginLeft: "4px" }} />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </Box>
    </ThemeProvider>
  );
}
