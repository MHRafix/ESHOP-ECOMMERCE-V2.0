import { Alert, CircularProgress, Grid, Snackbar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import useGet from '../../../../../CustomHooks/useGet';
import usePost from '../../../../../CustomHooks/usePost';
import GifLoader from '../../../../../Images/ICONS/loadingGif.gif';
import Card from '../ProductCard/Card';

const DiscountProducts = () => {
    // Import product data from redux using custom hooks
    const gotData = useSelector((state) => state.allProducts.products);
    const { loading } = useGet('saleProducts');

    // Carted product data saved  to the database
    const { handlePost, posting, success, setSuccess, alertText } = usePost();

    // Hide alert here
    function hideAlert(){
        setSuccess(false);
    }

    if(success){
        setTimeout(hideAlert, 5000);
    }
    
    return (
        <Grid container spacing={2}>
            <Snackbar open={success} autoHideDuration={6000}>
                <Alert severity="success" sx={{ width: '100%', background: 'rgb(46 125 50)', color: 'white', fontFamily: 'Poppins', fontWeight: 400, fontSize: {xs: '13px', md: '18px'}}}>
                  {alertText}
                </Alert>
            </Snackbar>
            {loading ? <CircularProgress sx={{ textAlign: 'center', margin: 'auto'}} mt={3} color="secondary" /> : <>{gotData?.map(data => <Card key={data._id} data={data} col={3} handlePost={handlePost} />)}</>}
            {posting && <div className="gifLoader2">
            <img className="gif" src={GifLoader} alt="loader" />
            </div>
            }
        </Grid>
    );
};

export default DiscountProducts;