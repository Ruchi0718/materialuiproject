import React from "react";
import Profile1 from "../../assets/Profile1.png";
import {
  Card,
  CardMedia,
  Grid,
  Box,
  Container,
  Button,
  Typography,
} from "@mui/material";

const AboutusBody = () => {
  return (
    <>
      <Container sx={{border:"2px solid  #C0C0C0"}}>
        <Grid container>
          <Grid item  xs={2}>
            <Card sx={{ maxWidth: 300, height: 200 }}>
              <CardMedia
                component="img"
                // sx={{ margin: "auto" }}
                image={Profile1}
                height="200px"
                width="300px"
                alt="textimage"
              />
            </Card>
          </Grid>
          <Box sx={{ height: "40%", width: "60%" }}>
            <Grid  m={2}xs={12}>
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                MEMBERS ID : 132456
              </Typography>
            </Grid>
            <Grid container m={1}>
              <Grid item sx={{ margin: "auto" }} xs={2}>
                <Typography sx={{fontSize:"15px"}}>Age</Typography>
              </Grid>
              <Grid item sx={{ margin: "auto" }} xs={2}>
              <Typography sx={{fontSize:"15px"}}>25</Typography>
              </Grid>
              <Grid item sx={{ margin: "auto" }} xs={2}>
              <Typography sx={{fontSize:"15px"}}>Height</Typography>
              </Grid>
              <Grid item sx={{ margin: "auto" }} xs={2}>
              <Typography sx={{fontSize:"15px"}}>5.5</Typography>
              </Grid>
            </Grid>
            <Grid container m={1}>
              <Grid item sx={{ margin: "auto" }} xs={2}>
              <Typography sx={{fontSize:"15px"}}>Relgion</Typography>
              </Grid>
              <Grid item sx={{ margin: "auto" }} xs={2}>
              <Typography sx={{fontSize:"15px"}}>Hindu</Typography>
              </Grid>
              <Grid item sx={{ margin: "auto" }} xs={2}>
                Caste
              </Grid>
              <Grid item sx={{ margin: "auto" }} xs={2}>
                Tamil
              </Grid>
            </Grid>{" "}
            <Grid container m={1}>
              <Grid item sx={{ margin: "auto" }} xs={2}>
                Language
              </Grid>
              <Grid item sx={{ margin: "auto" }} xs={2}>
                Tamil
              </Grid>
              <Grid item sx={{ margin: "auto" }} xs={2}>
                Marital Status
              </Grid>
              <Grid item sx={{ margin: "auto" }} xs={2}>
                Unmarried
              </Grid>
            </Grid>
            <Grid container m={1}>
              <Grid item sx={{ margin: "auto" }} xs={2}>
                Location
              </Grid>
              <Grid item sx={{ margin: "auto" }} xs={2}>
                Tamilnadu
              </Grid>
              <Grid item sx={{ margin: "auto" }} xs={2}>
                Height
              </Grid>
              <Grid item sx={{ margin: "auto" }} xs={2}>
                5.5
              </Grid>
            </Grid>
            <Grid container >
              <Grid item xs={12}>
              <Button  sx={{color:"red",marginLeft:"70%"}}variant="text" ><u>View Profile</u></Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default AboutusBody;
