import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
export const theme = createTheme({
  typography: {
    fontFamily: [
      "Mochiy Pop P One",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
