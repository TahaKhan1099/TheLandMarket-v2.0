import React from "react";
import { AppBar, Typography, Toolbar } from "@mui/material";
import logoNew from '../../assets/images/logoNew.png'

const Navbar = () => {
  return (
    <>
      <AppBar style={{backgroundColor: '#ffffff'}}>
        <Toolbar>
          <img src={logoNew} alt="#" style={{width:'50px', marginLeft:'1.5%'}}/>
          <Typography variant="h5">TheLandMarket</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
