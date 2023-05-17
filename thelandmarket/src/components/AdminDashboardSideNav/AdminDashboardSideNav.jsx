import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MapIcon from '@mui/icons-material/Map';
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import AdminDashboardHome from "../AdminDashboardPages/AdminDashboardHome";
import AdminDashboardDealers from "../AdminDashboardPages/AdminDashboardDealers";
import AdminDashboardPlots from "../AdminDashboardPages/AdminDashboardPlots";
import AdminDashboardSociety from "../AdminDashboardPages/AdminDashboardSociety";
import { Typography } from "@mui/material";
import { UserAuth } from "../../Context/AuthContext";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const AdminDashboardSideNav = () => {
  const navigate = useNavigate();
  const { user, logout } = UserAuth();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/home");
      window.alert("Logged out");
      console.log("User Logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  const NTHome = () => {
    navigate("/");
  };
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menuData, setMenuData] = useState("adminDashboardHome");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          elevation={4}
          sx={{ backgroundColor: "#ffffff", color: "#3A98B9" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => {
                setOpen(!open);
              }}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            {/* <img
                src={logoNew}
                alt="#"
                style={{ width: "50px", marginLeft: "1.5%" }}
              /> */}
            <Box
              sx={{
                marginLeft: '2rem',
                padding: '1.5%'
              }}
            >
              <Typography sx={{fontSize: '1.2rem'}}>ADMIN</Typography>
            </Box>

            <Box sx={{ marginLeft: "auto", display: "flex" }}>
              <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {/* ---------------------HOME ICON----------------------- */}

            <ListItem disablePadding sx={{ display: "block" }} onClick={NTHome}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#3A98B9",
                  }}
                >
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Home"
                  sx={{ opacity: open ? 1 : 0, color: "#3A98B9" }}
                />
              </ListItemButton>
            </ListItem>

            {/* ----------------------LogOutIcon---------------- */}

            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={handleLogout}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#3A98B9",
                  }}
                >
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Logout"
                  sx={{ opacity: open ? 1 : 0, color: "#3A98B9" }}
                />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />

          <List sx={{ textAlign: "center", marginTop: "12rem" }}>
            {/* ---------------------------DashboardIcon------------------ */}

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenuData("adminDashboardHome")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  marginBottom: "1rem",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#3A98B9",
                  }}
                >
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Dashboard"
                  sx={{ opacity: open ? 1 : 0, color: "#3A98B9" }}
                />
              </ListItemButton>
            </ListItem>

            {/* ------------------------PlotsIcon---------------------- */}

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenuData("adminDashboardPlots")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  marginBottom: "1rem",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#3A98B9",
                  }}
                >
                  <ScatterPlotIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Plots"
                  sx={{ opacity: open ? 1 : 0, color: "#3A98B9" }}
                />
              </ListItemButton>
            </ListItem>

            {/* ---------------------SocietiesIcon---------------- */}

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenuData("adminDashboardSocieties")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  marginBottom: "1rem",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#3A98B9",
                  }}
                >
                  <MapIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Societies"
                  sx={{ opacity: open ? 1 : 0, color: "#3A98B9" }}
                />
              </ListItemButton>
            </ListItem>

                    {/* ---------------------DealersIcon---------------- */}

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenuData("adminDashboardDealers")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  marginBottom: "1rem",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#3A98B9",
                  }}
                >
                  <ManageAccountsIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Dealers"
                  sx={{ opacity: open ? 1 : 0, color: "#3A98B9" }}
                />
              </ListItemButton>
            </ListItem>


          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {menuData == "adminDashboardHome" && <AdminDashboardHome />}
          {menuData == "adminDashboardSocieties" && <AdminDashboardSociety />}
          {menuData == "adminDashboardPlots" && <AdminDashboardPlots />}
          {menuData == "adminDashboardDealers" && <AdminDashboardDealers />}
        </Box>
      </Box>
    </>
  );
};

export default AdminDashboardSideNav;
