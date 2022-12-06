import React from 'react';
import BreadCrumb from '../SharedComponents/BreadCrumb/BreadCrumb';
import Shop from './ShopArea/Shop';

const ShopMain = () => {
    const navigation = {
        first: 'home',
        last: 'Shop'
    };
    return (
        <>
         <BreadCrumb breadcrumbNavigation={navigation} />
         <Shop />
        </>
    );
};

export default ShopMain;