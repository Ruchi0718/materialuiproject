import React from "react";
import {
  Box,
  Grid,
  IconButton,
  Typography,
  Icon,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import TuneIcon from "@mui/icons-material/Tune";

const AboutusSidebar = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Grid container sx={{ displayFlex: "inline", flexDirection: "row" }}>
        <Grid item lg={3} xs={3} sm={3} md={3}>
          <Box
            sx={{
              marginTop: { lg: "5%", xs: "5%", sm: "5%", md: "5%" },
              margin: "auto",
              width: { lg: "70%", xs: "100%", sm: "100%",md:"80%"},
              height: "70rem",
              border: "2px solid #C0C0C0",
              borderRadius: "10px",
            }}
          >
            <Grid container>
              <Grid
                item
                sx={{
                  margin: { lg: "auto", xs: "auto", sm: "auto", md: "auto" },
                }}
              >
                <IconButton>
                  <Icon>
                    <TuneIcon />
                  </Icon>
                  <Typography sx={{ fontWeight: "bold" }}>Filter</Typography>
                </IconButton>
              </Grid>
            </Grid>
            <Divider />

            <Grid container >
              <Grid item m={1}>
                <Typography sx={{ fontSize: "15px", color: "grey" }}>
                  Looking For
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item lg={6} xs={12}>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-form-control-label-placement"
                    name="position"
                    defaultValue="top"
                  >
                    <FormControlLabel
                      sx={{ fontWeight: "10px", margin: "auto" }}
                      value="Bride"
                      control={<Radio />}
                      label="Bride"
                      labelPlacement="Bride"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item lg={6} xs={12}>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-form-control-label-placement"
                    name="position"
                    defaultValue="top"
                  >
                    <FormControlLabel
                      sx={{ fontWeight: "10px", margin: "auto" }}
                      value="Groom"
                      control={<Radio />}
                      label="Groom"
                      labelPlacement="Groom"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid container>
                <Grid item m={1}>
                  <Typography sx={{ fontSize: "15px", color: "grey" }}>
                    Age
                  </Typography>
                </Grid>
              </Grid>
              <Grid container >
                <Grid item  lg={5} xs={12}>
                  <FormControl sx={{ minWidth: 80,marginLeft:"5%" }}>
                    <InputLabel id="demo-simple-select-autowidth-label">
                      Age
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={age}
                      onChange={handleChange}
                      autoWidth
                      label="Age"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>22</MenuItem>
                      <MenuItem value={21}>25</MenuItem>
                      <MenuItem value={22}>30</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={2} xs={2}>
                  <Typography align="center" justifyContent={"center"}>To</Typography>
                </Grid>
                <Grid item lg={5} xs={12}>
                  <FormControl sx={{ minWidth: 80,marginLeft:"5%" }}>
                    <InputLabel id="demo-simple-select-autowidth-label">
                      Age
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={age}
                      onChange={handleChange}
                      autoWidth
                      label="Age"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>22</MenuItem>
                      <MenuItem value={21}>25</MenuItem>
                      <MenuItem value={22}>30</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* <Grid item lg={9} xs={9} sm={9} md={9}>
          <Typography variant="h5" align="center">
            All Members
          </Typography>
          <Box
            sx={{
              marginTop: "5%",
              margin: "auto",
              width: { lg: "95%", sm: "90%", xs: "85%", md: "80%" },
              height: { lg: "80%", sm: "80%", xs: "80%", md: "80%" },
              marginRight: "10%",
              border: "2px solid #C0C0C0",
            }}
          >
            <AboutusBody />
          </Box>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default AboutusSidebar;
