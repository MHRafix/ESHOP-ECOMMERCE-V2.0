import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import useAnimation from '../../../../../CustomHooks/useAnimation';
import ProductQuickView from '../../../../SharedComponents/Modals/ProductQuickView';

const Card = ({ data, col, handlePost }) => {
  const [ quickView, setQuickView ] = useState(false);

  // Import animation here
  useAnimation();

  // Let's destucturing the product data from the data object
  const { _id, productTitle, thumbnail, regularPrice, salePrice, ratingsandreviews
  } = data;
  
  // Let's calculat the average rating and reviews here
  let averageRating = 0;
  if(ratingsandreviews){
    for(const ratAndRev of ratingsandreviews){
      let {ratting} = ratAndRev;
      averageRating = averageRating + ratting;
    }
  }

  // Carted product data saved  to the database
  const cartedProductData = {
    cartedProduct: data,
    size: 'M',
    quantity: 1
  };
    return (
      <Grid item mb={4} xs={12} md={col} data-aos="fade-up">
          <div className="productCard">
            <div className="productWrapper">
              <div className="productImage">
                {salePrice !== '0' && <span className="saleBadge">-{
                  Math.ceil(((regularPrice - salePrice) / (regularPrice / 100)))
                }%</span>}
                  <Link to={`shop/products/singleProducts/${_id}`}><img style={{width: '100%'}} src={thumbnail} alt="productThumbnail" /></Link>
              </div>
              <div className="buttons">
                <button className="wishAndView"
                onClick={() => handlePost(cartedProductData, 'addToWishList')}><FavoriteBorderIcon sx={{ fontSize: 20, paddingTop: '5px'}} /></button>
                <button
                className="cartBtn"
                onClick={() => handlePost(cartedProductData, 'addToCartList')}><ShoppingCartOutlinedIcon sx={{ fontSize: 20, paddingTop: '5px'}} /></button>
                <button className="wishAndView" onClick={() => setQuickView(true)}><VisibilityOutlinedIcon sx={{ fontSize: 20, paddingTop: '5px'}} /></button>
              </div>
            </div>
            <div className="detals" style={{ marginTop: '20px'}}>
              <Link className="titleLink" to={`shop/products/singleProducts/${_id}`}><Typography sx={{ fontFamily: 'Poppins', textAlign: 'center', fontSize: 16, fontWeight: 400, letterSpacing: 1, marginBottom: '5px'}}>
                {productTitle}
              </Typography></Link>
              <span className="rattis" style={{ color: '#ffa900', textAlign: 'center'}}>
              <Rating
                initialRating={averageRating / ratingsandreviews.length}
                emptySymbol={<StarBorderOutlinedIcon />}
                fullSymbol={<StarIcon />}
                readonly
              />
              </span>
              <Typography sx={{ fontFamily: 'Poppins', textAlign: 'center', marginTop: '5px'}}>
                {salePrice !== '0' && <><span className="activePrice">
                  ${salePrice} 
                </span>&nbsp;
                <span>-</span>&nbsp;</>}
                <span className={salePrice !== '0' ? 'deactivePrice' : 'activePrice'}>
                  ${regularPrice}
                </span>
              </Typography>
            </div>
          </div>
           <ProductQuickView open={quickView} data={data} setOpen={setQuickView} />
      </Grid>
    );
};

export default Card;