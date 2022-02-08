import React from 'react';
import BreadCrumb from '../SharedComponents/BreadCrumb/BreadCrumb';
import Header from '../SharedComponents/Header/Header';
import Checkout from './CheckoutForm/Checkout';

const CheckoutMain = () => {
    const navigation = {
        first: 'home',
        last: 'CHECKOUT'
    };
    return (
        <>
          <Header />
          <BreadCrumb breadcrumbNavigation={navigation}/>
          <Checkout />
        </>
    );
};
export default CheckoutMain;