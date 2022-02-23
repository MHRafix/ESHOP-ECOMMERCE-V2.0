import { Grid } from '@mui/material'
import React, { useState } from 'react'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import SingleOrderDetailsModal from '../../SharedComponents/Modals/SingleOrderDetailsModal';

export default function SingleOrderCard({myOrder}) {
  const [detailsModal, setDetailsModal] = useState(false);

    // Let's destructuring data from the object
    const {_id, grandTotalPrice, customerInfo, status} = myOrder;

    return (
      <>
        <Grid 
        container 
        sx={{alignItems: 'center', 
        margin: '40px 0px 0px 0px'
        }}
        // data-aos="fade-up"
        >
            <Grid
            item
            onClick={() => setDetailsModal(true)}
            md={2.3} 
            sx={{
              textAlign: 'center', 
              color: 'blue', 
              cursor: 'pointer', 
              fontFamily: 'Poppins', 
              fontSize: {
                xs: 10, 
                md: 14
                }
              }}
              >
            ORDER_ID_{_id.slice(10, 15)}
            </Grid>
            <Grid item md={2.3} sx={{textAlign: 'center', color: '#555', fontFamily: 'Poppins', fontSize: {xs: 10, md: 14}}}>{customerInfo?.firstName + " " + customerInfo?.lastName}</Grid>
            <Grid item md={2.3} sx={{textAlign: 'center', color: '#555', fontFamily: 'Poppins', fontSize: {xs: 10, md: 14}}}>${Math.ceil(grandTotalPrice)}</Grid>
            <Grid item md={2.3} sx={{textAlign: 'center', color: '#555', fontFamily: 'Poppins', fontSize: {xs: 10, md: 14}}}><span className="orderStatus">{status}</span></Grid>
            <Grid item md={2.3} sx={{textAlign: 'center', color: '#555', fontFamily: 'Poppins', fontSize: {xs: 10, md: 14}}}>
            <button className="orderActions"><FileDownloadIcon /> &nbsp;PDF</button> <br />
            <button className="orderActions" style={{background: 'red', color: '#fff'}}><DeleteIcon /> &nbsp;Order</button>
            </Grid>
        </Grid>
        <SingleOrderDetailsModal data={myOrder} open={detailsModal} setOpen={setDetailsModal} />
      </>
  )
}
