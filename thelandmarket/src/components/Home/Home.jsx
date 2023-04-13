import React from "react";
import HomeBuildingsAnimation from "../../assets/HomeBuildingsAnimation.json";
import ArrowAnimation3 from "../../assets/ArrowAnimation3.json";
import Lottie from "lottie-react";
import {
  Typography,
  Grid,
  Box,
  createTheme,
  ThemeProvider,
  Container,
  Button,
} from "@mui/material";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const theme = createTheme();
  theme.typography.h6 = {
    fontSize: "0.8rem",
    "@media(min-width:800px)": { fontSize: "1.5rem" },
  };
  theme.typography.h1 = {
    fontSize: "1.8rem",
    "@media(min-width:800px)": { fontSize: "4rem" },
  };
  theme.typography.h4 = {
    marginTop: "3rem",
    fontSize: "0.8rem",
    color: "#3A98B9",
    "@media(min-width:800px)": { fontSize: "2rem", marginTop: "10rem" },
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
            <Typography variant="h4" align="center">
              Click Here To Register Yourslef
            </Typography>
          </ThemeProvider>
          <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
            <Button
              sx={{
                margin: "auto",
                fontFamily: "Poppins",
                backgroundColor: "#3A98B9",
                color: "#ffffff",
                fontSize: "1rem",
                width: "15rem",
                border: " 1px solid #3A98B9",
                "&:hover": { color: "#3A98B9", backgroundColor: "#ffffff" },
                "@media(max-width: 800px)": {
                  width: "3rem",
                  fontSize: "0.5rem",
                  height: "1.5rem",
                },
              }}
            >
              REGISTER
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box>
        <Typography variant="h3" sx={{textAlign:'center', mt: '10rem'}}>Our Popular Residence</Typography>
        
      </Box>
      <Typography variant="h4" mt="150px" align="center">
        How it Works?
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "8rem",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 1, md: 4 }}
        >
          <Item sx={{ width: "10rem", height: "10rem" }}>Item 1</Item>
          <Grid item xs={6} sx={{ width: "8rem", height: "10rem" }}>
            <Lottie animationData={ArrowAnimation3} />
          </Grid>
          <Item sx={{ width: "10rem", height: "10rem" }}>Item 2</Item>
          <Grid item xs={6} sx={{ width: "8rem", height: "10rem", transform: 'rotate(90deg)' }}>
            <Lottie animationData={ArrowAnimation3} />
          </Grid>
          <Item sx={{ width: "10rem", height: "10rem" }}>Item 3</Item>
        </Stack>
      </Box>
    </Container>
  );
};

export default Home;
