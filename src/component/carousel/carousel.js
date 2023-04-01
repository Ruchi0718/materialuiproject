import React from "react";
import { Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Imagecouple1 from "../../assets/imagecouple1.jpg";
import Imagecouple3 from "../../assets/imagecouple3.jpg";
import Imagecouple4 from "../../assets/imagecouple4.jpg";

const Carou = () => {
  return (
    <Carousel>

          <img src={Imagecouple1} alt="Slide 1" />
          <img src={Imagecouple1} alt="Slide 1" />
          <img src={Imagecouple1} alt="Slide 1" />
          <img src={Imagecouple1} alt="Slide 1" />

    </Carousel>
  );
};
export default Carou;
