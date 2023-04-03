import React from "react";
import Carousel from "react-material-ui-carousel";
import Imagecouple1 from "../../assets/imagecouple1.jpg";
import Imagecouple22 from "../../assets/imagecouple22.avif";

const Carou = () => {
  return (
    <Carousel >

          <img src={Imagecouple1} alt="Slide 1" />
          <img src={Imagecouple1} alt="Slide 1" />
          <img src={Imagecouple1} alt="Slide 1" />
          <img src={Imagecouple1} alt="Slide 1" />
          <img src={Imagecouple1} alt="Slide 1" />

          <img src={Imagecouple22} alt="Slide 1" />

    </Carousel>
  );
};
export default Carou;
