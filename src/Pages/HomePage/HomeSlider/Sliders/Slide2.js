import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider2 from '../../../../Images/SLIDERIMAGE/sliderS.png';

const Slide2 = ({secondSlide}) => {
    return (
        <>
         {secondSlide && <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                            <div className="sliderArticle" data-aos="fade-up">
                                <span className="tagline">Smart Products</span>
                                <h1 className="Headline">Winter Offer <br />2022 Collection</h1>
                                <Link to="/shop"><button className="shopBtn">SHOP NOW</button></Link>

                            </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="image" data-aos="fade-down">
                                    <img className="sliderImage" src={Slider2} alt="sliderImage" />
                                </div>
                            </Grid>
                   </Grid>}
        </>
    );
};

export default Slide2;