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

const AdminDashboardPlots = () => {
    // const currentDealerUserId = auth.currentUser.uid;
    const { user } = UserAuth();
    const [values, setValues] = useState([]);
    const [selectedPlots, setSelectedPlots] = useState([]);
    const db = getDatabase();
  
    useEffect(() => {
      const getData = async () => {
        try {
          const plotsSnapshot = await get(ref(db, "plots"));
          const bahriaPhase3Snapshot = await get(ref(db, "bahria_phase3"));
  
          if (plotsSnapshot.exists() || bahriaPhase3Snapshot.exists()) {
            const plotsData = plotsSnapshot.val() || {};
            const bahriaPhase3Data = bahriaPhase3Snapshot.val() || {};
  
            const plots = Object.values(plotsData);
            const bahriaPhase3Plots = Object.values(bahriaPhase3Data);
  
            const allPlots = [...plots, ...bahriaPhase3Plots];
            setValues(allPlots);
          }
        } catch (error) {
          console.log("Error Fetching Plots ", error);
        }
      };
  
      const plotsRef = ref(db, "plots");
      const bahriaPhase3Ref = ref(db, "bahria_phase3");
  
      const unsubscribePlots = onValue(plotsRef, () => {
        getData();
      });
  
      const unsubscribeBahriaPhase3 = onValue(bahriaPhase3Ref, () => {
        getData();
      });
  
      return () => {
        unsubscribePlots();
        unsubscribeBahriaPhase3();
      };
    }, [db]);
  
    const handlePlotSelection = (plotId) => {
      const updatedSelectedPlots = [...selectedPlots];
      if (updatedSelectedPlots.includes(plotId)) {
        const index = updatedSelectedPlots.indexOf(plotId);
        updatedSelectedPlots.splice(index, 1);
      } else {
        updatedSelectedPlots.push(plotId);
      }
      setSelectedPlots(updatedSelectedPlots);
    };
  
    const handleRemovePlots = async () => {
        selectedPlots.forEach(async (plotId) => {
          try {
            const plotRef = ref(db, `plots/${plotId}`);
            const bahriaPhase3Ref = ref(db, `bahria_phase3/${plotId}`);
            
            // Check if the plot exists in the "plots" node
            const plotSnapshot = await get(plotRef);
            if (plotSnapshot.exists()) {
              await remove(plotRef);
              console.log(`Plot with ID ${plotId} removed from "plots" node.`);
            }
      
            // Check if the plot exists in the "bahria_phase3" node
            const bahriaPhase3Snapshot = await get(bahriaPhase3Ref);
            if (bahriaPhase3Snapshot.exists()) {
              await remove(bahriaPhase3Ref);
              console.log(`Plot with ID ${plotId} removed from "bahria_phase3" node.`);
            }
          } catch (error) {
            console.log(`Error removing plot with ID ${plotId}:`, error);
          }
        });
      };
      

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
          Plots Registered
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
                <TableCell>Plot Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {values.map((value) => (
                <TableRow key={value && value.plotId && value.plotId.plotId}>
                  <TableCell>
                    <Checkbox
                      checked={selectedPlots.includes(value.plotId)}
                      onChange={() => handlePlotSelection(value.plotId)}
                    />
                  </TableCell>
                  <TableCell>{value.plotId}</TableCell>
                  <TableCell>{value.dealer_name}</TableCell>
                  <TableCell>{value.contact_number}</TableCell>
                  <TableCell>{value.area}</TableCell>
                  <TableCell>{value.price}</TableCell>
                  <TableCell>{value.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <Button variant="container" onClick={handleRemovePlots}>
              Remove
            </Button>
          </Box>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default AdminDashboardPlots;
