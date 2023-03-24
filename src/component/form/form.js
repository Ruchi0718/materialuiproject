import React, { useState } from "react";
import { Box } from "@mui/system";
// import {  Grid, Typography, Button, Checkbox } from "@mui/material";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

const Form = () => {
  // const [religion, setReligion] = useState("");
  // const [lookingFor, setLookingFor] = useState("");
  // const [age, setAge] = useState("");
  // const [toage, setToage] = useState("");
  // const [caste, setCaste] = useState("");
  // const [community, setCommunity] = useState("");
  // const [country, setCountry] = useState("");

  // const handleChangeAge = (event) => {
  //   setAge(event.target.value);
  // };
  // const handleChangetoAge = (event) => {
  //   setToage(event.target.value);
  // };

  // const handleChange = (event) => {
  //   setLookingFor(event.target.value);
  // };
  // const handleChangereligion = (event) => {
  //   setReligion(event.target.value);
  // };
  // const handleChangeCaste = (event) => {
  //   setCaste(event.target.value);
  // };
  // const handleChangeCommunity = (event) => {
  //   setCommunity(event.target.value);
  // };
  // const handleChangeCountry = (event) => {
  //   setCountry(event.target.value);
  // };
  return (
    <>
      <Box sx={{ height:620 }}>
        <Box
          sx={{
            padding: 2,
            marginLeft: "4%",
            // marginTop: "1%",
            width: {lg:450,xs:200,sm:300,md:350},
            height:{lg:500,xs:350,sm:400,md:450},
            marginTop:4,
            backgroundColor: "#F8F8F8",
          }}
        >
          {/* <Grid container>
            <Grid
              ml={14}
              sx={{
                fontSize: "xx-large",
                fontWeight: "bold",
                color: "#FF311A",
              }}
              item
              xs={4}
            >
              SEARCH
            </Grid>
            <Grid
              sx={{ fontSize: "xx-large", fontWeight: "bold", color: "grey" }}
              item
              xs={3}
            >
              HERE
            </Grid>
          </Grid>
          <Typography sx={{ marginLeft: "70%" }}>
            <u>Profile ID Search</u>
          </Typography>
          <Grid container xs={12}>
            <Grid item xs={4}>
              <Typography sx={{ m: 2, marginLeft: "20px" }}>
                Looking for :{" "}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ width: 280 }}>
                <Select fullWidth value={lookingFor} onChange={handleChange}>
                  <MenuItem value={"bride"}>Bride</MenuItem>
                  <MenuItem value={"groom"}>Groom</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid  item xs={4}>
            <Typography sx={{ m: 2, marginLeft: "20px" }}>
                Age
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChangeAge}
                >
                  <MenuItem value={10}>18</MenuItem>
                  <MenuItem value={20}>19</MenuItem>
                  <MenuItem value={30}>20</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={1}>
              To
            </Grid>
            <Grid ml={2} item xs={3}>
              <FormControl fullWidth>
                <Select value={toage} onChange={handleChangetoAge}>
                  <MenuItem value={10}>25</MenuItem>
                  <MenuItem value={20}>28</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid item xs={4}>
              <Typography sx={{ m: 1 }}>Religion : </Typography>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ width: 280 }}>
                <Select
                  fullWidth
                  value={religion}
                  onChange={handleChangereligion}
                >
                  <MenuItem value={"hindu"}>Hindu</MenuItem>
                  <MenuItem value={"muslim"}>Muslim</MenuItem>
                  <MenuItem value={"christian"}>Christian</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid item xs={4}>
              <Typography sx={{ m: 1 }}>Caste : </Typography>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ width: 280 }}>
                <Select fullWidth value={caste} onChange={handleChangeCaste}>
                  <MenuItem value={"general"}>General</MenuItem>
                  <MenuItem value={"obc"}>Obc</MenuItem>
                  <MenuItem value={"st/sc"}>St/Sc</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid item xs={4}>
              <Typography sx={{ m: 1 }}>Community: </Typography>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ width: 280 }}>
                <Select
                  fullWidth
                  value={community}
                  onChange={handleChangeCommunity}
                >
                  <MenuItem value={"general"}>General</MenuItem>
                  <MenuItem value={"obc"}>Obc</MenuItem>
                  <MenuItem value={"st/sc"}>St/Sc</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>{" "}
          <Grid container xs={12}>
            <Grid item xs={4}>
              <Typography sx={{ m: 1 }}>Country : </Typography>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ width: 280 }}>
                <Select
                  fullWidth
                  value={country}
                  onChange={handleChangeCountry}
                >
                  <MenuItem value={"India"}>India</MenuItem>
                  <MenuItem value={"canada"}>Canada</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="With Photo Advance Search"
          />
          <Grid m={2} container xs={12}>
            <Button sx={{ marginLeft: "30%" }} variant="contained">
              Search
            </Button>
          </Grid> */}
        </Box>
      </Box>
    </>
  );
};

export default Form;
