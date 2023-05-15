import React from "react";
import { Container, Typography, Box } from "@mui/material";

const SocietyDashboardPlots = () => {
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
          Plots Management
        </Typography>
      </Box>
    </Container>
  );
};

export default SocietyDashboardPlots;
