import { Container, Box, Typography, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

const LoginSociety = () => {
    const navigate = useNavigate();
    const NTSocietyLogin = () => {
      navigate("/societyLogin");
    };
    const NTSocietyLoginD17 = () => {
      navigate("/societyLoginD17");
    };
  
    return (
      <Container maxWidth="xl">
        <Box
          mt={20}
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
                onClick={NTSocietyLoginD17}
              >
                D17
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
                onClick={NTSocietyLogin}
              >
                Bahria Phase 3
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    );
}

export default LoginSociety