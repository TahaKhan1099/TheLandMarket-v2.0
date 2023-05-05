import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../Context/AuthContext'
import { Container, Box, Button, Typography } from '@mui/material';

const SocietyDashboard = () => {
  const navigate = useNavigate();
  const {user, logout} = UserAuth();
  const handleLogout = async () => {
		try {
			await logout();
			navigate("/home");
			window.alert("You are logged out");
			console.log("You are logged out");
		} catch (e) {
			console.log(e.message);
		}
	};

  return (
    <Container maxWidth="xl">
      <Box mt={20}>
        <Typography> User Email: {user && user.email}</Typography>
        <Button onClick={handleLogout} >LogOut</Button>
      </Box>
    </Container>
  )
}

export default SocietyDashboard