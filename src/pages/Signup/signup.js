import React from "react";
import Header from "../../component/header/header";
import {
  Container,
  Grid,
  Typography,
  Box,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
  TextField,
} from "@mui/material";
import Profile35 from "../../assets/profile35.png";
import Footer from "../../component/footer/footer";

const Signup = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Header />
      {isMatch ? (
        <>
          <Container>
            <Grid container sx={{ marginTop: { lg: "20%", xs: "45%" } }}>
              <Grid item xs={12} lg={6}>
                <Box sx={{ width: "100%" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="wrapped label tabs example"
                  >
                    <Tab
                      value="one"
                      label={
                        <Typography
                          sx={{
                            fontSize: "25px",
                            fontWeight: "bold",
                            color: "black",
                          }}
                        >
                          Login
                        </Typography>
                      }
                      wrapped
                    />
                  </Tabs>
                  <br></br>
                  <Typography
                    sx={{ fontSize: "12px", fontWeight: "bold", color: "grey" }}
                  >
                    Login with your credentials to find your life partner
                  </Typography>
                  <br></br>

                  <Box
                    sx={{
                      width: 500,
                      maxWidth: "100%",
                    }}
                  >
                    <TextField
                      size="small"
                      fullWidth
                      label="fullWidth"
                      id="fullWidth"
                    />
                    <br></br>
                    <br></br>

                    <TextField
                      size="small"
                      fullWidth
                      label="fullWidth"
                      id="fullWidth"
                    />
                    <br></br>
                    <br></br>
                    <Grid item xs={12}>
                      <Typography align="center">
                        <Button
                          variant="contained"
                          sx={{ background: "#FF311A", width: 100 }}
                        >
                          Login
                        </Button>
                      </Typography>
                    </Grid>
                  </Box>
                </Box>
                <br></br>
              </Grid>
            </Grid>
          </Container>
          <br></br>
          <br></br>
          <br></br>
        </>
      ) : (
        <>
          <Container>
            <Grid container sx={{ marginTop: { lg: "20%", xs: "45%" } }}>
              <Grid item xs={12} lg={6}>
                <Box sx={{ width: "100%" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="wrapped label tabs example"
                  >
                    <Tab
                      value="one"
                      label={
                        <Typography
                          sx={{
                            fontSize: "25px",
                            fontWeight: "bold",
                            color: "black",
                          }}
                        >
                          Login
                        </Typography>
                      }
                      wrapped
                    />
                  </Tabs>
                  <br></br>
                  <Typography
                    sx={{ fontSize: "12px", fontWeight: "bold", color: "grey" }}
                  >
                    Login with your credentials to find your life partner
                  </Typography>
                  <Box
                    sx={{
                      width: 500,
                      maxWidth: "100%",
                    }}
                  >
                    <TextField
                      size="small"
                      fullWidth
                      label="fullWidth"
                      id="fullWidth"
                    />
                    <br></br>
                    <br></br>

                    <TextField
                      size="small"
                      fullWidth
                      label="fullWidth"
                      id="fullWidth"
                    />
                    <br></br>
                    <br></br>
                    <Grid item xs={12}>
                      <Typography align="center">
                        <Button
                          variant="contained"
                          sx={{ background: "#FF311A", width: 100 }}
                        >
                          Login
                        </Button>
                      </Typography>
                    </Grid>
                  </Box>
                </Box>
                <br></br>
              </Grid>
              <Grid item lg={6}>
                <img
                  style={{ width: 650, height: 700 }}
                  src={Profile35}
                  alt="image13"
                />
              </Grid>
            </Grid>
          </Container>
          <br></br>
          <br></br>
          <br></br>
        </>
      )}

      <Footer />
    </>
  );
};

export default Signup;
