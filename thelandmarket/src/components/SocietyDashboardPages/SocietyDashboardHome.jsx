import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { UserAuth } from "../../Context/AuthContext";
import { ref, onValue,getDatabase , off, orderByChild, equalTo } from "firebase/database";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import {
  Container,
  Box,
  Button,
  Typography,
  Paper,
  Rating,
} from "@mui/material";

const SocietyDashboardHome = () => {
  
  const { user } = UserAuth(); 
  
  return (
    <Container maxWidth="xl">
      <Box sx={{ marginTop: "10rem" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={12}
            sx={{
              width: "10rem",
              height: "10rem",
              borderRadius: "50%",
            }}
          ></Paper>
          <br />
        </Box>
        <hr
          style={{
            background: "black",
            color: "black",
            borderColor: "black",
            height: "0.1rem",
            width: "30rem",
            marginTop: "2rem",
          }}
        />
      </Box>
      <Box sx={{ width: "100%", display: "flex" }}>
        <Box sx={{ width: "50%", }}>
          <Typography
            sx={{
              marginTop: "7rem",
              fontFamily: "Poppins",
              fontSize: "2.5rem",
              color: "#3A98B9",
              
            }}
          >
            Society Name Here
          </Typography>
          <Typography sx={{ fontFamily: "Poppins", fontSize: "1rem" }}>
            Focal Person Name Here
          </Typography>
          <Typography sx={{ marginTop: "2rem", fontFamily: "Poppins" }}>
            User Email: {user && user.email}
          </Typography>
         
        </Box>

        <Box sx={{ flexGrow: "1" }}>
          <Box sx={{margin: '2rem 0 0 1rem'}}>
          <LocalizationProvider dateAdapter={AdapterDayjs} readOnly>
            <DateCalendar />
          </LocalizationProvider>
          </Box>
          
        </Box>
      </Box>
    </Container>
  );
};

export default SocietyDashboardHome;
