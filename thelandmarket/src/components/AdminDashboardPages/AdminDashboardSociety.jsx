import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import { db } from "../../firebase";

const AdminDashboardSociety = () => {
  const [societies, setSocieties] = useState([]);

  useEffect(() => {
    const database = getDatabase();

    const fetchSocieties = async () => {
      try {
        const societiesRef = ref(database, "SocietyDataRecords");
        onValue(societiesRef, (snapshot) => {
          if (snapshot.exists()) {
            const societiesData = snapshot.val();
            const societiesArray = Object.keys(societiesData).map((uid) => ({
              uid,
              ...societiesData[uid],
            }));
            setSocieties(societiesArray);
          } else {
            setSocieties([]);
          }
        });
      } catch (error) {
        console.log("Error fetching societies:", error);
      }
    };

    fetchSocieties();
  }, []);

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
          Registered Societies
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>
                  Society Contact
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>City</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>
                  Focal Person Phone
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {societies.map((society) => (
                <TableRow key={society.uid}>
                  <TableCell>{society.name}</TableCell>
                  <TableCell>{society.societyContactNumber}</TableCell>
                  <TableCell>{society.city}</TableCell>
                  <TableCell>{society.focalPersonPhoneNo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default AdminDashboardSociety;
