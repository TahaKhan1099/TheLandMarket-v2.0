import React, {useState} from "react";


import { AppBar, Typography, Toolbar, Tabs, Tab, Button, useTheme,useMediaQuery } from "@mui/material";

import logoNew from '../../assets/images/logoNew.png'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [value,setValue]=useState()
  const navigate = useNavigate()

  const NTAbout = () =>{
    navigate('/about')
  }
  const NTHome = () =>{
    navigate('/')
  }
  const NTDiscover = () =>{
    navigate('/discover')
  }
  const NTDashboards = () =>{
    navigate('/dashboards')
  }
  const NTSocieties = () =>{
    navigate('/societies')
  }

  return (
    <>
      <AppBar sx={{backgroundColor: '#ffffff'}}>
        <Toolbar>
          <img src={logoNew} alt="#" style={{width:'50px', marginLeft:'1.5%'}}/>
          <Tabs sx={{margin:'auto'}} indicatorColor="#3A98B9" value={value} onChange={(e,value)=>setValue(value)}>
            <Tab label="Home" onClick={NTHome} sx={{color:'#000000', fontFamily:'Poppins', fontSize:'1.2rem', marginTop:'0.5rem', '&:hover':{textDecoration:'underline #3A98B9'}}}/>
            <Tab label="About" onClick={NTAbout} path='/about' sx={{color:'#000000', fontFamily:'Poppins', fontSize:'1.2rem', marginTop:'0.5rem', '&:hover':{textDecoration:'underline #3A98B9'}}}/>
            <Tab label="Discover" onClick={NTDiscover} sx={{color:'#000000', fontFamily:'Poppins', fontSize:'1.2rem', marginTop:'0.5rem', '&:hover':{textDecoration:'underline #3A98B9'}}}/>
            <Tab label="Dashboards" onClick={NTDashboards} sx={{color:'#000000', fontFamily:'Poppins', fontSize:'1.2rem', marginTop:'0.5rem', '&:hover':{textDecoration:'underline #3A98B9'}}}/>
            <Tab label="Societies" onClick={NTSocieties} sx={{color:'#000000', fontFamily:'Poppins', fontSize:'1.2rem', marginTop:'0.5rem', '&:hover':{textDecoration:'underline #3A98B9'}}}/>
          </Tabs>
          <Button sx={{backgroundColor:'#ffffff', fontFamily:'Poppins' ,color:'#3A98B9', border:' 1px solid #3A98B9', '&:hover':{color:'#ffffff', backgroundColor:'#3A98B9'}}}>LOG IN</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
