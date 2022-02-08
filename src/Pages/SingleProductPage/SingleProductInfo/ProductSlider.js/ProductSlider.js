import { Grid } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';

const ProductSlider = ({slidersThumbnails}) => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "var(--btn-bg)", padding: "10px 15px", color: "var(--white-color)", zIndex: '222' }}
            onClick={onClick}
          />
        );
      }
      
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "var(--btn-bg)", padding: "10px 15px", color: "var(--white-color)", zIndex: '222' }}
            onClick={onClick}
          />
        );
      }
      
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
      };

    return (
        <Grid item xs={12} md={5}>
            <Slider {...settings}>
                {slidersThumbnails?.map(slide => <div style={{width: '100%', height: '500px'}}>
                    <img style={{width: "100%", outline: "none", height: "90%", margin: "auto", zIndex: "1"}} src={slide} alt="sliderThumbnail" />
                </div>)}
            </Slider>
      </Grid>
    );
};

export default ProductSlider;