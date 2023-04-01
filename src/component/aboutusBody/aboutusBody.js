import React from 'react';
import { Grid } from '@mui/material';
import Profile1 from "../../assets/Profile1.png";

const AboutusBody = () => {
    return (
      <>
      <Grid container xs={12}>
        <Grid item  sx={{border:"2px solid red"}} xs={3} >
            <img src={Profile1} width="100%"></img>
        </Grid>
        <Grid item xs={9}>
            <h1>data will be seen here</h1>
        </Grid>

      </Grid>
      
      
      </>
    )
}

export default AboutusBody
