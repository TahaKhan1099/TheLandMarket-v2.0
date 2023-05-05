import React, { useState } from "react";
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
import { UserAuth } from "../../Context/AuthContext";

import { useNavigate } from "react-router-dom";

const DealerRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { createUser } = UserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await createUser(email, password);
      console.log("User registered:", userCredential.user);
      navigate("/dealerRegDetails");
    } catch (e) {
      setError(e.message);
      window.alert("Error registering user:", e);
      console.log("Error registering user:", e);
    }
  };

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
          <form onSubmit={handleSubmit}>
            <Box sx={{ marginTop: "2rem" }}>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                style={{
                  border: '1px solid #c0c0c0',
                  borderRadius: '4px',
                  width: '280px',
                  height: '48px',
                  boxSizing: 'border-box',
                  textAlign: 'center'
                }}
              />
            </Box>

            <Box sx={{ marginTop: "2rem" }}>
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                 style={{
                  border: '1px solid #c0c0c0',
                  borderRadius: '4px',
                  width: '280px',
                  height: '48px',
                  boxSizing: 'border-box',
                  textAlign: 'center'
                }}
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
              type="submit"
            >
              SUBMIT
            </Button>
          </form>
        </Box>
        <Typography sx={{ textAlign: "center", marginTop: "3rem" }}>
          ———— OR ————{" "}
        </Typography>
        <Typography sx={{ textAlign: "center", fontSize: "1rem" }}>
          Sign Up with Google
        </Typography>
        <Button sx={{ display: "block", margin: "auto", marginTop: "1rem" }}>
          <GoogleIcon color="#primary" />
        </Button>
      </Box>
    </Container>
  );
};

export default DealerRegistration;
