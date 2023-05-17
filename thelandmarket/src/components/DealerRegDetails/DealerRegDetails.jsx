import React, { useState } from "react";
import {
  Typography,
  Grid,
  Box,
  TextField,
  createTheme,
  ThemeProvider,
  Container,
  Button,
} from "@mui/material";
import background from "../../assets/images/registration1.jpg";
import { auth } from "../../firebase";

import { useNavigate } from "react-router-dom";

const DealerRegDetails = () => {
  const navigate = useNavigate();
  const [dealerData, setDealerData] = useState({
    name: "",
    age: "",
    phoneNumber: "",
    CNIC: "",
    societyName: "",
    agencyName: "",
    officeAddress: "",
    issuedEmployeeID: "",
    officePhoneNumber: "",
  });

  let name, value;
  const postDealerData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setDealerData({ ...dealerData, [name]: value }); //accessing dynamically
  };

  //connecting with Firebase
  const submitDealerData = async (event) => {
    event.preventDefault();
    const {
      name,
      age,
      phoneNumber,
      CNIC,
      societyName,
      agencyName,
      officeAddress,
      issuedEmployeeID,
      officePhoneNumber,
    } = dealerData;

    if (
      name &&
      age &&
      phoneNumber &&
      CNIC &&
      societyName &&
      agencyName &&
      officeAddress &&
      issuedEmployeeID &&
      officePhoneNumber
    ) {
      const res = await fetch(
        "https://tlm-auth-development-default-rtdb.firebaseio.com/DealerDataRecords.json",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            name,
            age,
            phoneNumber,
            CNIC,
            societyName,
            agencyName,
            officeAddress,
            issuedEmployeeID,
            officePhoneNumber,
            userId: userId,
          }), //making sure the data passed is in string
        }
      );
      if (res) {
        setDealerData({
          name: "",
          age: "",
          phoneNumber: "",
          CNIC: "",
          societyName: "",
          agencyName: "",
          officeAddress: "",
          issuedEmployeeID: "",
          officePhoneNumber: "",
        });
        window.alert("Registered");
        navigate("/dealerDashboard");
      } else {
        window.alert("Form Not Filled Completely");
      }
    } else {
      window.alert("Form Not Filled Completely");
    }
  };
  const currentUser = auth.currentUser;
  const userId = currentUser ? currentUser.uid : null;

  return (
    <Container maxWidth="xl">
      <Box sx={{ position: "relative" }}>
        <img
          src={background}
          alt=""
          style={{
            width: "100%",
            filter: "blur(8px)",
            height: "50rem",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: "5",
          background: "#fff",
          width: "30%",
          height: "80%",
          borderRadius: "10%",
          "@media(max-width: 800px)": {
            marginTop: "3%",
            borderRadius: "1rem",
            width: "45%",
            height: "40rem",
          },
          "@media(max-width: 600px)": {
            marginTop: "3%",
            borderRadius: "1rem",
            width: "45%",
            height: "40rem",
          },
        }}
      >
        <Typography
          sx={{
            color: "#3A98B9",
            textAlign: "center",
            fontSize: "2rem",
            marginTop: "2rem",
            fontFamily: "Poppins",
            "@media(max-width: 800px)": {
              fontSize: "1.5rem",
            },
            "@media(max-width: 600px)": {
              fontSize: "1rem",
            },
          }}
        >
          D-Registration Details
        </Typography>
        <Box
          sx={{
            textAlign: "center",
            marginTop: "2rem",
            "@media(max-width: 800px)": {
              marginTop: "3rem",
            },
          }}
        >
          <form method="POST">
            <Box sx={{ marginTop: "2rem" }}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  float: "left",
                  marginLeft: "1rem",
                  fontSize: "0.8rem",
                  borderBottom: "1px solid #3A98B9",
                }}
              >
                Personal Information:
              </Typography>
              <br />
              <input
                type="text"
                name="name"
                required
                value={dealerData.name}
                onChange={postDealerData}
                placeholder="Name"
                style={{
                  border: "1px solid #c0c0c0",
                  borderRadius: "4px",
                  marginTop: "0.5rem",
                  width: "280px",
                  height: "30px",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              />
            </Box>

            <Box sx={{ marginTop: "0.2rem" }}>
              <input
                type="number"
                name="age"
                value={dealerData.age}
                onChange={postDealerData}
                required
                placeholder="Age"
                style={{
                  border: "1px solid #c0c0c0",
                  borderRadius: "4px",
                  marginTop: "0.5rem",
                  width: "280px",
                  height: "30px",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              />
            </Box>
            <Box sx={{ marginTop: "0.2rem" }}>
              <input
                type="number"
                name="phoneNumber"
                value={dealerData.phoneNumber}
                onChange={postDealerData}
                required
                placeholder="Phone Number"
                style={{
                  border: "1px solid #c0c0c0",
                  borderRadius: "4px",
                  marginTop: "0.5rem",
                  width: "280px",
                  height: "30px",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              />
            </Box>
            <Box sx={{ marginTop: "0.2rem" }}>
              <input
                type="number"
                name="CNIC"
                value={dealerData.CNIC}
                onChange={postDealerData}
                required
                placeholder="CNIC"
                style={{
                  border: "1px solid #c0c0c0",
                  borderRadius: "4px",
                  marginTop: "0.5rem",
                  width: "280px",
                  height: "30px",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              />
            </Box>
            <Box sx={{ marginTop: "1rem" }}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  float: "left",
                  marginLeft: "1rem",
                  fontSize: "0.8rem",
                  borderBottom: "1px solid #3A98B9",
                }}
              >
                Organization Details:
              </Typography>
              <br />
              {/* <input
                type="text"
                name="societyName"
                value={dealerData.societyName}
                onChange={postDealerData}
                required
                disabled
                placeholder="D-17"
                style={{
                  border: "1px solid #ffffff",
                  borderRadius: "4px",
                  marginTop: "0.5rem",
                  width: "280px",
                  height: "30px",
                  boxSizing: "border-box",
                  textAlign: "center",
                  background: "#ffffff",
                }}
              /> */}
              <select
                name="societyName"
                id="societyName"
                required
                value={dealerData.societyName}
                onChange={postDealerData}
                style={{
                  border: "1px solid #c0c0c0",
                  borderRadius: "4px",
                  marginTop: "0.5rem",
                  width: "280px",
                  height: "30px",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              >
                <option value="" disabled selected>
                  Select Society Name:
                </option>

                <option value="D17">D17</option>
              </select>
            </Box>
            <Box sx={{ marginTop: "0.2rem" }}>
              <input
                type="text"
                name="agencyName"
                value={dealerData.agencyName}
                onChange={postDealerData}
                required
                placeholder="Agency Name"
                style={{
                  border: "1px solid #c0c0c0",
                  borderRadius: "4px",
                  marginTop: "0.5rem",
                  width: "280px",
                  height: "30px",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              />
            </Box>
            <Box sx={{ marginTop: "0.2rem" }}>
              <input
                type="text"
                name="officeAddress"
                value={dealerData.officeAddress}
                onChange={postDealerData}
                required
                placeholder="Office Address"
                style={{
                  border: "1px solid #c0c0c0",
                  borderRadius: "4px",
                  marginTop: "0.5rem",
                  width: "280px",
                  height: "30px",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              />
            </Box>
            <Box sx={{ marginTop: "0.2rem" }}>
              <input
                type="text"
                name="issuedEmployeeID"
                value={dealerData.issuedEmployeeID}
                onChange={postDealerData}
                required
                placeholder="Office Issued Employee ID"
                style={{
                  border: "1px solid #c0c0c0",
                  borderRadius: "4px",
                  marginTop: "0.5rem",
                  width: "280px",
                  height: "30px",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              />
            </Box>
            <Box sx={{ marginTop: "0.2rem" }}>
              <input
                type="text"
                name="officePhoneNumber"
                value={dealerData.officePhoneNumber}
                onChange={postDealerData}
                required
                placeholder="Office Phone Number"
                style={{
                  border: "1px solid #c0c0c0",
                  borderRadius: "4px",
                  marginTop: "0.5rem",
                  width: "280px",
                  height: "30px",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              />
            </Box>
            <Button
              sx={{
                backgroundColor: "#3A98B9",
                fontFamily: "Poppins",
                width: "12rem",
                color: "#ffffff",
                marginTop: "2rem",
                border: " 1px solid #3A98B9",
                "&:hover": { color: "#3A98B9", backgroundColor: "#ffffff" },
              }}
              type="submit"
              onClick={submitDealerData}
            >
              SUBMIT
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default DealerRegDetails;
