import Grid from '@mui/material/Grid';
import React from 'react';
import { Link } from 'react-router-dom';

const CartTotalCard = ({totalPrice}) => {


    return (
        <Grid container sx={{padding: {xs: '0px 0px', md: '0px 20px', marginBottom: '50px'}}}>
            <Grid item xs={12} md={3}>
                <Grid container  sx={{overflow: 'hidden'}}>
                        <Grid item md={12} xs={12} sx={{fontSize: '25px', fontWeight: 700, fontFamily: 'Poppins', marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px'}}>Apply Coupon</Grid>
                        <Grid item md={12} xs={12}>
                            <input placeholder="Enter coupon code..." type="text" className="couponFiled" />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <button className="btnButton">Apply Now</button>
                        </Grid>
                    </Grid>
            </Grid>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={3}>
                <Grid container sx={{overflow: 'hidden'}}>
                    <Grid item md={12} xs={12} sx={{fontSize: '25px', fontWeight: 700, fontFamily: 'Poppins', marginBottom: '20px', borderBottom: '1px solid #ccc',  paddingBottom: '10px'}}>Cart Total</Grid>
                    <Grid item md={8} xs={8}>Pruduct Total:</Grid>
                    <Grid item md={4} xs={4} sx={{textAlign: 'right'}}>$ {totalPrice.toFixed(2)}</Grid>
                    <Grid item md={8} xs={8}>Grand Total:</Grid>
                    <Grid item md={4} xs={4} sx={{textAlign: 'right'}}>$ {totalPrice.toFixed(2)}</Grid>
                    <Grid item md={12} xs={12}>
                        <Link to="/checkout">
                            <button className="btnButton">Checkout Now</button>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    );
};

export default CartTotalCard;