import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider3 from '../../../../Images/SLIDERIMAGE/sliderT.png';

const Slide3 = ({thirdSlide}) => {
    return (
<>
         {thirdSlide && <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                            <div className="sliderArticle" data-aos="fade-down">
                                <span className="tagline">Smart Products</span>
                                <h1 className="Headline">All Hot Fashion <br />Collection Here</h1>
                                <Link to="/shop"><button className="shopBtn">SHOP NOW</button></Link>

                            </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="image" data-aos="fade-up">
                                    <img className="sliderImage" src={Slider3} alt="sliderImage" />
                                </div>
                            </Grid>
                        </Grid>}
        </>
    );
};

export default Slide3;