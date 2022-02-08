import { Alert, Container, Grid, Snackbar } from '@mui/material';
import React from 'react';
import usePost from '../../../CustomHooks/usePost';
import GifLoader from '../../../Images/ICONS/loadingGif.gif';
import BreadCrumb from '../../SharedComponents/BreadCrumb/BreadCrumb';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductSlider from './ProductSlider.js/ProductSlider';

const SingleInfo = (props) => {
  const product = props.data;
  const { productTitle, thumbnails } = product;
    const breadcrumbNavigation = {first: "Shop", middle: "Single Product", last: productTitle};
  
  // Import usePost for posting carted product data to the data base
  const { handlePost, posting, success, setSuccess, alertText } = usePost();

  // Hide alert here
  function hideAlert(){
    setSuccess(false);
  }

  if(success){
      setTimeout(hideAlert, 5000);
  }
    return (
        <section>
            {/* Single product page bredcrumb here */}
            <BreadCrumb  breadcrumbNavigation={breadcrumbNavigation} />

            <section style={{marginTop: '100px'}}>
              <Container>              
                <Snackbar open={success} autoHideDuration={6000}>
                    <Alert severity="success" sx={{ width: '100%', background: 'rgb(46 125 50)', color: 'white', fontFamily: 'Poppins', fontWeight: 400, fontSize: {xs: '13px', md: '18px'}}}>
                     {alertText}
                    </Alert>
                </Snackbar>
                <Grid container spacing={2} sx={{justifyContent: 'space-between'}}>
                    {/* Single product slider here */}
                    <ProductSlider key="4" slidersThumbnails={thumbnails} />
                    
                    {/* Single product detaild here  */}
                    <ProductDetails key="1" productDetails={product} handlePost={handlePost} />
                </Grid>
              </Container>
                {posting && <div className="gifLoader">
                <img className="gif" src={GifLoader} alt="loader" />
                </div>
                }
            </section>
        </section>
    );
};

export default SingleInfo;