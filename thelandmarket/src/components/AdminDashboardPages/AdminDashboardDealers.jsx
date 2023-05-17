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

const AdminDashboardDealers = () => {
  const { user } = UserAuth();
  const [values, setValues] = useState([]);
  const [selectedDealers, setSelectedDealers] = useState([]);
  const db = getDatabase();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dealersRef = ref(db, "DealerDataRecords");
        const snapshot = await get(dealersRef);
        if (snapshot.exists()) {
          const dealersData = snapshot.val();
          const dealers = Object.keys(dealersData).map((uid) => ({
            uid,
            ...dealersData[uid],
          }));
          setValues(dealers);
        }
      } catch (error) {
        console.log("Error fetching dealers:", error);
      }
    };

    fetchData();
  }, [db]);

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

  //   const handleRemoveDealers = () => {
  //     selectedDealers.forEach(async (dealer) => {
  //       try {
  //         const dealerRef = ref(db, `DealerDataRecords/${dealer.uid}`);
  //         await remove(dealerRef);
  //         setValues((prevValues) =>
  //           prevValues.filter((value) => value.uid !== dealer.uid)
  //         );
  //       } catch (error) {
  //         console.log(`Error removing dealer with UID ${dealer.uid}`, error);
  //       }
  //     });
  //     setSelectedDealers([]);
  //   };

  const handleRemoveDealers = async () => {
    const dealersToRemove = [...selectedDealers];
    setSelectedDealers([]);

    for (const dealer of dealersToRemove) {
      try {
        const dealerRef = ref(db, `DealerDataRecords/${dealer.uid}`);
        await remove(dealerRef);
        setValues((prevValues) =>
          prevValues.filter((value) => value.uid !== dealer.uid)
        );
        window.alert(`Dealer with name ${dealer.name} was removed.`);
      } catch (error) {
        console.log(`Error removing dealer with UID ${dealer.uid}`, error);
      }
    }
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
          Registered Dealers
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Select</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Contact</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Agency</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Employee ID</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>
                  Office Address
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>
                  Office Phone Number
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Society</TableCell>
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1.2rem",
              marginBottom: "1.2rem",
            }}
          >
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
};

export default AdminDashboardDealers;
