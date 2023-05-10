import React, {useState} from "react";
import {
  Typography,
  Box,
  Container,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import { UserAuth } from "../../Context/AuthContext";
import background from "../../assets/images/LogInBackground.jpg";
const SocietyLogin = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

  const {signIn} = UserAuth();
  const handleSubmit = async (e) =>{
    e.preventDefault();
    setError("");
    try{
      await signIn(email,password);
      navigate('/societyDashboard');
      console.log(signIn);
    }
    catch(e) {
      setError(e.message);
      console.log(e.message);
      window.alert("Failed to LogIN")
    }
  };

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
          height: "75%",
          borderRadius: "10%",
          "@media(max-width: 800px)": {
            marginTop: "10%",
            borderRadius: "1rem",
            width: "45%",
          },
          "@media(max-width: 600px)": {
            marginTop: "10%",
            borderRadius: "1rem",
            width: "65%",
          },
        }}
      >
        {/* <Box>
          <img src="/src/assets/images/logoNew.PNG" width={60} />
        </Box> */}
        <Typography
          sx={{
            color: "#3A98B9",
            textAlign: "center",
            fontSize: "2rem",
            marginTop: "2rem",
            fontFamily: "Poppins",
          }}
        >
          Society Login
        </Typography>
        <Box
          sx={{
            textAlign: "center",
            marginTop: "7rem",
            "@media(max-width: 800px)": {
              marginTop: "3rem",
            },
          }}
        >
          <form onSubmit={handleSubmit}>
          <Box sx={{ marginTop: "2rem" }}>
            <input
                type="email"
                required
                placeholder="Enter Your Email"
                style={{
                  border: "1px solid #c0c0c0",
                  borderRadius: "4px",
                  marginTop: '0.5rem',
                  width: "280px",
                  height: "48px",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </Box>

            <Box sx={{ marginTop: "2rem" }}>
            <input
                type="password"
                required
                placeholder="Enter Your Password"
                style={{
                  border: "1px solid #c0c0c0",
                  borderRadius: "4px",
                  marginTop: '0.5rem',
                  width: "280px",
                  height: "48px",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
                onChange={(e)=>setPassword(e.target.value)}
                
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
            >
              SUBMIT
            </Button>
          </form>
        </Box>
        <Typography sx={{ textAlign: "center", marginTop: "3rem" }}>
          ———— OR ————{" "}
        </Typography>
        <Typography sx={{ textAlign: "center", fontSize: "1rem" }}>
          Log In with Google
        </Typography>
        <Button sx={{ display: "block", margin: "auto", marginTop: "1rem" }}>
          <GoogleIcon color="#primary" />
        </Button>
      </Box>
    </Container>
  );
};

export default SocietyLogin;
