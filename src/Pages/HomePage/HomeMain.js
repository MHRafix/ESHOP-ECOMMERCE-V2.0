import React from 'react';
import Header from '../SharedComponents/Header/Header';
import Facilities from './Facilities/Facilities';
import HomeSlider from './HomeSlider/HomeSlider';
import Products from './ProductsTab/Products';

const HomeMain = () => {
    return (
        <>
        <Header />
         <HomeSlider />
         <Facilities />
         <br /><br />
         <Products />
        </>
    );
};

export default HomeMain;