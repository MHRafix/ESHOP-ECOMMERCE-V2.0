import { Alert, Grid, Snackbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useDelete from "../../../CustomHooks/useDelete";
import CartIcon from "../../../Images/ICONS/cartIcon.png";

const ScrollingCartList = ({ cartProductsList }) => {
  let totalAmount = 0;
  for (const product of cartProductsList) {
    const salePrice = product?.cartedProduct?.salePrice;
    const regularPrice = product?.cartedProduct?.regularPrice;
    totalAmount =
      Number(salePrice !== "0" ? salePrice : regularPrice * product?.quantity) +
      Number(totalAmount);
  }

  // delete products from scrolling cartlist here
  const { handleDelete, deleteSuccess, setDeleteSuccess, deleteAlertText } =
    useDelete();

  function hideAlert() {
    setDeleteSuccess(false);
  }

  setTimeout(hideAlert, 5000);

  return (
    <div className="scrollingITems">
      <div className="scrollingCartItems">
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
        <Grid container sx={{ padding: "20px 5px" }}>
          {cartProductsList.length ? (
            <Grid item md={12} xs={12}>
              {cartProductsList.map((cartProduct) => (
                <Grid container xs={12} md={12}>
                  <Grid item md={3} xs={3}>
                    <img
                      width="70"
                      height="100"
                      src={cartProduct?.cartedProduct?.thumbnail}
                      alt="Imagecart"
                    />
                  </Grid>
                  <Grid item md={8} xs={8}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        lineHeight: "25px",
                        textTransform: "capitalize",
                      }}
                    >
                      {cartProduct?.cartedProduct?.productTitle} <br />
                      QTY: {cartProduct?.quantity} <br />$
                      {cartProduct?.cartedProduct?.salePrice !== "0"
                        ? cartProduct?.cartedProduct?.salePrice
                        : cartProduct?.cartedProduct?.regularPrice}
                    </Typography>
                  </Grid>
                  <Grid item md={1} xs={1}>
                    {cartProduct?._id ? (
                      <button
                        className="scrollingItemCrossBtn"
                        onClick={() => {
                          handleDelete(
                            `deleteCartlistProducts/${cartProduct?._id}`,
                            cartProduct.cartedProduct._id
                          );
                        }}
                      >
                        &times;
                      </button>
                    ) : (
                      <></>
                    )}
                  </Grid>
                </Grid>
              ))}
            </Grid>
          ) : (
            <div className="notFoundMsg">
              <img
                src={CartIcon}
                width="100"
                height="100"
                alt="errImage"
                style={{ textAlign: "center" }}
              />
              <h1 className="errMssg">No products added to cart...!</h1>
            </div>
          )}
        </Grid>
      </div>
      {cartProductsList.length ? (
        <div className="navigation">
          <Grid
            container
            sx={{
              padding: "0px 5px",
              fontSize: "18px",
              fontFamily: "Poppins",
              fontWeight: 500,
            }}
          >
            <Grid item xs={8} md={8}>
              Total
            </Grid>
            <Grid item xs={4} sx={{ textAlign: "right" }} md={4}>
              ${Math.ceil(totalAmount)}
            </Grid>
          </Grid>
          <Link to="/cartlist">
            <button className="checkoutandviewCartBtn">View Cart</button>
          </Link>
          <Link to="/checkout">
            <button className="checkoutandviewCartBtn">Checkout Now</button>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ScrollingCartList;
