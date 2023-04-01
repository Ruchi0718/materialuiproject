import React from "react";
import {
  Box,
  Grid,
  Button,
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
  TextField,
} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import AboutusBody from "../aboutusBody/aboutusBody";

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
              width: { lg: "70%", xs: "6rem", sm: "100%", md: "80%" },
              height: { lg: "99%" },
              border: "2px solid #C0C0C0",
              borderRadius: "4px",
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

            <Grid container>
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
                      sx={{
                        fontWeight: "10px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
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
                      sx={{
                        fontWeight: "10px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
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
                  <Typography
                    sx={{
                      fontSize: "15px",
                      color: "grey",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    Age
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item p={1} lg={5} xs={12} md={12}>
                  <FormControl sx={{ minWidth: 80 }} size="small">
                    <InputLabel id="demo-simple-select-autowidth-label">
                      Age
                    </InputLabel>
                    <Select
                      // sx={{marginLeft:"auto",marginRight:"auto" }}
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
                <Grid item p={1} lg={2} xs={12}>
                  <Typography align="center" justifyContent={"center"}>
                    To
                  </Typography>
                </Grid>
                <Grid
                  item
                  sx={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    alignContent: "center",
                  }}
                  p={1}
                  lg={5}
                  xs={12}
                >
                  <FormControl sx={{ minWidth: 80 }} size="small">
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
              <Grid container>
                <Grid
                  item
                  sx={{
                    alignContent: {
                      xs: "center",
                      sm: "center",
                      md: "flex-start",
                    },
                  }}
                  lg={12}
                  xs={12}
                  md={12}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      alignContent: {
                        xs: "center",
                        sm: "center",
                        md: "flex-start",
                      },
                    }}
                  >
                    <u>Advanced Search</u>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item m={1}>
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "grey",
                    fontWeight: "bold",

                    alignItems: { lg: "justify", xs: "center", sm: "center" },
                  }}
                >
                  Members ID
                </Typography>
              </Grid>
              <Grid container>
                <Grid item m={1}>
                  <TextField
                    id="outlined-basic"
                    size="small"
                    label="Enter the Id"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item m={1}>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    Material Status
                  </Typography>
                </Grid>
              </Grid>
              <Grid item m={1} lg={12} xs={12}>
                <FormControl
                  sx={{ minWidth: { lg: 220, xs: 80, sm: 160, md: 160 } }}
                  size="small"
                >
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Select One
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    // value={age}
                    // onChange={handleChange}
                    autoWidth
                    label="Select One"
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

              <Grid container>
                <Grid item m={1}>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    Religion
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                m={1}
                sx={
                  {
                    // dispaly:"flex",
                    // flexDirection:"row",
                  }
                }
                lg={12}
                xs={12}
              >
                <FormControl
                  sx={{ minWidth: { lg: 220, xs: 80, sm: 160, md: 160 } }}
                  size="small"
                >
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Select One
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    // value={age}
                    // onChange={handleChange}
                    autoWidth
                    label="Select One"
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

              <Grid container>
                <Grid item m={1}>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    Caste
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                item
                m={1}
                sx={
                  {
                    // dispaly:"flex",
                    // flexDirection:"row",
                  }
                }
                lg={12}
                xs={12}
              >
                <FormControl
                  sx={{ minWidth: { lg: 220, xs: 80, sm: 160, md: 160 } }}
                  size="small"
                >
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Select One
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    // value={age}
                    // onChange={handleChange}
                    autoWidth
                    label="Select One"
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

              <Grid container>
                <Grid item m={1}>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    Sub Caste
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                item
                m={1}
                sx={
                  {
                    // dispaly:"flex",
                    // flexDirection:"row",
                  }
                }
                lg={12}
                xs={12}
              >
                <FormControl
                  sx={{ minWidth: { lg: 220, xs: 80, sm: 160, md: 160 } }}
                  size="small"
                >
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Select One
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    // value={age}
                    // onChange={handleChange}
                    autoWidth
                    label="Select One"
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

              <Grid container>
                <Grid item m={1}>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    Language
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                item
                m={1}
                sx={
                  {
                    // dispaly:"flex",
                    // flexDirection:"row",
                  }
                }
                lg={12}
                xs={12}
              >
                <FormControl
                  sx={{ minWidth: { lg: 220, xs: 80, sm: 160, md: 160 } }}
                  size="small"
                >
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Select One
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    // value={age}
                    // onChange={handleChange}
                    autoWidth
                    label="Select One"
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
              <Grid container>
                <Grid item m={1}>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      color: "grey",
                    }}
                  >
                    Complexion{" "}
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                item
                m={1}
                sx={
                  {
                    // dispaly:"flex",
                    // flexDirection:"row",
                  }
                }
                lg={12}
                xs={12}
              >
                <FormControl
                  sx={{ minWidth: { lg: 220, xs: 80, sm: 160, md: 160 } }}
                  size="small"
                >
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Select One
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    // value={age}
                    // onChange={handleChange}
                    autoWidth
                    label="Select One"
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
              <Grid container>
                <Grid item m={1}>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    Qualification
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                item
                m={1}
                sx={
                  {
                    // dispaly:"flex",
                    // flexDirection:"row",
                  }
                }
                lg={12}
                xs={12}
              >
                <FormControl
                  sx={{ minWidth: { lg: 220, xs: 80, sm: 160, md: 160 } }}
                  size="small"
                >
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Select One
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    // value={age}
                    // onChange={handleChange}
                    autoWidth
                    label="Select One"
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
              <Grid container>
                <Grid item m={1}>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    Profession
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                item
                m={1}
                sx={
                  {
                    // dispaly:"flex",
                    // flexDirection:"row",
                  }
                }
                lg={12}
                xs={12}
              >
                <FormControl
                  sx={{ minWidth: { lg: 220, xs: 80, sm: 160, md: 160 } }}
                  size="small"
                >
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Select One
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    // value={age}
                    // onChange={handleChange}
                    autoWidth
                    label="Select One"
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
              <Grid container>
                <Grid item lg={12} xs={12}>
                  <Typography align="center">
                    <Button
                      sx={{ width: { lg: "80%", xs: "70%" }, marginTop: "15%" }}
                      variant="contained"
                      color="error"
                    >
                      Search
                    </Button>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item lg={9} xs={9} sm={9} md={9}>
          <Typography variant="h5" align="center">
            All Members
          </Typography>
          <Box
            sx={{
              margin: "auto",
              width: { lg: "85%", sm: "70%", xs: "70%", md: "70%" },
              height: { lg: "18%", sm: "80%", xs: "80%", md: "80%" },
              border: "2px solid #C0C0C0",
            }}
          >
            <AboutusBody />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutusSidebar;
