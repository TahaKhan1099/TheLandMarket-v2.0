import React from "react";
import { getDatabase, onValue, ref, remove, get } from "firebase/database";
import { useEffect, useState } from "react";
import { UserAuth } from "../../Context/AuthContext";
import { db } from "../../firebase";

import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Button,
  Box,
  Typography,
} from "@mui/material";

const SocietyDashboardDealerD17 = () => {
    const { user } = UserAuth();
    const [values, setValues] = useState([]);
    const [selectedDealers, setSelectedDealers] = useState([]);
    const db = getDatabase();
  
    useEffect(() => {
      const getData = async () =>{
        try{
          const snapshot = await get(ref (db, "DealerDataRecords"));
          if(snapshot.exists()){
            const dealersData = snapshot.val();
            const dealers = Object.entries(dealersData).map(([uid, data])=>({
              uid, 
              ...data,
            }));
            const filteredDealers = dealers.filter(
              (dealer) => dealer.societyName === "D17"
            );
            setValues(filteredDealers);
          }
        } catch(error){
          console.log("Error fetching dealers:", error);
        }
      };
  
      const dataRef = ref(db, "DealerDataRecords");
      const unsubscribe = onValue(dataRef, () => {
        getData();
      })
  
      return () => {
        unsubscribe();
      }
     
    },[db])
  
  
  
  
    
  
    //Old Below
  
    // const getData = () => {
    //   const dataArray1 = [];
    //   const dataArray2 = [];
    //   const data = ref(db, "DealerDataRecords");
    //   onValue(data, (snapshot) => {
    //     for (const uid in snapshot.val()) {
    //       const dealer = { uid, ...snapshot.val()[uid] };
    //       if (dealer.societyName === "Bahria Town Phase 3") {
    //         dataArray1.push(dealer);
    //       }
    //       dataArray2.push({ uid, ...snapshot.val()[uid] });
    //     }
  
    //     setValues(Object.values(dataArray1));
    //   });
    // };
  
    // useEffect(() => {
    //   getData();
    // }, []);
  
  //Old Above
  
    const handleDealerSelected = (event, dealer) => {
      if (event.target.checked) {
        setSelectedDealers((prevSelectedDealers) => [
          ...prevSelectedDealers,
          dealer,
        ]);
      } else {
        setSelectedDealers((prevSelectedDealers) =>
          prevSelectedDealers.filter(
            (selectedDealers) => selectedDealers.uid !== dealer.uid
          )
        );
      }
    };
  
  
    const handleRemoveDealers = () =>{
      selectedDealers.forEach(async (dealer) =>{
        try{
          const dealerRef = ref(db, `DealerDataRecords/${dealer.uid}`);
          await remove(dealerRef);
          setValues((prevValues)=>
          prevValues.filter((value)=>value.uid !== dealer.uid)
          );
        } catch(error){
          console.log(`Error removing dealer with UID ${dealer.uid}`, error);
        }
      });
      setSelectedDealers([]);
    };
  
  
    //old Below
    // const handleRemoveDealers = () => {
  
    //   //Getting uid of selected dealers
    //   const selectedDealersIds = selectedDealers.map((dealer) => dealer.uid);
  
    //   //Removing selected dealers
    //   selectedDealersIds.forEach((dealerId)=>{
    //     const dealerRef = ref(db, `DealerDataRecords/${dealerId}`);
    //     remove(dealerRef);
    //   });
  
    //   //Removing selected dealers from the values state
    //   setValues((prevValues)=>
    //     prevValues.filter((value)=> !selectedDealersIds.includes(value.uid))
    //   );
    //   selectedDealers([]); //clearing Selected Dealers
  
  
    //   // selectedDealers.forEach((dealer) => {
    //   //   remove(ref(getDatabase(), `DealerDataRecords/${dealer.uid}`))
    //   //     .then(() =>
    //   //       console.log(`Dealer with UID ${dealer.uid} removed successfully`)
    //   //     )
    //   //     .catch((error) =>
    //   //       console.log(`Error removing dealer with UID ${dealer.uid}`, error)
    //   //     );
    //   // });
  
    //   setSelectedDealers([]);
    // };
  
    return (
      <Container maxWidth="xl">
        <Box>
          <Typography sx={{marginTop: '7rem', textAlign: 'center',  marginBottom: '2rem', color: "#3A98B9", fontSize: "2rem", fontFamily: "Poppins"}}>Registered Dealers</Typography>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow >
                  <TableCell sx={{fontWeight: 'bold'}}>Select</TableCell>
                  <TableCell  sx={{fontWeight: 'bold'}}>Name</TableCell>
                  <TableCell  sx={{fontWeight: 'bold'}}>Contact</TableCell>
                  <TableCell  sx={{fontWeight: 'bold'}}>Agency</TableCell>
                  <TableCell  sx={{fontWeight: 'bold'}}>Employee ID</TableCell>
                  <TableCell  sx={{fontWeight: 'bold'}}>Office Address</TableCell>
                  <TableCell  sx={{fontWeight: 'bold'}}>Office Phone Number</TableCell>
                  <TableCell  sx={{fontWeight: 'bold'}}>Society</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {values.map((value) => (
                  <TableRow key={value.uid}>
                    <TableCell>
                      <Checkbox
                        checked={selectedDealers.some(
                          (dealer) => dealer.uid === value.uid
                        )}
                        onChange={(event) => handleDealerSelected(event, value)}
                      />
                    </TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.phoneNumber}</TableCell>
                    <TableCell>{value.agencyName}</TableCell>
                    <TableCell>{value.issuedEmployeeID}</TableCell>
                    <TableCell>{value.officeAddress}</TableCell>
                    <TableCell>{value.officePhoneNumber}</TableCell>
                    <TableCell>{value.societyName}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1.2rem', marginBottom: '1.2rem'}}>
              <Button
                variant="contained"
                color="primary"
                disabled={selectedDealers.length === 0}
                onClick={handleRemoveDealers}
              >
                Remove
              </Button>
            </Box>
          </TableContainer>
        </Box>
      </Container>
    );
}

export default SocietyDashboardDealerD17