import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
const Drawercomp = () => {
  const Pages = ["HOME", "ABOUTUS", "MEMBERSHIP", "CONTACT", "LOGIN", "SEARCH"];
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        PaperProps={{
          sx: { width: "65%" },
        }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <List>
            {Pages.map((page, index) => (
              <ListItemButton key={index}>
                <ListItemIcon>
                  <ListItemText>{page}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))}
            <Typography align="center">
              <Button
                sx={{ background: "#FF311A" }}
                startIcon={<AddIcon />}
                variant="contained"
              >
                Sign
              </Button>
              <br></br>
              <br></br>
            </Typography>
            <Typography align="center" justifyContent={"center"}>
              <Button
                sx={{ background: "#FF311A" }}
                startIcon={<TrendingFlatIcon />}
                variant="contained"
              >
                Login
              </Button>
            </Typography>
          </List>
        </Grid>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
    </>
  );
};

export default Drawercomp;
