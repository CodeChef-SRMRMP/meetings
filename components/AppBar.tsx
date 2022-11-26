import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import SecurityIcon from "@mui/icons-material/Security";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import TerminalIcon from "@mui/icons-material/Terminal";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SourceIcon from "@mui/icons-material/Source";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Drawer,
  Button,
  AppBar,
  Box,
  Toolbar,
  Typography,
  List,
  ListItem,
  IconButton,
  ListItemButton,
  ListSubheader,
  ListItemIcon,
} from "@mui/material";

const menuItems = [
  { name: "Family Meet", icon: <Diversity3Icon /> },
  { name: "Web3 Meet", icon: <CurrencyBitcoinIcon /> },
  { name: "Cyber Security Meet", icon: <SecurityIcon /> },
  { name: "Development Meet", icon: <CodeOffIcon /> },
  { name: "CP Meet", icon: <TerminalIcon /> },
  { name: "PR&M Meet", icon: <ManageAccountsIcon /> },
  { name: "Creatives Meet", icon: <DesignServicesIcon /> },
  { name: "Content Meet", icon: <SourceIcon /> },
];
const adminMenu = [
  { name: "Create Meet", icon: <AddCircleOutlineIcon /> },
  { name: "Delete a Meet", icon: <DeleteIcon /> },
];
export default function NavBar() {
  const [drawerOpen, setIsDrawerOpen] = useState(false);
  const admin = false;
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setIsDrawerOpen(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CodeChef SRMRMP Meet
            </Typography>
            <Button color="inherit">Admin Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={drawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <List>
          {admin && (
            <>
              <ListSubheader component="div">Admin Panel</ListSubheader>
              {adminMenu?.map(({ name, icon }, key) => (
                <ListItem key={key} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <p className="font-semibold">{name}</p>
                  </ListItemButton>
                </ListItem>
              ))}
            </>
          )}
          <ListSubheader component="div">Meetings</ListSubheader>
          {menuItems?.map(({ name, icon }, key) => (
            <ListItem key={key} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <p className="font-semibold">{name}</p>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
