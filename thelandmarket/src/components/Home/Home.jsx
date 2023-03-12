import React from "react";
import HomeBuildingsAnimation from "../../assets/HomeBuildingsAnimation.json";
import Typical from "react-typical";

import Lottie from "lottie-react";
import {
  Typography,
  Grid,
  createTheme,
  ThemeProvider,
  Container,
  Box,
} from "@mui/material";

const Home = () => {
  const theme = createTheme();
  theme.typography.h6 = {
    fontSize: "0.3rem",
    "@media(min-width:800px)": { fontSize: "1.5rem" },
  };
  theme.typography.h1 = {
    fontSize: "0.8rem",
    "@media(min-width:800px)": { fontSize: "4rem" },
  };
  theme.typography.h4 = {
    marginTop: "10rem",
    fontSize: "2rem",
  };
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={6} sx={{ marginTop: "8rem" }}>
          <Lottie animationData={HomeBuildingsAnimation} />
        </Grid>
        <Grid item xs={6} sx={{ marginTop: "8rem" }}>
          <ThemeProvider theme={theme}>
            <Typography
              variant="h6"
              style={{ marginLeft: "5px", color: "#3A98B9" }}
            >
              PLOTS & RESIDENTIAL HOUSES
            </Typography>
            <Typography
              variant="h1"
              style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}
            >
              Your Convenience, <br />
              Our Priority
            </Typography>
            <a href="#" style={{ color: "#3A98B9" }}>
              <Typography variant="h4">
                Click Here To{" "}
                <Typical
                  loop={Infinity}
                  wrapper="i"
                  steps={["Get Started", 1000, "Register Yourself", 1000]}
                />
              </Typography>
            </a>
          </ThemeProvider>
        </Grid>
      </Grid>
      <Typography variant="h2" mt="150px" align="center">
        How it Works?
      </Typography>
    </Container>
  );
};

export default Home;
