import React from 'react';
import BreadCrumb from '../SharedComponents/BreadCrumb/BreadCrumb';
import WishList from '../WishListPage/WishListProducts/WishList';
import {useSelector} from 'react-redux';

const CartListMain = () => {
    const navigation = {
        first: 'home',
        last: 'CARTLIST'
    };
 
    // Got data from redux store here
    const gotData = useSelector((state) => state.cartlistAllProducts.cartlistProducts);

    return (
        <>
         <BreadCrumb breadcrumbNavigation={navigation} />
         <br /><br />
         <WishList gotData={gotData} />
        </>
    );
};

export default CartListMain;