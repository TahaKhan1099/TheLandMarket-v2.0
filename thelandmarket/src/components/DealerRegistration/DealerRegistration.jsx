import React from "react";
import {
  Typography,
  Grid,
  Box,
  TextField,
  createTheme,
  ThemeProvider,
  Container,
  Button,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import background from "../../assets/images/registration1.jpg";

const DealerRegistration = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ position: "relative" }}>
        <img
          src={background}
          alt=""
          style={{
            width: "100%",
            filter: "blur(8px)",
            height: "50rem",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: "5",
          background: "#fff",
          width: "30%",
          height: "75%",
          borderRadius: "10%",
          "@media(max-width: 800px)": {
            marginTop: "10%",
            borderRadius: "1rem",
            width: "45%",
          },
          "@media(max-width: 600px)": {
            marginTop: "10%",
            borderRadius: "1rem",
            width: "65%",
          },
        }}
      >
        {/* <Box>
        <img src="/src/assets/images/logoNew.PNG" width={60} />
      </Box> */}
        <Typography
          sx={{
            color: "#3A98B9",
            textAlign: "center",
            fontSize: "2rem",
            marginTop: "2rem",
            fontFamily: "Poppins",
          }}
        >
          Dealer Registration
        </Typography>
        <Box
          sx={{
            textAlign: "center",
            marginTop: "7rem",
            "@media(max-width: 800px)": {
              marginTop: "3rem",
            },
          }}
        >
          <form>
            <Box sx={{ marginTop: "2rem" }}>
              <TextField
                id="outlined-basic"
                label="Enter Your Email"
                variant="outlined"
              />
            </Box>

            <Box sx={{ marginTop: "2rem" }}>
              <TextField
                id="outlined-password-input"
                label="Enter Your Password"
                type="password"
                autoComplete="current-password"
              />
            </Box>
            <Button
              sx={{
                backgroundColor: "#3A98B9",
                fontFamily: "Poppins",
                width: "12rem",
                color: "#ffffff",
                marginTop: "2rem",
                border: " 1px solid #3A98B9",
                "&:hover": { color: "#3A98B9", backgroundColor: "#ffffff" },
              }}
            >
              SUBMIT
            </Button>
          </form>
        </Box>
        <Typography sx={{ textAlign: "center", marginTop: "3rem" }}>
          ———— OR ————{" "}
        </Typography>
        <Typography sx={{ textAlign: "center", fontSize: "1rem" }}>
          Log In with Google
        </Typography>
        <Button sx={{ display: "block", margin: "auto", marginTop: "1rem" }}>
          <GoogleIcon color="#primary" />
        </Button>
      </Box>
    </Container>
  );
};

export default DealerRegistration;
