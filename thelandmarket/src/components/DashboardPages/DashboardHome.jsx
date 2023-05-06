import React from 'react'
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";

import { Container, Box, Button, Typography } from '@mui/material';

const DashboardHome = () => {
  const {user} = UserAuth();
  return (
    <Container maxWidth="xl">
    <Box sx={{marginTop: '10%', marginLeft: '10%'}}>
      <Typography>Dealer Dashboard</Typography>
      <Typography> User Email: {user && user.email}</Typography>
    </Box>
  </Container>
   
  )
}

export default DashboardHome