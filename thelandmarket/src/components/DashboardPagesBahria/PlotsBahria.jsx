import { Container, Box, Typography, Paper, Button } from "@mui/material";

import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import { UserAuth } from "../../Context/AuthContext";
import { ref, onValue, push, set, remove } from "firebase/database";


const PlotsBahria = () => {
  
  // State variables
  const { user } = UserAuth() || {};
  const [area, setArea] = useState("")
  const [dealer_name, setDealer_name] = useState("")
  const [price, setPrice] = useState("")
  const [contact_number, setContact_number] = useState("")
  const [address, setAddress] = useState("")
  // const [dealerName, setDealerName] = useState("");
  // const [plotPrice, setPlotPrice] = useState("");
  // const [dealerPhoneNumber, setDealerPhoneNumber] = useState("");
  // const [plotSize, setPlotSize] = useState("");
  const [plotId, setPlotId] = useState("");
  // const [plotLocation, setPlotLocation] = useState("");
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
    const dealerPlotsRef = ref(db, `bahria_phase3/${plotId}`);

    //new unique key for the plot
    // const newPlotRef = push(dealerPlotsRef);

    //creating a new plot object
    const newPlot = {
      area,
      dealer_name,
      price,
      contact_number,
      plotId,
      address,
    };

    //// Setting the new plot object at the new key
    set(dealerPlotsRef, newPlot);

    // set(ref(dealerPlotsRef, plotId), newPlot);

    // Clearing the form fields
    setArea("");
    setDealer_name("");
    setPrice("");
    setContact_number("");
    setPlotId("");
    setAddress("");

    window.alert("Plot added");
  }; 

  //fetching the dealer's plots from the database
  const fetchPlots = () => {
    const currentDealerUserId = auth.currentUser.uid;

    //reference to the dealer's plots node in the database
    const dealerPlotsRef = ref(db, `bahria_phase3`);

    // Listening for changes to the dealer's plots node
    onValue(dealerPlotsRef, (snapshot) => {
      // Geting the plots data as an object
      const plotsData = snapshot.val() || {};

      // Converting the plots object to an array and storing it in state
      const plotsArray = Object.entries(plotsData).map(([plotId, data]) => ({
        plotId,
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
    const dealerPlotsRef = ref(db, `bahria_phase3/${id}`);
    remove(dealerPlotsRef);

    //removing the plots from the state array
    // setPlots((prevPlots)=> prevPlots.filter((plot)=>plot.plotId !== id))
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
            Society: Bahria Town Phase 3
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
                    name="dealer_name"
                    required
                    value={dealer_name}
                    onChange={(e) => setDealer_name(e.target.value)}
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
                    name="contact_number"
                    required
                    value={contact_number}
                    onChange={(e) => setContact_number(e.target.value)}
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
                    name="area"
                    required
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="Plot Size/Area"
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
                    name="address"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Location/Address"
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
                    name="price"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
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
                <div key={plot.plotId}>
                  <input
                    type="checkbox"
                    value={plot.plotId}
                    onChange={() => handleDelete(plot.plotId)}
                  />
                  <span style={{padding: '5px'}}>{plot.plotId}</span>
                  <span style={{padding: '5px'}}>{plot.name}</span>
                  <span style={{padding: '5px'}}>{plot.price}</span>
                  <span style={{padding: '5px'}}>{plot.contact_number}</span>
                  <span style={{padding: '5px'}}>{plot.area}</span>
                  <span style={{padding: '5px'}}>{plot.address}</span>
                </div>
              ))}
            </Paper>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default PlotsBahria