import React from 'react';
import BreadCrumb from '../SharedComponents/BreadCrumb/BreadCrumb';
import Checkout from './CheckoutForm/Checkout';

const CheckoutMain = () => {
    const navigation = {
        first: 'home',
        last: 'CHECKOUT'
    };
    return (
        <>
          <BreadCrumb breadcrumbNavigation={navigation}/>
          <Checkout />
        </>
    );
};
export default CheckoutMain;