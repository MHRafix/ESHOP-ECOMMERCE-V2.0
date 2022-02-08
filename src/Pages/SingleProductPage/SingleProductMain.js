import { CircularProgress } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import useGet from '../../CustomHooks/useGet';
import Header from '../SharedComponents/Header/Header';
import SingleInfo from './SingleProductInfo/SingleInfo';

const SingleProductMain = () => {
    // Get selected product's id here 
    const { productId } = useParams();
    
    // Load data from the server by using dynamic url
    const dependency = `shop/singleProducts/${productId}`;
    const { loading, gotData } = useGet(dependency);

    return (
        <>
         <Header />
         {loading ? <div style={{margin: 'auto', textAlign: 'center', marginTop: '50px'}}><CircularProgress sx={{ textAlign: 'center', margin: 'auto'}} mt={3} color="secondary" /></div> : <SingleInfo data={gotData} />}
        </>
    );
};

export default SingleProductMain;