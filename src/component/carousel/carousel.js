import React from "react";
import { SimpleCarouselSlider } from 'react-simple-carousel-image-slider'
import 'react-simple-carousel-image-slider/dist/index.css'


const Carou = () => {
  const images = [
    require('../../assets/imagecouple1.jpg'),
    require('../../assets/imagecouple22.avif'),
    require('../../assets/imagecouple3.jpg'),

  ];

  return (
    <div>
    <SimpleCarouselSlider
    images={images} 
    autoplay={false}
    width= "100%"
    height="850px"
     
    />
  </div>
  
  );
};
export default Carou;
