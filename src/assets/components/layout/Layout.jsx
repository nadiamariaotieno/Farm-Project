import { Box } from "@mui/material";
import Sidebar from "./sidebar";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Topbar />
        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;