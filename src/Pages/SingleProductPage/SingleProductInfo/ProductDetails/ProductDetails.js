import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { Grid, Radio, Typography } from "@mui/material";
import React, { useState } from "react";
import Rating from "react-rating";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import useAuth from "../../../../CustomHooks/useAuth";
import useHandleCheck from "../../../../CustomHooks/useHandleCheck";
import { addProductToWish } from "../../../../redux/actions/productActions";

const ProductDetails = ({ productDetails, handlePost, handleUpdating }) => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const history = useHistory();

  // Let's destructuring the data from the productDetails object
  const {
    _id,
    productTitle,
    regularPrice,
    salePrice,
    ratingsandreviews,
    sizes,
    category,
  } = productDetails;

  // Assign initial size to the state
  let initialSize;
  if (sizes?.length) {
    initialSize = sizes[0];
  }

  const [selectedSize, setSelectedSize] = useState(initialSize);

  // Let's calculate the average rating and reviews here
  if (ratingsandreviews) {
    var rattingTotal = 0;
    for (const ratAndRev of ratingsandreviews) {
      let { ratting } = ratAndRev;
      rattingTotal = rattingTotal + Number(ratting);
    }
  }

  // Handle products sizes here
  const handleChangeSizes = (event) => {
    setSelectedSize(event.target.value);
  };

  // Carted product data saved  to the database
  const cartedProductData = {
    cartedProduct: productDetails,
    uniqueId: _id,
    size: selectedSize,
    quantity: quantity,
    userEmail: user?.email,
  };

  // import handle cahecker here
  const { handleChecker } = useHandleCheck();

  return (
    <>
      <Grid item xs={12} md={6}>
        <div className="productDetils">
          <div className="productTitle">
            <Typography
              sx={{
                fontSize: { md: 24, xs: 18 },
                fontWeight: 500,
                fontFamily: "Poppins",
                color: "#010101",
                marginBottom: "10px",
              }}
            >
              {productTitle}
            </Typography>
          </div>
          <div className="productPrices" style={{ marginBottom: "30px" }}>
            <Typography
              sx={{
                display: "inline",
                fontSize: 24,
                color: "#fe5252",
                fontFamily: "Poppins",
              }}
            >
              ${salePrice === "0" ? regularPrice : salePrice}
            </Typography>
            &nbsp;&nbsp;&nbsp;
            {salePrice === "0" ? (
              <></>
            ) : (
              <Typography
                sx={{
                  display: "inline",
                  fontSize: 18,
                  color: "#333",
                  fontFamily: "Poppins",
                  textDecoration: "line-through",
                }}
              >
                ${regularPrice}
              </Typography>
            )}
          </div>

          <div
            className="rattingAndReviws"
            style={{ display: "flex", marginBottom: "15px" }}
          >
            <span
              className="rattis"
              style={{
                color: "#ffa900",
                textAlign: "center",
              }}
            >
              <Rating
                initialRating={rattingTotal / ratingsandreviews?.length}
                emptySymbol={<StarBorderOutlinedIcon />}
                fullSymbol={<StarIcon />}
                readonly
              />
            </span>
            &nbsp; &nbsp; &nbsp;
            <span className="reviewAmount" style={{ color: "#555" }}>
              | &nbsp; &nbsp; {ratingsandreviews?.length} Reviews
            </span>
          </div>

          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              color: "#555",
              marginBottom: "40px",
            }}
          >
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
          </Typography>
          {/* Categories of products */}
          <h4
            style={{
              marginBottom: "2px",
              color: "#444",
              fontSize: "16px",
              fontFamily: "Poppins",
              fontWeight: 500,
            }}
          >
            Available Sizes:
          </h4>

          {sizes?.map((size) => (
            <span
              style={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              <Radio
                style={{
                  margin: "0px",
                  color: "rgb(222 77 247)",
                  fontWeight: 500,
                }}
                checked={selectedSize === size}
                onChange={handleChangeSizes}
                value={size}
                name="radio-buttons"
                inputProps={{ "aria-label": size }}
              />
              {size.toUpperCase()}
            </span>
          ))}

          <div className="actionButtons">
            <button
              className="counterBtn"
              style={{
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "16px",
              }}
              onClick={() => {
                if (quantity === 1) {
                  alert("Minimum quantity must be 1...!");
                } else {
                  setQuantity(quantity - 1);
                }
              }}
            >
              -
            </button>
            <span
              className="counterValue"
              style={{
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "16px",
              }}
            >
              {quantity}
            </span>
            <button
              className="counterBtn"
              style={{
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "16px",
              }}
              onClick={() => {
                if (quantity === 20) {
                  alert("Maximum quantity must be 20...!");
                } else {
                  setQuantity(quantity + 1);
                }
              }}
            >
              +
            </button>

            <button
              className="addToCartBtn"
              onClick={() => {
                if (user?.email) {
                  handleChecker(
                    handleUpdating,
                    handlePost,
                    cartedProductData,
                    _id
                  );
                } else {
                  history.replace("/userAccount/user/login");
                }
              }}
            >
              Add To Cart
            </button>
            <span
              className="wishAndCompareBtn"
              onClick={() => {
                if (user?.email) {
                  dispatch(addProductToWish(cartedProductData));
                  handlePost(cartedProductData, "addToWishList");
                } else {
                  history.replace("/userAccount/user/login");
                }
              }}
            >
              <FavoriteBorderIcon />
            </span>
          </div>
          <div className="taxonomy">
            <span
              className="taxonomyItema"
              style={{
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "16px",
              }}
            >
              Category: {category}
            </span>
          </div>
        </div>
      </Grid>
      {/* <ProductsInfoTabMain extraInfo={productDetails} /> */}
    </>
  );
};

export default ProductDetails;
