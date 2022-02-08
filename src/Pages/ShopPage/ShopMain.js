import React from 'react';
import BreadCrumb from '../SharedComponents/BreadCrumb/BreadCrumb';
import Header from '../SharedComponents/Header/Header';
import Shop from './ShopArea/Shop';

const ShopMain = () => {
    const navigation = {
        first: 'home',
        last: 'Shop'
    };
    return (
        <>
        <Header />
         <BreadCrumb breadcrumbNavigation={navigation} />
         <Shop />
        </>
    );
};

export default ShopMain;