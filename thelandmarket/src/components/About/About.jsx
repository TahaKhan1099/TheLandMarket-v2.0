import React from "react";
import { Container, Paper, Typography, Grid } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="xl">
      <Typography
        variant="h3"
        sx={{
          marginTop: "10rem",
          textAlign: "center",
          fontFamily: "Poppins",
        }}
      >
        About Us
      </Typography>
      <Grid mt={5}>
        <Paper
          variant="outlined"
          square
          sx={{ width: "80%", margin: "auto", padding: '3rem' }}
        >
          <Typography sx={{ fontFamily: "Poppins", textAlign: 'center', fontSize: '1.2rem' }}>
            Recently, interest in real-estate market has increased.
            Consequently, systems to identify the needs and demand of people
            have been actively studied, where information is actively collected
            and processed by various institutes. In particular, among such
            studies, Zameen.com has played its active part in collecting
            information from various societies and the demand of the people. The
            already existing platforms provide a user-friendly real estate
            experience.
          </Typography> <br /> <br />
          <Typography variant="h6" sx={{ fontFamily: "Poppins" }}>Our Aim:</Typography><br />
          <Typography sx={{ fontFamily: "Poppins", textAlign: 'justify' }}>
            TheLandMarket.pk provides a modified visual version of all the
            pre-existing similar platforms, hence improving the user-experience
            drastically and making a remarkable change in the world of
            real-estate market.
          </Typography> <br /><br />
          <Typography variant="h6" sx={{ fontFamily: "Poppins" }}>What we Provide:</Typography><br />
          <Typography sx={{ fontFamily: "Poppins", textAlign: 'justify' }}>
            What our real estate business model respresent is that we made the
            network easy through visualization of the approved society maps.
            Thus it will be more efficient, user-friendly and appealing from the
            previous business models in market. Our first purpose of doing
            visualization in the real estate is to help the buyer in decision
            making. We will be using data analysis to show our buyer his needs.
            Through data analysis we will show our buyers the rating of that
            location so that he knows which place is rated the best for him to
            buy. Through Web Traffic Analysis we will be showing him graphical
            representation of the trends such as most searched area. We will
            also show him the graphical representation of annual trends in
            prices which will help him in analyzing the value of that land. We
            will also be using Recommendation system will will further help our
            buyers in their decision making. Based on his searches and area of
            interest we will suggest him plots or services related to the one
            he’s already looking for. The second purpose of TLM is to help the
            dealers in analyzing their progress. Dealers will have their own
            Dashboard. Through dashboard they can see the sales made from their
            end, all the plots that they currently have available and which
            plots they have already sold. They can also know which meetings they
            have pending on which date and time with their clients. They can
            also analyze their review rating and see if their buyers were happy
            in dealing with him.
          </Typography>
        </Paper>
      </Grid>
    </Container>
  );
};

export default About;
