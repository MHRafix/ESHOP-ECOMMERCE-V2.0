import React from 'react';
import Facilities from './Facilities/Facilities';
import HomeSlider from './HomeSlider/HomeSlider';
import Products from './ProductsTab/Products';

const HomeMain = () => {
    return (
        <>
         <HomeSlider />
         <Facilities />
         <br /><br />
         <Products />
        </>
    );
};

export default HomeMain;