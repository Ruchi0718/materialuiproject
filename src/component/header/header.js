import React, { useState } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Drawercomp from "../Drawercomp";

const Header = () => {
  const Pages = ["HOME", "ABOUTUS", "MEMBERSHIP", "CONTACT", "LOGIN", "SEARCH"];
  const [value, setValue] = useState("");
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch, "fdfsdfsad");
  return (
    <>
      <AppBar sx={{ background: "#FF311A" }}>
        <Toolbar>
          {isMatch ? (
            <>
              <Drawercomp />
            </>
          ) : (
            <>
              <Tabs
                value={value}
                textColor="white"
                onChange={(e, value) => setValue(value)}
              >
                {Pages.map((page, index) => (
                  <Tab key={index} label={page} />
                ))}
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
