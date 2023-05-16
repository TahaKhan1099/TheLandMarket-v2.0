import { Container, Box, Typography, Paper, Button } from "@mui/material";

import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import { UserAuth } from "../../Context/AuthContext";
import { ref, onValue, push, set, remove } from "firebase/database";


const Plots = () => {
 
  
  // State variables
  const { user } = UserAuth() || {};
  const [dealerName, setDealerName] = useState("");
  const [plotPrice, setPlotPrice] = useState("");
  const [dealerPhoneNumber, setDealerPhoneNumber] = useState("");
  const [plotSize, setPlotSize] = useState("");
  const [plotId, setPlotId] = useState("");
  const [plotLocation, setPlotLocation] = useState("");
  const [numberOfPlots, setNumberOfPlots] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      console.log("User not logged in");
      return;
    }
    window.alert("Plot added");
   
  };
  // State variable for the dealer's plots
  const [plots, setPlots] = useState([]); //setting it to Array instead of Obj to make the map function work

  const addPlot = () => {
    if(!plotId){
      window.alert("Please enter a Plot ID")
      return;
    }
    //ID of the currently signed-in dealer
    const currentDealerUserId = auth.currentUser.uid;

    //reference to the dealer's plots node in the database
    const dealerPlotsRef = ref(db, `plots/${currentDealerUserId}`);

    //new unique key for the plot
    const newPlotRef = push(dealerPlotsRef);

    //creating a new plot object
    const newPlot = {
      dealerName,
      plotPrice,
      dealerPhoneNumber,
      plotSize,
      plotId,
      plotLocation,
    };

    //// Setting the new plot object at the new key
    set(newPlotRef, newPlot);

    // set(ref(dealerPlotsRef, plotId), newPlot);

    // Clearing the form fields
    setDealerName("");
    setPlotPrice("");
    setDealerPhoneNumber("");
    setPlotSize("");
    setPlotId("");
    setPlotLocation("");

    window.alert("Plot added");
  }; 

  //fetching the dealer's plots from the database
  const fetchPlots = () => {
    const currentDealerUserId = auth.currentUser.uid;

    //reference to the dealer's plots node in the database
    const dealerPlotsRef = ref(db, `plots/${currentDealerUserId}`);

    // Listening for changes to the dealer's plots node
    onValue(dealerPlotsRef, (snapshot) => {
      // Geting the plots data as an object
      const plotsData = snapshot.val() || {};

      // Converting the plots object to an array and storing it in state
      const plotsArray = Object.entries(plotsData).map(([id, data]) => ({
        id,
        ...data,
      }));
      setPlots(plotsArray);
      setNumberOfPlots(plotsArray.length);
    });
  };

  // Fetching the dealer's plots when the component mounts
  useEffect(() => {
    fetchPlots();
  }, []);

  const handleDelete = (id) => {
    const currentDealerUserId = auth.currentUser.uid;
    const dealerPlotsRef = ref(db, `plots/${currentDealerUserId}/${id}`);
    remove(dealerPlotsRef);
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "5rem",
          display: "flex",
        }}
      >
        <Typography
          sx={{ color: "#3A98B9", fontSize: "2rem", fontFamily: "Poppins" }}
        >
          {" "}
          Plots Dashboard
        </Typography>
      </Box>
      <Box sx={{ width: "100%", display: "flex", marginTop: "4rem" }}>
        <Box sx={{ width: "50%" }}>
          <Typography
            sx={{
              marginTop: "1rem",
              color: "#3A98B9",
              fontSize: "1.2rem",
              marginLeft: "5rem",
            }}
          >
            (agency name here)
          </Typography>
          <Typography
            sx={{
              marginTop: "1rem",
              color: "#3A98B9",
              fontSize: "1rem",
              marginLeft: "5rem",
            }}
          >
            (society name here)
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: "1",
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Paper
            elevation={1}
            sx={{
              padding: "4",
              width: "15rem",
              height: "6rem",
            }}
          >
            <Typography
              sx={{
                textAlign: "left",
                margin: "2rem 0 0 2rem",
                fontFamily: "Poppins",
                display: "inline-flex",
              }}
            >
              Plots Added:{" "}
              <Typography
                sx={{
                  marginLeft: "1rem",
                  fontWeight: "bold",
                  color: "#3A98B9",
                  fontFamily: "Poppins",
                }}
              >{numberOfPlots}</Typography>
            </Typography>
          </Paper>
        </Box>
      </Box>

      <Box sx={{ width: "100%", display: "flex", marginTop: "3rem" }}>
        <Box sx={{ width: "50%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Paper
              elevation={1}
              sx={{
                padding: "4",
                width: "30rem",
                height: "25rem",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  textAlign: "center",
                  marginTop: "1rem",
                }}
              >
                Add New Plot
              </Typography>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addPlot();
                }}
              >
                <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
                  <input
                    type="text"
                    name="dealerName"
                    required
                    value={dealerName}
                    onChange={(e) => setDealerName(e.target.value)}
                    placeholder="Dealer Name"
                    style={{
                      border: "1px solid #c0c0c0",
                      borderRadius: "4px",
                      marginTop: "0.5rem",
                      width: "220px",
                      height: "30px",
                      boxSizing: "border-box",
                      textAlign: "center",
                    }}
                  />{" "}
                  <br />
                  <input
                    type="number"
                    name="dealerPhoneNumber"
                    required
                    value={dealerPhoneNumber}
                    onChange={(e) => setDealerPhoneNumber(e.target.value)}
                    placeholder="Phone Number"
                    style={{
                      border: "1px solid #c0c0c0",
                      borderRadius: "4px",
                      marginTop: "0.5rem",
                      width: "220px",
                      height: "30px",
                      boxSizing: "border-box",
                      textAlign: "center",
                    }}
                  />{" "}
                  <br />
                  <input
                    type="text"
                    name="plotId"
                    required
                    value={plotId}
                    onChange={(e) => setPlotId(e.target.value)}
                    placeholder="Plot ID"
                    style={{
                      border: "1px solid #c0c0c0",
                      borderRadius: "4px",
                      marginTop: "0.5rem",
                      width: "220px",
                      height: "30px",
                      boxSizing: "border-box",
                      textAlign: "center",
                    }}
                  />{" "}
                  <br />
                  <input
                    type="text"
                    name="plotSize"
                    required
                    value={plotSize}
                    onChange={(e) => setPlotSize(e.target.value)}
                    placeholder="Plot Size"
                    style={{
                      border: "1px solid #c0c0c0",
                      borderRadius: "4px",
                      marginTop: "0.5rem",
                      width: "220px",
                      height: "30px",
                      boxSizing: "border-box",
                      textAlign: "center",
                    }}
                  />{" "}
                  <br />
                  <input
                    type="text"
                    name="plotLocation"
                    required
                    value={plotLocation}
                    onChange={(e) => setPlotLocation(e.target.value)}
                    placeholder="Location"
                    style={{
                      border: "1px solid #c0c0c0",
                      borderRadius: "4px",
                      marginTop: "0.5rem",
                      width: "220px",
                      height: "30px",
                      boxSizing: "border-box",
                      textAlign: "center",
                    }}
                  />{" "}
                  <br />
                  <input
                    type="text"
                    name="plotPrice"
                    required
                    value={plotPrice}
                    onChange={(e) => setPlotPrice(e.target.value)}
                    placeholder="Plot Price"
                    style={{
                      border: "1px solid #c0c0c0",
                      borderRadius: "4px",
                      marginTop: "0.5rem",
                      width: "220px",
                      height: "30px",
                      boxSizing: "border-box",
                      textAlign: "center",
                    }}
                  />{" "}
                  <br />
                  <Button
                    sx={{
                      backgroundColor: "#3A98B9",
                      fontFamily: "Poppins",
                      width: "8rem",
                      height: "2rem",
                      color: "#ffffff",
                      marginTop: "2rem",
                      border: " 1px solid #3A98B9",
                      "&:hover": {
                        color: "#3A98B9",
                        backgroundColor: "#ffffff",
                      },
                    }}
                    type="submit"
                    
                  >
                    SUBMIT
                  </Button>
                  
                </Box>
              </form>
            </Paper>
          </Box>
        </Box>
        <Box sx={{ flexGrow: "1" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Paper
              elevation={1}
              sx={{
                padding: "4",
                width: "40rem",
                height: "25rem",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  textAlign: "center",
                  marginTop: "1rem",
                }}
              >
                Added Plots Details
              </Typography>
              
              {plots.map((plot) => (
                <div key={plot.id}>
                  <input
                    type="checkbox"
                    value={plot.id}
                    onChange={(e) => handleDelete(e.target.value)}
                  />
                  <span style={{padding: '5px'}}>{plot.plotId}</span>
                  <span style={{padding: '5px'}}>{plot.dealerName}</span>
                  <span style={{padding: '5px'}}>{plot.plotPrice}</span>
                  <span style={{padding: '5px'}}>{plot.dealerPhoneNumber}</span>
                  <span style={{padding: '5px'}}>{plot.plotSize}</span>
                  <span style={{padding: '5px'}}>{plot.plotLocation}</span>
                </div>
              ))}
            </Paper>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Plots;
