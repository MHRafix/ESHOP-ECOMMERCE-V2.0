import React from 'react';
import BreadCrumb from '../SharedComponents/BreadCrumb/BreadCrumb';
import WishList from './WishListProducts/WishList';
import {useSelector} from 'react-redux';

const WishListMain = () => {
    const navigation = {
        first: 'home',
        last: 'WISHLIST'
    };

    // Got data from redux store here
    const gotData = useSelector((state) => state.wishlistAllProducts.wishlistProducts);
    return (
        <>
         <BreadCrumb breadcrumbNavigation={navigation} />
         <br /><br />
         <WishList gotData={gotData} />
        </>
    );
};

export default WishListMain;