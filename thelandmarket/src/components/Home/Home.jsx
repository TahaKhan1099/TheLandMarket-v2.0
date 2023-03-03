import React from 'react'
import HomeBuildingsAnimation from "../../assets/HomeBuildingsAnimation.json"
import Lottie from "lottie-react"
import {Typography, Grid} from '@mui/material'

const Home = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
        <Lottie animationData={HomeBuildingsAnimation}/>
        </Grid>
        <Grid item xs={6}  mt='70px'>
          <Typography variant='h6' style={{marginLeft:'5px', color:'#3A98B9'}}>PLOTS & RESIDENTIAL HOUSES</Typography>
          <Typography variant='h1' style={{textShadow:'0px 4px 4px rgba(0,0,0,0.25)'}} >
            Your Convenience, <br />
            Our Priority
          </Typography>
        </Grid>
      </Grid>
      <Typography variant='h2' mt='150px' align='center'>
        How it Works?
      </Typography>
      
    </>
  )
}

export default Home