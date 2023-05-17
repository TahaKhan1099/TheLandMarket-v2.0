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

const SocietyDashboardPlotsD17 = () => {
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
          
            const plots = Object.values(plotsData);
            setValues(plots);
         
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

    const handlePlotSelection = (plotId) => {
        const updateSelectedPlots = [...selectedPlots];
        if (updateSelectedPlots.includes(plotId)){
            const index = updateSelectedPlots.indexOf(plotId);
            updateSelectedPlots.splice(index, 1);

        }else {
            updateSelectedPlots.push(plotId);
        }
        setSelectedPlots(updateSelectedPlots);
    }

    const handleRemovePlots = () =>{
        selectedPlots.forEach(async(plotId)=>{
            try{
                await remove(ref(db, `plots/${plotId}`));
                console.log(`Plot with ID ${plotId} removed successfully.`);

            } catch(error){
                console.log(`Error removing plot with ID ${plotId}:`, error);
            }
        });
    }
  
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
                  <TableCell>Plot Address</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {values.map((value) => (
                  <TableRow key={value.uid}>
                    <TableCell>
                      <Checkbox 
                        checked={selectedPlots.includes(value.plotId)}
                        onChange={()=>handlePlotSelection(value.plotId)}
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
            <Box sx={{justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: '1rem', marginBottom: '1rem'}}>
              <Button variant="container" onClick={handleRemovePlots}>Remove</Button>
            </Box>
          </TableContainer>
        </Box>
      </Container>
    );
}

export default SocietyDashboardPlotsD17