import { Grid } from '@mui/material'
import React from 'react'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeleteIcon from '@mui/icons-material/Delete';

export default function MyOrders() {

  return (
    <>
        <br /> <br />
        <Grid container sx={{alignItems: 'center'}}>
            <Grid item md={2.3} sx={{textAlign: 'center', color: '#555', fontFamily: 'Poppins', fontSize: {xs: 10, md: 14}}}>{'order id'.toUpperCase()}</Grid>
            <Grid item md={2.3} sx={{textAlign: 'center', color: '#555', fontFamily: 'Poppins', fontSize: {xs: 10, md: 14}}}>{'email'.toUpperCase()}</Grid>
            <Grid item md={2.3} sx={{textAlign: 'center', color: '#555', fontFamily: 'Poppins', fontSize: {xs: 10, md: 14}}}>{'total price'.toUpperCase()}</Grid>
            <Grid item md={2.3} sx={{textAlign: 'center', color: '#555', fontFamily: 'Poppins', fontSize: {xs: 10, md: 14}}}>{'status'.toUpperCase()}</Grid>
            <Grid item md={2.3} sx={{textAlign: 'center', color: '#555', fontFamily: 'Poppins', fontSize: {xs: 10, md: 14}}}>{'actions'.toUpperCase()}</Grid>
        </Grid>
        <Grid container sx={{alignItems: 'center', margin: '20px 0px'}}>
            <Grid item md={2.3} sx={{textAlign: 'center', color: '#000', textDecoration: 'underline', cursor: 'pointer', fontFamily: 'Poppins', fontSize: {xs: 10, md: 14}}}>
              61fd26277222c3335946c356
            </Grid>
            <Grid item md={2.3} sx={{textAlign: 'center', color: '#555', fontFamily: 'Poppins', fontSize: {xs: 10, md: 14}}}>fmhrafiz27@gmail.com</Grid>
            <Grid item md={2.3} sx={{textAlign: 'center', color: '#555', fontFamily: 'Poppins', fontSize: {xs: 10, md: 14}}}>$4550.00</Grid>
            <Grid item md={2.3} sx={{textAlign: 'center', color: '#555', fontFamily: 'Poppins', fontSize: {xs: 10, md: 14}}}><span className="orderStatus">Pending</span></Grid>
            <Grid item md={2.3} sx={{textAlign: 'center', color: '#555', fontFamily: 'Poppins', fontSize: {xs: 10, md: 14}}}>
              <button className="orderActions"><FileDownloadIcon /> &nbsp;PDF</button> <br />
              <button className="orderActions" style={{background: 'red', color: '#fff'}}><DeleteIcon /> &nbsp;Order</button>
            </Grid>
        </Grid>
    </>
  )
}
