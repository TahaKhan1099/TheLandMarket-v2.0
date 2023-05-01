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
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Poster1 from "../../assets/images/DHAIsbPoster.jpg";
import Poster2 from "../../assets/images/GulbergPoster.webp";
import Poster3 from "../../assets/images/ParkViewCityPoster.png";
import Carousel from "react-bootstrap/Carousel";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const navigate = useNavigate();
  const theme = createTheme();

  const NTRegister = () => {
    navigate("/register");
  };

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
              Start Now by Registering Yourself
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
              onClick={NTRegister}
            >
              REGISTER
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box>
        <Typography variant="h3" sx={{ textAlign: "center", mt: "10rem" }}>
          Our Popular Residence
        </Typography>
        <Box>
          {/* <Carousel fade>
              <Carousel.Item>
                <img src={Poster1} alt="First slide"/>
                <Carousel.Caption>DHA Islamabad</Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={Poster2} alt="Second slide" />
                <Carousel.Caption>Gulberg Islamabad</Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={Poster3} alt="Third slide" />
                <Carousel.Caption>Park View City</Carousel.Caption>
              </Carousel.Item>
            </Carousel> */}
        </Box>
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
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Item sx={{ width: "15rem", height: "auto" }}>
            <Card sx={{ border: "none", boxShadow: "none" }}>
              <CardMedia
                component="img"
                image="/src/assets/images/SearchSociety2.PNG"
              />

              <CardContent>
                <Typography variant="h6" gutterBottom component="div">
                  Search for a Society
                </Typography>
                <Typography sx={{ padding: "1rem", fontFamily: "Poppins" }}>
                  Find the plot that best matches your interest from the
                  socities registered on our website, or simply search for a
                  specific area{" "}
                </Typography>
              </CardContent>
            </Card>
          </Item>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "@media(max-width: 800px)": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                transform: "rotate(90deg)",
              },
            }}
          >
            <Lottie animationData={ArrowAnimation3} />
          </Box>
          <Item sx={{ width: "15rem", height: "auto" }}>
            <Card sx={{ border: "none", boxShadow: "none" }}>
              <CardMedia
                component="img"
                image="/src/assets/images/TrackProperty2.PNG"
           
              />
              <CardContent>
                <Typography variant="h6" gutterBottom component="div">
                  Track Property
                </Typography>
                <Typography sx={{ padding: "1rem", fontFamily: "Poppins" }}>
                  You can simply track you property in the easiest way possible
                  with our website. Simply head to the Society section and you
                  can find your property visually there{" "}
                </Typography>
              </CardContent>
            </Card>
          </Item>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "@media(max-width: 800px)": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                transform: "rotate(90deg)",
              },
            }}
          >
            <Lottie animationData={ArrowAnimation3} />
          </Box>
          <Item sx={{ width: "15rem", height: "auto" }}>
            <Card sx={{ border: "none", boxShadow: "none" }}>
              <CardMedia
                component="img"
                image="/src/assets/images/DealerValuation2.PNG"
               
              />
              <CardContent>
                <Typography variant="h6" gutterBottom component="div">
                  Valuation with Dealer
                </Typography>
                <Typography sx={{ padding: "1rem", fontFamily: "Poppins" }}>
                  Interested in a buying specific plot? Schedule a meeting with
                  our registered dealers with just a click and own the property
                  without wasting your time{" "}
                </Typography>
              </CardContent>
            </Card>
          </Item>
        </Stack>
      </Box>
    </Container>
  );
};

export default Home;
