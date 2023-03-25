import React, { useState } from "react";
import { Box, Grid, Typography, Button, Checkbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Form = () => {
  const [religion, setReligion] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [age, setAge] = useState("");
  const [toage, setToage] = useState("");
  const [caste, setCaste] = useState("");
  const [community, setCommunity] = useState("");
  const [country, setCountry] = useState("");

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleChangetoAge = (event) => {
    setToage(event.target.value);
  };

  const handleChange = (event) => {
    setLookingFor(event.target.value);
  };
  const handleChangereligion = (event) => {
    setReligion(event.target.value);
  };
  const handleChangeCaste = (event) => {
    setCaste(event.target.value);
  };
  const handleChangeCommunity = (event) => {
    setCommunity(event.target.value);
  };
  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };
  return (
    <>
      <Box sx={{ height: 620 }}>
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          sx={{
            padding: 2,
            margin:"auto",
            marginLeft: { lg: "4%", xs: 0 },
            marginRight: { xs: "4%" },
            // marginTop: "1%",
            width: { lg: 450,xs:300 },
            height: { lg: 500 },
            marginTop: 4,
            backgroundColor: "#F8F8F8",
          }}
        >
          <Grid container>
            <Grid textAlign={"center"} justifyContent={"center"}
              ml={{lg:14,xs:7,sm:5,md:6}}
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
            <Grid textAlign={"center"} justifyContent={"center"} ml={{lg:1,xs:5}}
              sx={{ fontSize: "xx-large", fontWeight: "bold", color: "grey" }}
              item
              xs={3}
            >
              HERE
            </Grid>
          </Grid>
          <Typography sx={{ marginLeft: {lg:"70%",xs:"40%"} }}>
            <u>Profile ID Search</u>
          </Typography>
          <Grid container xs={12}>
            <Grid item xs={4}>
              <Typography sx={{ marginLeft: {lg:"20px",xs:"2%"} }}>
                Looking for {" "}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{width:{lg:280,xs:200}}}>
                <Select fullWidth value={lookingFor} onChange={handleChange}>
                  <MenuItem value={"bride"}>Bride</MenuItem>
                  <MenuItem value={"groom"}>Groom</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid item xs={4}>
              <Typography  sx={{ marginLeft: {lg:"20px",xs:"2%"} }}>Age</Typography>
            </Grid>
            <Grid item xs={3}>
              <FormControl sx={{width:{lg:110,xs:73}}}>
                <Select
                  // labelId="demo-simple-select-label"
                  // id="demo-simple-select"
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
              <Typography textAlign={"center"} justifyContent={"center"} sx={{marginLeft:"10%"}}>To</Typography>
            </Grid>
            <Grid ml={3} item xs={3}>
              <FormControl sx={{width:{lg:114,xs:73}}}>
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
              <Typography  sx={{ marginLeft: {lg:"20px",xs:"2%"} }}>Religion  </Typography>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{width:{lg:280,xs:200}}}>
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
              <Typography  sx={{ marginLeft: {lg:"20px",xs:"2%"} }}>Caste  </Typography>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{width:{lg:280,xs:200}}}>
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
              <Typography  sx={{ marginLeft: {lg:"20px",xs:"2%"} }}>Community </Typography>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{width:{lg:280,xs:200}}}>
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
              <Typography  sx={{ marginLeft: {lg:"20px",xs:"2%"} }}>Country  </Typography>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{width:{lg:280,xs:200}}}>
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
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Form;
