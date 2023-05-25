import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Backdrop,
  Box,
  Modal,
  Fade,
  Toolbar,
  Tabs,
  Tab,
  Button,
} from "@mui/material";

import logoNew from "../../assets/images/logoNew.png";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#8df",
  border: "2px solid #8df",
  boxShadow: 24,
  borderRadius: "2rem",
  p: 4,
};

const Navbar = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  const NTAbout = () => {
    navigate("/about");
  };
  const NTHome = () => {
    navigate("/");
  };
  const NTDiscover = () => {
    navigate("/discover");
  };
  const NTDashboards = () => {
    navigate("/dashboards");
  };
  const NTSocieties = () => {
    navigate("/societies");
  };
  const NTDealerLogin = () => {
    navigate("/login");
  };
  const NTSocietyLogin = () => {
    navigate("/loginSociety");
  };
  const NTPlotFinder = () => {
    navigate("/plotfinder");
  };

  return (
    <>
      <AppBar sx={{ backgroundColor: "#ffffff" }}>
        <Toolbar>
          <img
            src={logoNew}
            alt="#"
            style={{ width: "50px", marginLeft: "1.5%" }}
          />
          <Tabs
            sx={{ margin: "auto" }}
            indicatorColor="#3A98B9"
            value={value}
            onChange={(e, value) => setValue(value)}
          >
            <Tab
              label="Home"
              onClick={NTHome}
              sx={{
                color: "#000000",
                fontFamily: "Poppins",
                fontSize: "1.2rem",
                marginTop: "0.5rem",
                "&:hover": { textDecoration: "underline #3A98B9" },
              }}
            />
            <Tab
              label="About"
              onClick={NTAbout}
              path="/about"
              sx={{
                color: "#000000",
                fontFamily: "Poppins",
                fontSize: "1.2rem",
                marginTop: "0.5rem",
                "&:hover": { textDecoration: "underline #3A98B9" },
              }}
            />
            <Tab
              label="Discover"
              onClick={NTDiscover}
              sx={{
                color: "#000000",
                fontFamily: "Poppins",
                fontSize: "1.2rem",
                marginTop: "0.5rem",
                "&:hover": { textDecoration: "underline #3A98B9" },
              }}
            />
            <Tab
              label="Dashboard"
              onClick={NTDashboards}
              sx={{
                color: "#000000",
                fontFamily: "Poppins",
                fontSize: "1.2rem",
                marginTop: "0.5rem",
                "&:hover": { textDecoration: "underline #3A98B9" },
              }}
            />
            <Tab
              label="Societies"
              onClick={NTSocieties}
              sx={{
                color: "#000000",
                fontFamily: "Poppins",
                fontSize: "1.2rem",
                marginTop: "0.5rem",
                "&:hover": { textDecoration: "underline #3A98B9" },
              }}
            />
            {/* <Tab
              label="Plot-Finder"
              onClick={NTPlotFinder}
              sx={{
                color: "#000000",
                fontFamily: "Poppins",
                fontSize: "1.2rem",
                marginTop: "0.5rem",
                "&:hover": { textDecoration: "underline #3A98B9" },
              }}
            /> */}
          </Tabs>

         

          <Button
            sx={{
              backgroundColor: "#ffffff",
              fontFamily: "Poppins",
              color: "#3A98B9",
              border: " 1px solid #3A98B9",
              "&:hover": { color: "#ffffff", backgroundColor: "#3A98B9" },
            }}
            onClick={handleOpen}
          >
            LOG IN
            <Modal
              sx={{ border: "none", boxShadow: "none", outline: "none" }}
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 800,
                },
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <Typography
                    id="transition-modal-title"
                    variant="h4"
                    component="h2"
                    textAlign="center"
                    fontFamily="Poppins"
                  >
                    Log In As:
                  </Typography>
                  <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
                    <Button
                      sx={{
                        margin: "auto",
                        fontFamily: "Poppins",
                        backgroundColor: "#3A98B9",
                        color: "#ffffff",
                        fontSize: "1rem",
                        width: "10rem",
                        border: " 1px solid #3A98B9",
                        "&:hover": {
                          color: "#3A98B9",
                          backgroundColor: "#ffffff",
                        },
                      }}
                      onClick={NTDealerLogin}
                    >
                      DEALER

                    </Button>
                    {handleClose}
                  </Box>
                  <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
                    <Button
                      sx={{
                        margin: "auto",
                        fontFamily: "Poppins",
                        backgroundColor: "#3A98B9",
                        color: "#ffffff",
                        fontSize: "1rem",
                        width: "10rem",
                        border: " 1px solid #3A98B9",
                        "&:hover": {
                          color: "#3A98B9",
                          backgroundColor: "#ffffff",
                        },
                      }}
                      onClick={NTSocietyLogin}
                    >
                      SOCIETY
                    </Button>
                  </Box>
                </Box>
              </Fade>
            </Modal>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
