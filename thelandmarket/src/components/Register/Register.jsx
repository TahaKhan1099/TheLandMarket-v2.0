import {
  Container,
  Box,
  Typography,
  Paper,
  Button,
  Backdrop,
  Modal,
  Fade,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

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

const Register = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true)
  const handleClose2 = () => setOpen2(false);
  const [open3, setOpen3] = useState(false);
  const handleOpen3 = () => setOpen3(true)
  const handleClose3 = () => setOpen3(false);

  const NTDealerRegistration = () => {
    navigate("/dealerRegistration");
  };
  const NTSocietyRegistration = () => {
    navigate("/societyRegistration");
  };
  const NTDealerLogin = () => {
    navigate("/dealerLogin");
  };
  const NTSocietyLogin = () => {
    navigate("/societyLogin");
  };
  const NTDealerRegistrationBahria = () =>{
    navigate("/dealerRegistrationBahria")
  }
  const NTSocietyRegistrationD17 = () => {
    navigate("/societyRegistrationD17")
  }

  return (
    <Container maxWidth="xl">
      <Box>
        <Typography
          sx={{
            marginTop: "7rem",
            textAlign: "center",
            marginBottom: "2rem",
            color: "#3A98B9",
            fontSize: "2rem",
            fontFamily: "Poppins",
          }}
        >
          Registration
        </Typography>
      </Box>
      <Box
        mt={5}
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="50vh"
      >
        <Paper
          variant="outlined"
          square
          sx={{
            width: "30rem",
            height: "25rem",
            border: "1px solid #000",
            boxShadow: "0px 4px 4px rgba(0,0,0,0.8)",
            borderRadius: "50px",
            "@media(max-width: 800px)": {
              height: "20rem",
              width: "20rem",
            },
          }}
        >
          <Box
            sx={{
              padding: "3rem",
              "@media(max-width: 800px)": { padding: "1.5rem" },
            }}
          >
            <Button
              sx={{
                background: "#3A98B9",
                color: "#ffffff",
                fontFamily: "Poppins",
                fontSize: "larger",
                borderRadius: "100px",
                height: "100px",
                width: "250px",
                "&:hover": {
                  color: "#3A98B9",
                  backgroundColor: "#ffffff",
                  border: "1px solid #3A98B9",
                },
                "@media(max-width: 800px)": {
                  height: "5rem",
                  width: "12rem",
                },
              }}
              onClick={handleOpen2}
            >
              Dealer Registration
              <Modal
                sx={{ border: "none", boxShadow: "none", outline: "none" }}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open2}
                onClose={handleClose2}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 800,
                  },
                }}
              >
                <Fade in={open2}>
                  <Box sx={style}>
                    <Typography
                      id="transition-modal-title"
                      variant="h4"
                      component="h2"
                      textAlign="center"
                      fontFamily="Poppins"
                    >
                      Society:
                    </Typography>
                    <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
                      <Button
                        sx={{
                          margin: "auto",
                          fontFamily: "Poppins",
                          backgroundColor: "#3A98B9",
                          color: "#ffffff",
                          fontSize: "1rem",
                          width: "14rem",
                          border: " 1px solid #3A98B9",
                          "&:hover": {
                            color: "#3A98B9",
                            backgroundColor: "#ffffff",
                          },
                        }}
                        onClick={NTDealerRegistration}
                      >
                        D-17
                      </Button>
                    </Box>
                    <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
                      <Button
                        sx={{
                          margin: "auto",
                          fontFamily: "Poppins",
                          backgroundColor: "#3A98B9",
                          color: "#ffffff",
                          fontSize: "1rem",
                          width: "14rem",
                          border: " 1px solid #3A98B9",
                          "&:hover": {
                            color: "#3A98B9",
                            backgroundColor: "#ffffff",
                          },
                        }}
                        onClick={NTDealerRegistrationBahria}
                      >
                        Bahria Town Phase 3
                      </Button>
                    </Box>
                  </Box>
                </Fade>
              </Modal>
            </Button>
          </Box>

          <Box sx={{ padding: "3rem" }}>
            <Button
              sx={{
                background: "#3A98B9",
                color: "#ffffff",
                fontFamily: "Poppins",
                fontSize: "larger",
                borderRadius: "100px",
                height: "100px",
                width: "250px",
                "&:hover": {
                  color: "#3A98B9",
                  backgroundColor: "#ffffff",
                  border: "1px solid #3A98B9",
                },
                "@media(max-width: 800px)": {
                  height: "5rem",
                  width: "12rem",
                },
              }}
              onClick={handleOpen3}
            >
              Society Registration
              <Modal
                sx={{ border: "none", boxShadow: "none", outline: "none" }}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open3}
                onClose={handleClose3}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 800,
                  },
                }}
              >
                <Fade in={open3}>
                  <Box sx={style}>
                    <Typography
                      id="transition-modal-title"
                      variant="h4"
                      component="h2"
                      textAlign="center"
                      fontFamily="Poppins"
                    >
                      Society:
                    </Typography>
                    <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
                      <Button
                        sx={{
                          margin: "auto",
                          fontFamily: "Poppins",
                          backgroundColor: "#3A98B9",
                          color: "#ffffff",
                          fontSize: "1rem",
                          width: "14rem",
                          border: " 1px solid #3A98B9",
                          "&:hover": {
                            color: "#3A98B9",
                            backgroundColor: "#ffffff",
                          },
                        }}
                        onClick={NTSocietyRegistrationD17}
                      >
                        D-17
                      </Button>
                    </Box>
                    <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
                      <Button
                        sx={{
                          margin: "auto",
                          fontFamily: "Poppins",
                          backgroundColor: "#3A98B9",
                          color: "#ffffff",
                          fontSize: "1rem",
                          width: "14rem",
                          border: " 1px solid #3A98B9",
                          "&:hover": {
                            color: "#3A98B9",
                            backgroundColor: "#ffffff",
                          },
                        }}
                        onClick={NTSocietyRegistration}
                      >
                        Bahria Town Phase 3
                      </Button>
                    </Box>
                  </Box>
                </Fade>
              </Modal>
            </Button>
          </Box>
        </Paper>
      </Box>
      <Typography sx={{ textAlign: "center", marginTop: "3rem" }}>
        ———— OR ————{" "}
      </Typography>
      <Button
        sx={{
          backgroundColor: "#ffffff",
          fontFamily: "Poppins",
          color: "#3A98B9",
          display: "block",
          margin: "auto",
          fontSize: "1rem",
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
      <Typography
        sx={{ textAlign: "center", fontSize: "1.2rem", marginTop: "0.5rem" }}
      >
        If You already have an Account
      </Typography>
    </Container>
  );
};

export default Register;
