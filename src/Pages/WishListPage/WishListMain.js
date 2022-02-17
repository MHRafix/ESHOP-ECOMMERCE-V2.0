import React from 'react';
import BreadCrumb from '../SharedComponents/BreadCrumb/BreadCrumb';
import WishList from './WishListProducts/WishList';

const WishListMain = () => {
    const navigation = {
        first: 'home',
        last: 'WISHLIST'
    };
    return (
        <>
         <BreadCrumb breadcrumbNavigation={navigation} />
         <br /><br />
         <WishList />
        </>
    );
};

export default WishListMain;