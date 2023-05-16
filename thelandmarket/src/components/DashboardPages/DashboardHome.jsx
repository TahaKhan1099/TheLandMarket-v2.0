import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";

import {
  Container,
  Box,
  Button,
  Typography,
  Paper,
  Rating,
} from "@mui/material";

const DashboardHome = () => {
  const { user } = UserAuth();
  const [value, setValue] = React.useState(1);
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
        <Box sx={{ width: "50%" }}>
          <Typography
            sx={{
              marginTop: "2rem",
              fontFamily: "Poppins",
              fontSize: "2.5rem",
              color: "#3A98B9",
            }}
          >
            Name Here
          </Typography>
          <Typography sx={{ fontFamily: "Poppins", fontSize: "1rem" }}>
            Real Estate Dealer
          </Typography>
          <Typography sx={{ marginTop: "2rem", fontFamily: "Poppins" }}>
            User Email: {user && user.email}
          </Typography>
          <Typography sx={{ marginTop: "2rem", fontFamily: "Poppins" }}>
            Society: D-17
          </Typography>
          <Typography sx={{ marginTop: "2rem", fontFamily: "Poppins" }}>
            (Agency Name)
          </Typography>
          <Box sx={{ width: "100%", display: "flex" }}>
            <Box sx={{ width: "50%" }}>
              <Typography sx={{ marginTop: "2rem", fontFamily: "Poppins" }}>
                Rating:
              </Typography>
            </Box>
            <Box sx={{ flexGrow: "1", width: '100%' }}>
              <Rating name="read-only" value={value} readOnly sx={{marginTop:'2rem',}}/>
            </Box>
          </Box>
        </Box>

        <Box sx={{ flexGrow: "1" }}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "1.5rem",
              textAlign: "center",
              marginTop: "5rem",
              textDecoration: "underline",
            }}
          >
            Scheduled Meetings
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default DashboardHome;
