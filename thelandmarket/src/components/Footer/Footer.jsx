import {
  Typography,
  Grid,
  Box,
  createTheme,
  ThemeProvider,
  Container,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import React from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Footer = () => {
  return (
    <Box
      sx={{
        marginTop: "5rem",
        borderTop: "2px solid #A6D0DD",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <Box sx={{ borderTop: "2px solid #A6D0DD", marginTop: "10rem" }}>
       
      </Box> */}
      {/* <Stack
        sx={{ marginTop: "2rem" }}
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 10, sm: 20, md: 80 }}
      >
        <Item sx={{border:"none", boxShadow:"none"}}>
          <Card sx={{border:"none", boxShadow: "none"}}>
            <CardMedia sx={{width:"30%"}} component="img" image="/src/assets/images/logoNew.PNG"/>
          </Card>
        </Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack> */}

      <Box  sx={{ backgroundColor: "#cef", width: "100vh", bottom: "0"}}>
        <div
          className="query-container"
          style={{
            width: "100%",
            padding: "2rem",
            backgroundColor: "#cef",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span>Queries</span>
          <div
            className="queries"
            style={{
              backgroundColor: "#fff",
              padding: "0 10px",
              borderRadius: "35px",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              placeholder="Query"
              style={{
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
                padding: "1rem",
              }}
            />
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Footer;
