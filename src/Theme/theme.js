import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#2f5d34" },
    secondary: { main: "#8b5e3c" },
    background: { default: "#f5f3ea" },
  },
  shape: { borderRadius: 12 },
});

export default theme;