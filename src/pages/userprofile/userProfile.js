import React from "react";
import {
  Grid,
  Typography,
  Icon,
  Container,
  Divider,
  Box,
  Paper,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Profile33 from "../../assets/profile33.png";
import Imagecouple1 from "../../assets/imagecouple1.jpg";
import Imagecouple22 from "../../assets/imagecouple22.avif";
import "./userProfile.css";
const UserProfile = () => {
  return (
    <>
      <Container>
        <Grid container m={1}>
          <Grid item>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "bold", color: "grey" }}
            >
              Home
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Icon sx={{ width: 20, height: 20, color: "grey" }}>
                <ArrowRightIcon />
              </Icon>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "bold", color: "grey" }}
            >
              Mens Top wear
            </Typography>
          </Grid>
        </Grid>
        <Grid container m={1}>
          <Grid item xs={12}>
            <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
              User Profile
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} lg={6} sm={12}>
            <Carousel>
              <div>
                <img
                  src={Profile33}
                  height="300px"
                  width="350px"
                  alt=""
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div>
                <img
                  src={Imagecouple1}
                  height="300px"
                  width="350px"
                  alt=""
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div>
                <img
                  src={Imagecouple22}
                  height="300px"
                  width="350px"
                  alt=""
                  style={{ borderRadius: "5px" }}
                />
              </div>
            </Carousel>
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
              Suraj Sharma
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: "100%",
                  height: 200,
                },
              }}
            >
              <Paper elevation={0}>
                <Grid container m={1}>
                  <Grid
                    item
                    sx={{ margin: "auto" }}
                    lg={2}
                    xs={2}
                    sm={2}
                    md={2}
                  >
                    <Typography sx={{ fontSize: "15px" }}>Age</Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{ margin: "auto" }}
                    lg={2}
                    xs={2}
                    sm={2}
                    md={2}
                  >
                    <Typography sx={{ fontSize: "15px" }}>25</Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{ margin: "auto" }}
                    lg={2}
                    xs={2}
                    sm={2}
                    md={2}
                  >
                    <Typography sx={{ fontSize: "15px" }}>Height</Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{ margin: "auto" }}
                    lg={2}
                    xs={2}
                    sm={2}
                    md={2}
                  >
                    <Typography sx={{ fontSize: "15px" }}>5.5</Typography>
                  </Grid>
                </Grid>
                <Grid container m={1}>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Relgion</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Hindu</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Caste</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Tamil</Typography>
                  </Grid>
                </Grid>{" "}
                <Grid container m={1}>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Language</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Tamil</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>
                      Marital Status
                    </Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Unmarried</Typography>
                  </Grid>
                </Grid>
                <Grid container m={1}>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Location</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Tamilnadu</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>Height</Typography>
                  </Grid>
                  <Grid item sx={{ margin: "auto" }} xs={2}>
                    <Typography sx={{ fontSize: "15px" }}>5.5</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
            <Divider />
            <br></br>
            <Grid container>
              <Grid item xs={12} sm={12} lg={6}>
                <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                  Financial Background
                </Typography>
              </Grid>

              <Box
                sx={{
                  width: "100%",
                  height: 200,
                }}
              >
                <Paper elevation={0} >
                  <Grid container m={1}>
                    <Grid item lg={2} xs={2} sm={2}>
                    <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                        Family
                      </Typography>
                    </Grid>
                    <Grid item lg={10} xs={10} sm={10}>
                      Middle class
                    </Grid>
                  </Grid>
                  <Grid container m={1}>
                    <Grid item lg={2} xs={2} sm={2}>
                    <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                        Income
                      </Typography>
                    </Grid>
                    <Grid item lg={10} xs={10} sm={10}>
                       45000 /-PM
                    </Grid>
                  </Grid>{" "}
                  <Grid container m={1}>
                    <Grid item lg={2} xs={2} sm={2}>
                    <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                        Job
                      </Typography>
                    </Grid>
                    <Grid item lg={10} xs={10} sm={10}>
                      Developer
                    </Grid>
                  </Grid>{" "}
                  <Grid container m={1}>
                    <Grid item lg={2} xs={2} sm={2}>
                      <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                        Place
                      </Typography>
                    </Grid>
                    <Grid item lg={10} xs={10} sm={10}>
                      Delhi
                    </Grid>
                  </Grid>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <br></br>
        <br></br>
        <br></br>

        <Grid container m={1}>
          <Grid item xs={12}>
            <Typography
              sx={{ color: "#3759B5", fontSize: "15px", fontWeight: "bold" }}
            >
              About
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <br></br>

        <Grid container m={1}>
          <Grid item xs={12}>
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
              About Suraj
            </Typography>
          </Grid>
          <br></br>
          <br></br>

          <Grid item xs={12}>
            <Typography sx={{ fontSize: "15px" }}>
              When its colder than the far side of the moon and splitting rain
              too,you have still to look good.From water-repellant leather to a
              rugged outsole,the Lunar Force 1 adapter AF-1 style so you can
              keep your flame burning when the weather hits.Metal lace hardware
              and extended tongue bring mountain boot toughness,while the
              star-studded toe design gives your look the edge
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default UserProfile;
