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

const DealerRegDetails = () => {
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
          height: "80%",
          borderRadius: "10%",
          "@media(max-width: 800px)": {
            marginTop: "3%",
            borderRadius: "1rem",
            width: "45%",
            height: '40rem'
          },
          "@media(max-width: 600px)": {
            marginTop: "3%",
            borderRadius: "1rem",
            width: "45%",
            height: '40rem'
          },
        }}
      >
        <Typography
          sx={{
            color: "#3A98B9",
            textAlign: "center",
            fontSize: "2rem",
            marginTop: "2rem",
            fontFamily: "Poppins",
            "@media(max-width: 800px)": {
              fontSize: '1.5rem'
            },
            "@media(max-width: 600px)": {
              fontSize: '1rem'
            },
          }}
        >
          D-Registration Details
        </Typography>
        <Box
          sx={{
            textAlign: "center",
            marginTop: "2rem",
            "@media(max-width: 800px)": {
              marginTop: "3rem",
            },
          }}
        >
          <form>
            <Box sx={{ marginTop: "2rem" }}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  float: "left",
                  marginLeft: "1rem",
                  fontSize: "0.8rem",
                  borderBottom: "1px solid #3A98B9",
                }}
              >
                Personal Information:
              </Typography>
              <br />
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                style={{
                  border: "1px solid #c0c0c0",
                  borderRadius: "4px",
                  marginTop: '0.5rem',
                  width: "280px",
                  height: "30px",
                  boxSizing: "border-box",
                  textAlign: "center",
                
                }}
              />
            </Box>

            <Box sx={{ marginTop: "0.2rem" }}>
            <input
                type="number"
                name="age"
                required
                placeholder="Age"
                style={{
                  border: "1px solid #c0c0c0",
                  borderRadius: "4px",
                  marginTop: '0.5rem',
                  width: "280px",
                  height: "30px",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              />
            </Box>
            <Box sx={{ marginTop: "0.2rem" }}>
            <input
                type="number"
                name="phoneNumber"
                required
                placeholder="Phone Number"
                style={{
                  border: "1px solid #c0c0c0",
                  borderRadius: "4px",
                  marginTop: '0.5rem',
                  width: "280px",
                  height: "30px",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              />
            </Box>
            <Box sx={{ marginTop: "0.2rem" }}>
            <input
                type="number"
                name="CNIC"
                required
                placeholder="CNIC"
                style={{
                  border: "1px solid #c0c0c0",
                  borderRadius: "4px",
                  marginTop: '0.5rem',
                  width: "280px",
                  height: "30px",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              />
            </Box>
            <Box sx={{ marginTop: "1rem" }}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  float: "left",
                  marginLeft: "1rem",
                  fontSize: "0.8rem",
                  borderBottom: "1px solid #3A98B9",
                }}
              >
                Organization Details:
              </Typography>
              <br />
              <input
                type="text"
                name="societyName"
                required
                placeholder="Society Name"
                style={{
                  border: "1px solid #c0c0c0",
                  borderRadius: "4px",
                  marginTop: '0.5rem',
                  width: "280px",
                  height: "30px",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              />
            </Box>
            <Box sx={{ marginTop: "0.2rem" }}>
            <input
                type="text"
                name="agencyName"
                required
                placeholder="Agency Name"
                style={{
                  border: "1px solid #c0c0c0",
                  borderRadius: "4px",
                  marginTop: '0.5rem',
                  width: "280px",
                  height: "30px",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              />
            </Box>
            <Box sx={{ marginTop: "0.2rem" }}>
            <input
                type="text"
                name="officeAddress"
                required
                placeholder="Office Address"
                style={{
                  border: "1px solid #c0c0c0",
                  borderRadius: "4px",
                  marginTop: '0.5rem',
                  width: "280px",
                  height: "30px",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              />
            </Box>
            <Box sx={{ marginTop: "0.2rem" }}>
            <input
                type="text"
                name="issuedEmployeeID"
                required
                placeholder="Office Issued Employee ID"
                style={{
                  border: "1px solid #c0c0c0",
                  borderRadius: "4px",
                  marginTop: '0.5rem',
                  width: "280px",
                  height: "30px",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              />
            </Box>
            <Box sx={{ marginTop: "0.2rem" }}>
            <input
                type="text"
                name="officePhoneNumber"
                required
                placeholder="Office Phone Number"
                style={{
                  border: "1px solid #c0c0c0",
                  borderRadius: "4px",
                  marginTop: '0.5rem',
                  width: "280px",
                  height: "30px",
                  boxSizing: "border-box",
                  textAlign: "center",
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
        
      </Box>
    </Container>
  );
};

export default DealerRegDetails;
