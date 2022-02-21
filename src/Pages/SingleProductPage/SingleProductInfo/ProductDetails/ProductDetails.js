import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { Grid, Radio, Typography } from '@mui/material';
import React, { useState } from 'react';
import Rating from 'react-rating';
import { useDispatch } from 'react-redux';
import useAuth from '../../../../CustomHooks/useAuth';

const ProductDetails = ({productDetails, handlePost}) => {
    const {user} = useAuth();
    const [ quantity, setQuantity ] = useState(1);
    const disPatch = useDispatch();
    // Let's destructuring the data from the productDetails object
    const { productTitle, regularPrice, salePrice, ratingsandreviews, sizes, category } = productDetails;

    // Asing initial size to the state
    let initialSize;
    if(sizes?.length){
        initialSize = sizes[0];
    }

    const [ selectedSize, setSelectedSize ] = useState(initialSize);

    // Let's calculat the average rating and reviews here
    let averageRating = 0;
    if(ratingsandreviews){
        for(const ratAndRev of ratingsandreviews){
        let {ratting} = ratAndRev;
        averageRating = averageRating + ratting;
        }
    }

    // Handle products sizes here 
    const handleChangeSizes = (event) => {
      setSelectedSize(event.target.value);
    };

    // Carted product data saved  to the database
    const cartedProductData = {
        cartedProduct: productDetails,
        size: selectedSize,
        quantity: quantity,
        userEmail: user?.email
    };

    return (
    <Grid item xs={12} md={6}>
        <div className="productDetils">
            <div className="productTitle">
                    <Typography sx={{fontSize: {md: 24, xs: 18}, fontWeight: 500, fontFamily: 'Poppins', color: '#010101', marginBottom: '10px'}}>
                        {productTitle}
                    </Typography>
                </div>
                <div className="productPrices" style={{marginBottom: '30px'}}>
                    <Typography sx={{ display: 'inline', fontSize: 24, color: '#fe5252', fontFamily: 'Poppins'}}>${salePrice}</Typography>
                    &nbsp;&nbsp;&nbsp;
                    <Typography sx={{ display: 'inline', fontSize: 18, color: '#333', fontFamily: 'Poppins', textDecoration: 'line-through'}}>${regularPrice}</Typography>
                </div>

                <div className="rattingAndReviws" style={{display: 'flex', marginBottom: '15px'}}>
                    <span 
                    className="rattis" 
                    style={{ 
                        color: '#ffa900', 
                        textAlign: 'center'
                        }}>
                        <Rating
                        initialRating={averageRating / ratingsandreviews?.length}
                        emptySymbol={<StarBorderOutlinedIcon />}
                        fullSymbol={<StarIcon />}
                        readonly
                        />
                    </span>
                    &nbsp; &nbsp; &nbsp; 
                    <span className="reviewAmount" style={{color: '#555'}}>
                    | &nbsp;  &nbsp; {ratingsandreviews?.length} Reviews
                    </span>
                </div>

                <Typography sx={{fontFamily: 'Poppins', fontSize: '16px', color: '#555', marginBottom: '40px'}}>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                </Typography>
                {/* Categories of products */}
                <h4 style={{marginBottom: '2px', color: '#444', fontWeight: 500}}>Available Sizes: </h4>
                {/* {loading ? {categoriesArr.map(category => <> */}
                {sizes?.map(size => <><Radio
                    style={{
                    margin: '0px',
                    color: 'rgb(222 77 247)', 
                    fontWeight: 500
                    }}
                    checked={selectedSize === size}
                    onChange={handleChangeSizes}
                    value={size}
                    name="radio-buttons"
                    inputProps={{ 'aria-label': size }}
                />{size.toUpperCase()}</>)}

                <div className="actionButtons">
                    <button className="counterBtn" onClick={() => {
                        if( quantity === 1 ){
                            alert('Minimum quantity must be 1...!');
                        }else{
                            setQuantity(quantity - 1);
                        }
                        }}>-</button>
                    <span className="counterValue">{quantity}</span>
                    <button className="counterBtn" onClick={() => {
                        if( quantity === 20 ){
                            alert('Maximum quantity must be 20...!');
                        }else{
                            setQuantity(quantity + 1);
                        }
                        }}>+</button>

                    <button 
                    className="addToCartBtn"
                    onClick={() => 
                    handlePost(
                     cartedProductData, 
                     'addToCartList'
                    )}>
                         Add To Cart
                    </button>
                    <span 
                    className="wishAndCompareBtn" 
                    onClick={() => 
                    handlePost(
                    cartedProductData, 
                    'addToWishList'
                    )}>
                    <FavoriteBorderIcon />
                    </span>
                    <span 
                    className="wishAndCompareBtn"
                    >
                    <CompareArrowsIcon />
                    </span>
                </div>
                <div className="taxonomy">
                 <span className="taxonomyItema">Category: {category}</span>
            </div>
        </div>
    </Grid>

    );
};

export default ProductDetails;