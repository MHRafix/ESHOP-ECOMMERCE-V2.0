import { CircularProgress, Grid } from '@mui/material'
import React from 'react'
import {useSelector} from 'react-redux';
import useAuth from '../../../CustomHooks/useAuth';
import useGet from '../../../CustomHooks/useGet';
import SingleOrderCard from './SingleOrderCard';
import ErrImage from '../../../Images/ICONS/empty_order.png';

export default function MyOrders() {
  const {user} = useAuth();
  // Import all orders of this user from redux here
  const myOrders = useSelector((state) => state.myAllOrders.orders);
  const {loading} = useGet(`allOrders/myOrders/${user.email}`);
  
  return (
    <>
        <br /> <br />
        {loading ? <div style={{textAlign: 'center'}}><CircularProgress
                        size={40} 
                        mt={5} 
                        color="secondary" 
                        /></div> : <>
                        {myOrders.length ? <>
                          <Grid container sx={{alignItems: 'center'}}>
                              <Grid item md={2.3} sx={{textAlign: 'center', color: '#555', fontFamily: 'Poppins', fontSize: {xs: 10, md: 14}}}>{'order id'.toUpperCase()}</Grid>
                              <Grid item md={2.3} sx={{textAlign: 'center', color: '#555', fontFamily: 'Poppins', fontSize: {xs: 10, md: 14}}}>{'email'.toUpperCase()}</Grid>
                              <Grid item md={2.3} sx={{textAlign: 'center', color: '#555', fontFamily: 'Poppins', fontSize: {xs: 10, md: 14}}}>{'total price'.toUpperCase()}</Grid>
                              <Grid item md={2.3} sx={{textAlign: 'center', color: '#555', fontFamily: 'Poppins', fontSize: {xs: 10, md: 14}}}>{'status'.toUpperCase()}</Grid>
                              <Grid item md={2.3} sx={{textAlign: 'center', color: '#555', fontFamily: 'Poppins', fontSize: {xs: 10, md: 14}}}>{'actions'.toUpperCase()}</Grid>
                          </Grid>
                        {myOrders.map(order => <SingleOrderCard key={order._id} myOrder={order} />)}
                        </>: <div className="emptyMessage">
                                <img src={ErrImage} style={{marginBottom: '20px', width: '200px', height: '200px',}} alt="errImage" />
                                <h1 className="errMssg">No Products Ordered Yet...!</h1>
                            </div>}
                        </>}
    </>
  )
}
