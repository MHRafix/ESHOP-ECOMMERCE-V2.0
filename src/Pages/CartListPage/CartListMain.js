import React from 'react';
import BreadCrumb from '../SharedComponents/BreadCrumb/BreadCrumb';
import Header from '../SharedComponents/Header/Header';
import WishList from '../WishListPage/WishListProducts/WishList';

const CartListMain = () => {
    const navigation = {
        first: 'home',
        last: 'CARTLIST'
    };
    return (
        <>
        <Header />
         <BreadCrumb breadcrumbNavigation={navigation} />
         <br /><br />
         <WishList />
        </>
    );
};

export default CartListMain;