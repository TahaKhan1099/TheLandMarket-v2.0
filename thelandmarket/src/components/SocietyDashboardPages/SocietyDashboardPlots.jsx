import React, { useEffect, useState } from "react";
import { getDatabase, onValue, ref, remove, get } from "firebase/database";
import { UserAuth } from "../../Context/AuthContext";
import { auth } from "../../firebase";
import {
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Button,
} from "@mui/material";

const SocietyDashboardPlots = () => {
  const currentDealerUserId = auth.currentUser.uid;
  const { user } = UserAuth();
  const [values, setValues] = useState([]);
  const [selectedPlots, setSelectedPlots] = useState([]);
  const db = getDatabase();

  useEffect(() => {
    const getData = async () => {
      try {
        const snapshot = await get(ref(db, `plots`));
        if (snapshot.exists()) {
          const plotsData = snapshot.val();
          const plots = Object.entries(plotsData).map(([uid, data]) => ({
            uid,
            ...data,
          }));
          const filteredPlots = plots.filter(
            (plot) => plot.plotLocation === "Bahria Town Phase 3"
          );
          setValues(filteredPlots);
        }
      } catch (error) {
        console.log("Error Fetching Plots: ", error);
      }
    };

    const dataRef = ref(db, `plots`);
    const unsubscribe = onValue(dataRef, () => {
      getData();
    });

    return () => {
      unsubscribe();
    };
  }, [db]);

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
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Select</TableCell>
                <TableCell>Plot ID</TableCell>
                <TableCell>Dealer Name</TableCell>
                <TableCell>Dealer Phone</TableCell>
                <TableCell>Plot Size</TableCell>
                <TableCell>Plot Price</TableCell>
                <TableCell>Plot Location</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {values.map((value) => (
                <TableRow key={value.uid}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>{value.plotId}</TableCell>
                  <TableCell>{value.dealerName}</TableCell>
                  <TableCell>{value.dealerPhoneNumber}</TableCell>
                  <TableCell>{value.plotSize}</TableCell>
                  <TableCell>{value.plotPrice}</TableCell>
                  <TableCell>{value.plotLocation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box>
            <Button variant="container" disabled>Remove</Button>
          </Box>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default SocietyDashboardPlots;
