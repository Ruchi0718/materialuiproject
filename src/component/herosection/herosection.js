import React from "react";
import { Box, Container, Grid } from "@mui/material";
import herosection from "../../assets/herosection.jpg";
import Form from "../form/form";
const Herosection = () => {
  return (
    <>
      <Grid container>
        <Grid item lg={12} xs={12} sm={12} md={12}>
          <Box>
            <Container
              maxWidth={false}
              sx={{
                width: {lg:"100%",xs:"100%"},
                height: {lg:700,xs:1200},
                backgroundImage: `url(${herosection})`,
                backgroundColor: "black",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                diplay: "flex",
                justifyContent: "center",
                padding:6,
              }}
            >
              <Box>
                <Form />
              </Box>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Herosection;
