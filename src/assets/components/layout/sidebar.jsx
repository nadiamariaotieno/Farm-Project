import { Drawer, List, ListItem,ListItemIcon, ListItemText, Toolbar, } from "@mui/material";
  import AgricultureIcon from "@mui/icons-material/Agriculture";
  import InventoryIcon from "@mui/icons-material/Inventory";
  import HealingIcon from "@mui/icons-material/Healing";
  import InsightsIcon from "@mui/icons-material/Insights";
  import DashboardIcon from "@mui/icons-material/Dashboard";
  import { Link } from "react-router-dom";
  
  const drawerWidth = 240;
  
const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          backgroundColor: "#2f5d34",
          color: "white",
        },
      }}
    >
      <Toolbar />
      <List>
        <ListItem
          button
          component={Link}
          to="/"
          sx={{ color: "#f5f3ea", textDecoration: "none" }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/livestock"
          sx={{ color: "inherit", textDecoration: "none" }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <AgricultureIcon />
          </ListItemIcon>
          <ListItemText primary="Livestock" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/inventory"
          sx={{ color: "inherit", textDecoration: "none" }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <InventoryIcon />
          </ListItemIcon>
          <ListItemText primary="Inventory" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/health"
          sx={{ color: "inherit", textDecoration: "none" }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <HealingIcon />
          </ListItemIcon>
          <ListItemText primary="Health" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/reports"
          sx={{ color: "inherit", textDecoration: "none" }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <InsightsIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
      </List>
    </Drawer>
  );
};
  
  export default Sidebar;