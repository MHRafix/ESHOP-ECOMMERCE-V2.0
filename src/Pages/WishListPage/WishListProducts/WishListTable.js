import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Alert, Grid, Snackbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useAuth from "../../../CustomHooks/useAuth";
import useDelete from "../../../CustomHooks/useDelete";
import usePost from "../../../CustomHooks/usePost";
import GifLoader from "../../../Images/ICONS/loadingGif.gif";
import { addProductToCart } from "../../../redux/actions/productActions";

const WishListTable = ({ data }) => {
  const presentPath = window.location.pathname;
  const { thumbnail, productTitle, salePrice, regularPrice } =
    data.cartedProduct;
  let productQuantity = data.quantity;
  const [quantity, setQuantity] = useState(Number(productQuantity));
  const { user } = useAuth();
  // Move wishList product to cart list
  const { posting, handlePost, success, setSuccess, alertText } = usePost();
  const cartedProductData = {
    cartedProduct: data.cartedProduct,
    size: "M",
    quantity: 1,
    userEmail: user?.email,
  };

  // handle delete wishlist products here
  const {
    deleting,
    handleDelete,
    deleteSuccess,
    setDeleteSuccess,
    deleteAlertText,
  } = useDelete();

  // Hide alert here
  function hideAlert() {
    if (success) {
      setSuccess(false);
    } else if (deleteSuccess) {
      setDeleteSuccess(false);
    }
  }

  if (success) {
    setTimeout(hideAlert, 5000);
  } else if (deleteSuccess) {
    setTimeout(hideAlert, 5000);
  }

  const dispatch = useDispatch();
  return (
    <Grid container sx={{ alignItems: "center" }}>
      <Snackbar open={success} autoHideDuration={6000}>
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
          {alertText}
        </Alert>
      </Snackbar>
      <Snackbar open={deleteSuccess} autoHideDuration={6000}>
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
          {deleteAlertText}
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
          display: "block",
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
              dispatch(addProductToCart(cartedProductData));
              handlePost(cartedProductData, "addToWishList");
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
                alert("Minimum quantity must be 1...!");
              } else {
                setQuantity(quantity - 1);
              }
            }}
          >
            -
          </button>
          <span className="counterValue">{quantity}</span>
          <button
            className="counterBtn"
            onClick={() => {
              if (quantity === 100) {
                alert("Maximum quantity must be 10000...!");
              } else {
                setQuantity(quantity + 1);
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
          sx={{ textAlign: "center", color: "#555", fontSize: 15 }}
        >
          ${Math.ceil(quantity * salePrice)}
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
      {posting && (
        <div className="gifLoader">
          <img className="gif" src={GifLoader} alt="loader" />
        </div>
      )}

      {deleting && (
        <div className="gifLoader">
          <img className="gif" src={GifLoader} alt="loader" />
        </div>
      )}
    </Grid>
  );
};

export default WishListTable;
