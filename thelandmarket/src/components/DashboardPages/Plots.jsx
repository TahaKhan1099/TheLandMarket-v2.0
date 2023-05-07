import { Container, Box, Typography, Paper, Button } from "@mui/material";

import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";

const Plots = () => {
  const [newPlot, setNewPlot] = useState({
    dealerName: "",
    dealerPhoneNumber: "",
    plotSize: "",
    plotLocation: "",
    plotPrice: "",
    plotId: "",
  });

  

  const [numPlots, setNumPlots] = useState(0);

  const currentUser = auth.currentUser;
  const userId = currentUser ? currentUser.uid : null;

  let name, value;

  
  const fetchNumPlots = async () => {
    const snapshot = await fetch(
      `https://tlm-auth-development-default-rtdb.firebaseio.com/plots.json?orderBy="userId"&equalTo="${newPlot.userId}"`,
     
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const data = await snapshot.json();
    if (data) {
      setNumPlots(Object.keys(data).length);
    }
  };
  useEffect(() => {
    fetchNumPlots();
  }, []);


  // console.log(userId);
  // const fetchPlotsCount = async (userId) =>{
  //   try{
  //     const response = await fetch(
  //       `https://tlm-auth-development-default-rtdb.firebaseio.com/plots.json?orderBy='userId'&equalTo='${userId}'`

  //     );
  //     const data = await response.json();
  //     const count = Object.keys(data).length;
  //     return count;
  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   }
  // }

  // useEffect(()=>{
  //   const fetchCount = async () =>{
  //     const count = await fetchPlotsCount(userId);
  //     setPlotsCount(count);
  //   };
  //   fetchCount();
  // },[userId])

  const postPlot = (event) => {
    name = event.target.name;
    value = event.target.value;
    setNewPlot({ ...newPlot, [name]: value });
  };

  const submitPlot = async (event) => {
    event.preventDefault(console.log("Add New Plot Form not Filled"));
    const {
      dealerName,
      dealerPhoneNumber,
      plotSize,
      plotLocation,
      plotPrice,
      plotId,
    } = newPlot;

    if (
      dealerName &&
      dealerPhoneNumber &&
      plotSize &&
      plotLocation &&
      plotPrice &&
      plotId
    ) {
      const res = await fetch(
        `https://tlm-auth-development-default-rtdb.firebaseio.com/plots/${plotId}.json`, //used backticks to use string interpolation
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            dealerName,
            dealerPhoneNumber,
            plotSize,
            plotLocation,
            plotPrice,
            userId: userId,
          }),
        }
      );
      if (res) {
        setNewPlot({
          dealerName: "",
          dealerPhoneNumber: "",
          plotSize: "",
          plotLocation: "",
          plotPrice: "",
          plotId: "",
        });
        window.alert("Plot Added");
        fetchNumPlots(); 
        console.log(setNewPlot);
      } else {
        window.alert("Plot not Added");
      }
    }
  };

  // useEffect hook to fetch the number of plots added by the current user from the database

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
              >
               {numPlots}
              </Typography>
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
              <form method="POST">
                <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
                  <input
                    type="text"
                    name="dealerName"
                    required
                    value={newPlot.dealerName}
                    onChange={postPlot}
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
                    value={newPlot.dealerPhoneNumber}
                    onChange={postPlot}
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
                    value={newPlot.plotId}
                    onChange={postPlot}
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
                    value={newPlot.plotSize}
                    onChange={postPlot}
                    placeholder="Phone Size"
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
                    value={newPlot.plotLocation}
                    onChange={postPlot}
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
                    value={newPlot.plotPrice}
                    onChange={postPlot}
                    placeholder="Phone Price"
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
                    onClick={submitPlot}
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
            </Paper>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Plots;
