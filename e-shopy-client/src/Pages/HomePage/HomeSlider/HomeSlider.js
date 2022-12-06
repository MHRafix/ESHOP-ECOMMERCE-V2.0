import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Container } from "@mui/material";
import React, { useState } from "react";
import useAnimation from "../../../CustomHooks/useAnimation";
import Slide1 from "./Sliders/Slide1";
import Slide2 from "./Sliders/Slide2";
import Slide3 from "./Sliders/Slide3";
const HomeSlider = () => {
  // take some state for making a slider
  const [firstSlide, setFirstSlide] = useState(true);
  const [secondSlide, setSecondSlide] = useState(false);
  const [thirdSlide, setThirdSlide] = useState(false);

  // Import AOS animation here from custom hooks
  useAnimation();

  // Make slider controller function here
  const sliderControll = () => {
    if (firstSlide === true) {
      setFirstSlide(false);
      setSecondSlide(true);
    } else if (secondSlide === true) {
      setSecondSlide(false);
      setThirdSlide(true);
    } else if (thirdSlide === true) {
      setThirdSlide(false);
      setFirstSlide(true);
    }
  };

  return (
    <div className="sliderWrapper">
      <Container>
        <div className="sliderDetails">
          <div className="controller" onClick={sliderControll}>
            <span>
              <ArrowBackIosIcon />
            </span>
          </div>
          <Slide1 firstSlide={firstSlide} />
          <Slide2 secondSlide={secondSlide} />
          <Slide3 thirdSlide={thirdSlide} />
          <div className="controller" onClick={sliderControll}>
            <span>
              <ArrowForwardIosIcon />
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeSlider;
