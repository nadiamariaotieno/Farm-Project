import { AppBar, Toolbar, Typography } from "@mui/material";

const Topbar = () => {
  return (
    <AppBar position="static" color="secondary" elevation={1}>
      <Toolbar>
        <Typography variant="h6">
          Smart Farm Management System
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;