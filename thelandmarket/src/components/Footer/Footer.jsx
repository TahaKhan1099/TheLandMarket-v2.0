import {
  Typography,
  Box,
  Container,
  Button,
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  OutlinedInput,
  Link,
} from "@mui/material";
import { UilMessage, UilFacebookF, UilTwitter, UilInstagram } from "@iconscout/react-unicons";

import React from "react";

function CopyRight() {
  return (
    <Typography variant="body2" color="text.secondary" textAlign="center">
      {"CopyRight © "}
      <Link color="inherit" href="https://google.com/">
        thelandmarket.pk
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
      sx={{
        marginTop: "5rem",
        borderTop: "2px solid #A6D0DD",
        display: "flex",
        flexDirection: "column",
        minHeight: "20vh",
        backgroundColor: "#8df",
      }}
    >
      <CssBaseline />
      <Container                              //Connect-With-Us Div
        component="main"
        sx={{ mt: 2, mb: 8, textAlign: "center" }}
        maxWidth="sm"
      >
        <Typography variant="h5" mt={5} component="h2" gutterBottom>
          Connect With Us
        </Typography>
        <Box mt={3} textAlign="center">
          <Button href="https://facebook.com/">
            <UilFacebookF size="1rem" color="#000" />
          </Button>
          <Button href="https://twitter.com/">
            <UilTwitter size="1rem" color="#000" />
          </Button>
          <Button href="https://instagram.com/">
            <UilInstagram size="1rem" color="#000" />
          </Button>
        </Box>
        <Typography variant="body1" mt={7}>Send Us Your Queries</Typography>
        <Box mt={2} ml={7} textAlign="center" display="inline-flex">
          <OutlinedInput
            sx={{ backgroundColor: "#ffffff", borderRadius: "2rem", marginLeft:"1rem"}}
          />
          <Button sx={{ padding: "15.5px 1px", marginLeft:"0.5rem" ,transform:"rotate(-30deg)", "&:hover":{backgroundColor: "#8df"} }}>
            <UilMessage size="2rem" color="#3A98B9" />
          </Button>
        </Box>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 1,
          px: 1,
          mt: "auto",
          backgroundColor: "#3A98B9",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" textAlign="center">
            TLM
          </Typography>
          <CopyRight />
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
