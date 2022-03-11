import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Rating from "react-rating";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import useAnimation from "../../../../../CustomHooks/useAnimation";
import useAuth from "../../../../../CustomHooks/useAuth";
import useHandleCheck from "../../../../../CustomHooks/useHandleCheck";
import { addProductToWish } from "../../../../../redux/actions/productActions";
import ProductQuickView from "../../../../SharedComponents/Modals/ProductQuickView";

const Card = ({ data, col, handlePost, handleUpdating }) => {
  const [quickView, setQuickView] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useAuth();
  useAnimation();

  // Let's destucturing the product data from the data object
  const {
    _id,
    productTitle,
    thumbnail,
    regularPrice,
    salePrice,
    ratingsandreviews,
  } = data;

  // Let's calculate the average rating and reviews here
  if (ratingsandreviews) {
    var rattingTotal = 0;
    for (const ratAndRev of ratingsandreviews) {
      let { ratting } = ratAndRev;
      rattingTotal = rattingTotal + Number(ratting);
    }
  }
  rattingTotal = rattingTotal.toFixed(1);

  // Carted product data saved  to the database
  const cartedProductData = {
    cartedProduct: data,
    uniqueId: _id,
    size: "M",
    quantity: 1,
    userEmail: user?.email,
  };

  // import handle cahecker here
  const { handleChecker } = useHandleCheck();

  return (
    <Grid item mb={4} xs={12} md={col} data-aos="fade-up">
      <div className="productCard">
        <div className="productWrapper">
          <div className="productImage">
            {salePrice !== "0" && (
              <span className="saleBadge">
                -{Math.ceil((regularPrice - salePrice) / (regularPrice / 100))}%
              </span>
            )}
            <Link to={`shop/products/singleProducts/${_id}`}>
              <img
                className="firstImage"
                style={{ width: "100%" }}
                src={thumbnail}
                alt="productThumbnail"
              />
            </Link>
          </div>
          <div className="buttons">
            <button
              className="wishAndView"
              onClick={() => {
                if (user?.email) {
                  dispatch(addProductToWish(cartedProductData));
                  handlePost(cartedProductData, "addToWishList");
                } else {
                  history.replace("/userAccount/user/login");
                }
              }}
            >
              <FavoriteBorderIcon sx={{ fontSize: 20, paddingTop: "5px" }} />
            </button>
            <button
              className="cartBtn"
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
              <ShoppingCartOutlinedIcon
                sx={{ fontSize: 20, paddingTop: "5px" }}
              />
            </button>
            <button className="wishAndView" onClick={() => setQuickView(true)}>
              <VisibilityOutlinedIcon
                sx={{ fontSize: 20, paddingTop: "5px" }}
              />
            </button>
          </div>
        </div>
        <div className="detals" style={{ marginTop: "20px" }}>
          <Link
            className="titleLink"
            to={`shop/products/singleProducts/${_id}`}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                textAlign: "center",
                fontSize: 16,
                fontWeight: 400,
                letterSpacing: 1,
                marginBottom: "5px",
              }}
            >
              {productTitle}
            </Typography>
          </Link>
          <span
            className="rattis"
            style={{ color: "#ffa900", textAlign: "center" }}
          >
            <Rating
              initialRating={rattingTotal / ratingsandreviews?.length}
              emptySymbol={<StarBorderOutlinedIcon />}
              fullSymbol={<StarIcon />}
              readonly
            />
          </span>
          <Typography
            sx={{
              fontFamily: "Poppins",
              textAlign: "center",
              marginTop: "5px",
            }}
          >
            {salePrice !== "0" && (
              <>
                <span className="activePrice">${salePrice}</span>&nbsp;
                <span>-</span>&nbsp;
              </>
            )}
            <span
              className={salePrice !== "0" ? "deactivePrice" : "activePrice"}
            >
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
