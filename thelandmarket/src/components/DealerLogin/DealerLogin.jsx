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
const DealerLogin = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          marginTop: "15rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "20rem",
        }}
      >
        {/* <Box>
          <img src="/src/assets/images/logoNew.PNG" width={60} />
        </Box> */}
        <Typography
          sx={{
            color: "#3A98B9",
            fontSize: "2rem",
            marginTop: "2rem",
            fontFamily: "Poppins",
          }}
        >
          Dealer Login
        </Typography>
        <Box>
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
                backgroundColor: "#ffffff",
                fontFamily: "Poppins",
                width: '12rem',
                color: "#3A98B9",
                marginTop: '2rem',
                border: " 1px solid #3A98B9",
                "&:hover": { color: "#ffffff", backgroundColor: "#3A98B9" },
              }}
            >
              SUBMIT
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default DealerLogin;
