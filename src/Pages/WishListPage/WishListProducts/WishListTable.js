import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Alert, Grid, Snackbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import useAuth from "../../../CustomHooks/useAuth";
import useDelete from "../../../CustomHooks/useDelete";
import useHandleCheck from "../../../CustomHooks/useHandleCheck";
import usePost from "../../../CustomHooks/usePost";
import useUpdate from "../../../CustomHooks/useUpdate";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
} from "../../../redux/actions/productActions";

const WishListTable = ({ data }) => {
  const presentPath = window.location.pathname;
  const { thumbnail, productTitle, salePrice, regularPrice } =
    data.cartedProduct;
  let productQuantity = data.quantity;
  const [quantity, setQuantity] = useState(Number(productQuantity));

  const { user } = useAuth();
  const history = useHistory();
  const dispatch = useDispatch();
  let valuedPrice = 1;
  if (salePrice !== "0") {
    valuedPrice = salePrice;
  } else {
    valuedPrice = regularPrice;
  }

  // Move wishList product to cart list
  const { handlePost, success, setSuccess, alertText } = usePost();

  // handle update cart product here
  const { handleUpdating, updated, setUpdated, updateText } = useUpdate();

  // import handle checker here
  const { handleChecker } = useHandleCheck();

  const cartedProductData = {
    cartedProduct: data?.cartedProduct,
    uniqueId: data?.cartedProduct?._id,
    size: "M",
    quantity: 1,
    userEmail: user?.email,
  };

  // handle delete wishlist products here
  const { handleDelete, deleteSuccess, setDeleteSuccess, deleteAlertText } =
    useDelete();

  // Hide alert here
  function hideAlert() {
    if (success) {
      setSuccess(false);
    } else if (updated) {
      setUpdated(false);
    } else if (deleteSuccess) {
      setDeleteSuccess(false);
    }
  }

  // auto hide alert handle here
  if (success || deleteSuccess || updated) {
    setTimeout(hideAlert, 5000);
  }

  return (
    <Grid container sx={{ alignItems: "center" }}>
      <Snackbar
        open={success || updated || deleteSuccess}
        autoHideDuration={6000}
      >
        <Alert
          severity="success"
          sx={{
            width: "100%",
            background: "rgb(46 125 50)",
            color: "white",
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: { xs: "13px", md: "18px" },
          }}
        >
          {success || updated ? (
            <>{success ? alertText : updateText}</>
          ) : (
            deleteAlertText
          )}
        </Alert>
      </Snackbar>
      <Grid
        item
        xs={presentPath === "/wishlist" ? 2.4 : 2}
        md={presentPath === "/wishlist" ? 2.4 : 2}
        sx={{ textAlign: "center", color: "#555" }}
      >
        {" "}
        <img
          className="wishListProductimage"
          src={thumbnail}
          alt="wishListProduct"
        />
      </Grid>
      <Grid
        item
        md={presentPath === "/wishlist" ? 2.4 : 2}
        sx={{
          textAlign: "center",
          color: "#555",
          fontSize: { xs: 11, md: 15 },
          display: { md: "block", xs: "none" },
          textTransform: "capitalize",
        }}
      >
        {productTitle}
      </Grid>
      {presentPath === "/wishlist" && (
        <Grid
          item
          xs={presentPath === "/wishlist" ? 2.4 : 2}
          md={presentPath === "/wishlist" ? 2.4 : 2}
          sx={{ textAlign: "center", color: "#555" }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              textAlign: "center",
              marginTop: "5px",
              fontSize: { xs: 10, md: 15 },
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
        </Grid>
      )}
      {presentPath === "/cartlist" && (
        <Grid
          item
          xs={presentPath === "/wishlist" ? 2.4 : 2}
          md={presentPath === "/wishlist" ? 2.4 : 2}
          sx={{ textAlign: "center", color: "#555" }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              textAlign: "center",
              marginTop: "5px",
              fontSize: { xs: 10, md: 15 },
            }}
          >
            {salePrice !== "0" ? (
              <span className="activePrice">${salePrice}</span>
            ) : (
              <span className="activePrice">${regularPrice}</span>
            )}
          </Typography>
        </Grid>
      )}
      {presentPath === "/wishlist" && (
        <Grid
          item
          xs={2.4}
          md={2.4}
          sx={{ textAlign: "center", color: "#555" }}
        >
          <button
            className="wishListCartBtn"
            onClick={() => {
              if (user?.email) {
                handleChecker(
                  handleUpdating,
                  handlePost,
                  cartedProductData,
                  data?.cartedProduct?._id
                );
              } else {
                history.replace("/userAccount/user/login");
              }
            }}
          >
            <ShoppingCartOutlinedIcon
              sx={{ fontSize: 15, paddingTop: "5px" }}
            />
          </button>
        </Grid>
      )}
      {presentPath === "/cartlist" && (
        <Grid item xs={2} md={2} sx={{ textAlign: "center", color: "#555" }}>
          <button
            className="counterBtn"
            onClick={() => {
              if (quantity === 1) {
                alert("Minimum quantity must be bigger than 1...!");
              } else {
                setQuantity(quantity - 1);
                dispatch(decreaseProductQuantity(cartedProductData));
                handleUpdating(
                  `decCartProductQty/${user?.email}/${data?.cartedProduct?._id}`
                );
              }
            }}
          >
            -
          </button>
          <span className="counterValue">{quantity}</span>
          <button
            className="counterBtn"
            onClick={() => {
              if (quantity === 20) {
                alert("Maximum quantity must be lower than 20...!");
              } else {
                setQuantity(quantity + 1);
                dispatch(increaseProductQuantity(cartedProductData));
                handleUpdating(
                  `incCartProductQty/${user?.email}/${data?.cartedProduct?._id}`
                );
              }
            }}
          >
            +
          </button>
        </Grid>
      )}
      {presentPath === "/cartlist" && (
        <Grid
          item
          xs={2}
          md={2}
          sx={{
            textAlign: "center",
            color: "#555",
            fontSize: { md: 15, xs: 12 },
          }}
        >
          ${Math.ceil(quantity * valuedPrice)}
        </Grid>
      )}
      <Grid
        item
        xs={presentPath === "/wishlist" ? 2.4 : 2}
        md={presentPath === "/wishlist" ? 2.4 : 2}
        sx={{ textAlign: "center" }}
      >
        <button
          className="crossBtn"
          onClick={() => {
            if (presentPath === "/cartlist") {
              handleDelete(
                `deleteCartlistProducts/${data._id}`,
                cartedProductData.cartedProduct._id
              );
            } else if (presentPath === "/wishlist") {
              handleDelete(`deleteWishlistProducts/${data._id}`, data._id);
            }
          }}
        >
          &times;
        </button>
      </Grid>
    </Grid>
  );
};

export default WishListTable;
