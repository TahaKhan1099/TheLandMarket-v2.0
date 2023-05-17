import React, { useState } from "react";
import { db, auth } from "../../firebase";
import { child, ref, get } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { Container, Box, Typography, Button } from "@mui/material";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   const AdminsRef = ref(db, "Admins");
  //   get(AdminsRef)
  //     .then((snapshot) => {
  //       const Admins = snapshot.val();
  //       console.log("Retrieved admins:", Admins);

  //       if(Admins?.[email] && Admins[email].password === password){
  //           console.log("Admin Logged in Successful")
  //           navigate("/adminDashboard")
  //       } else{
  //           window.alert("Invalid Email/Password")
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error retrieving admin credentials: ", error);
  //     });
  // };

  const handleLogin = (event) => {
    event.preventDefault();
    const AdminsRef = ref(db, "Admins");
    get(AdminsRef)
      .then((snapshot) => {
        const admins = snapshot.val();
        console.log("Retrieved admins:", admins);

        const lowercaseEmail = email.toLowerCase(); // Convert entered email to lowercase

        // Loop through the admins to find a match
        let adminId = null;
        Object.keys(admins).forEach((key) => {
          if (
            admins[key].email === lowercaseEmail &&
            admins[key].password === password
          ) {
            adminId = key;
          }
        });

        if (adminId) {
          console.log("Admin Logged in Successful");
          navigate("/adminDashboard");
        } else {
          window.alert("Invalid Email/Password");
        }
      })
      .catch((error) => {
        console.error("Error retrieving admin credentials: ", error);
      });
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          marginTop: "10rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleLogin}>
          <Box>
            <Typography>Email: </Typography>
            <input type="email" value={email} onChange={handleEmailChange} />
          </Box>
          <Box>
            <Typography>Password: </Typography>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Box>
          <Box
            sx={{
              marginTop: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button type="submit">Login</Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default AdminLogin;
