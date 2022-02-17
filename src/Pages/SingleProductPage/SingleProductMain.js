import { CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeSelectedProducts, selectedProducts } from '../../redux/actions/productActions';
import SingleInfo from './SingleProductInfo/SingleInfo';

const SingleProductMain = () => {
    // Get selected product's id here 
    const { productId } = useParams();
    
    // Load data from the server by using dynamic url
    const [ loading, setLoading ] = useState(false);
    const dependency = `shop/singleProducts/${productId}`;
    
    const gotData = useSelector((state) => state.singleProduct);
    const dispatch = useDispatch();
    console.log(gotData);
    
    const getSingleProduct = async () => {
        setLoading(true);
        const res =  await axios.get(`https://rocky-bastion-69611.herokuapp.com/${dependency}`).catch((err) => {
            console.log("Error", err);
        })
        dispatch(selectedProducts(res.data));
        setLoading(false);
    }
    
    
    useEffect(() => {
        if(productId !== "") getSingleProduct();
        return () => {
            dispatch(removeSelectedProducts());
        }
    }, [productId]);

    return (
        <>
         {loading ? <div style={{margin: 'auto', textAlign: 'center', marginTop: '50px'}}><CircularProgress sx={{ textAlign: 'center', margin: 'auto'}} mt={3} color="secondary" /></div> : <SingleInfo data={gotData} />}
        </>
    );
};

export default SingleProductMain;