import React from "react";
import { Container, Box, Typography } from "@mui/material";
import D17 from "../../assets/images/D17.png";
import phase3 from "../../assets/images/phase3.png";


function Societies() {

  const handleImageClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          marginTop: "7rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "#3A98B9", fontSize: "1.5rem" }}>
          Discover Plots in the best Society for Yourself
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "1.2rem", marginBottom: '2rem' }}>
          Our Popular Societies
        </Typography>
      </Box>
      <Box sx={{ width: "100%", display: "flex" }}>
        <Box sx={{ width: "50%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => handleImageClick("https://play.unity.com/mg/other/thelandmarket-pk_d17")}
          >
            <img src={D17} alt="#" style={{ width: "90%" }} />
          </Box>

          <Typography sx={{ marginTop: "2rem", fontFamily: "Poppins", display: "flex",
              justifyContent: "center",
              alignItems: "center", }}>
            D17
          </Typography>
        </Box>
        <Box sx={{ flexGrow: "1", }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => handleImageClick("https://play.unity.com/mg/other/thelandmarket-pk_bahria_phase3")}
          >
            <img src={phase3} alt="#" style={{ width: "70%" }} />
          </Box>

          <Typography sx={{ marginTop: "2rem", fontFamily: "Poppins", display: "flex",
              justifyContent: "center",
              alignItems: "center", }}>
            Bahria Town Phase 3
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Societies;
