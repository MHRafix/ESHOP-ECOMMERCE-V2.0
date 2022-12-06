import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CartTotalCard = ({ totalPrice }) => {
  // Take some state and calculate grandTotalPrice here
  const [couponCode, setCouponCode] = useState("");
  const [reducePrice, setReducePrice] = useState(0);
  const grandTotalPrice = totalPrice - reducePrice;

  // handle coupon code validation function here
  const handleCouponCode = () => {
    if (couponCode === "reduce10%") {
      setReducePrice((totalPrice / 100) * 10);
      alert("Coupon code successfully appliyed!");
      // setReducePrice(totalPrice - (totalPrice / 100) * 10);
    } else if (couponCode === "reduce10%" && totalPrice !== grandTotalPrice) {
      alert("Coupon code is already appliyed!");
    } else if (couponCode === "") {
      alert("Empty....!");
    } else {
      alert("Your coupon code doesn't exist!");
    }
  };
  return (
    <Grid
      container
      sx={{ padding: { xs: "0px 0px", md: "0px 20px", margin: "50px 0px" } }}
    >
      <Grid item xs={12} md={3} sx={{ margin: "0px 0px 30px 0px" }}>
        <Grid container sx={{ overflow: "hidden" }}>
          <Grid
            item
            md={12}
            xs={12}
            sx={{
              fontSize: "25px",
              fontWeight: 700,
              fontFamily: "Poppins",
              marginBottom: "20px",
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px",
            }}
          >
            Apply Coupon
          </Grid>
          <Grid item md={12} xs={12}>
            <input
              placeholder="Enter coupon code..."
              className="couponFiled"
              onChange={(e) => setCouponCode(e.target.value)}
              type="text"
              required
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <button className="btnButton" onClick={handleCouponCode}>
              Apply Now
            </button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}></Grid>
      <Grid item xs={12} md={3}>
        <Grid container sx={{ overflow: "hidden" }}>
          <Grid
            item
            md={12}
            xs={12}
            sx={{
              fontSize: "25px",
              fontWeight: 700,
              fontFamily: "Poppins",
              marginBottom: "20px",
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px",
            }}
          >
            Cart Total
          </Grid>
          <Grid item md={8} xs={8}>
            Pruduct Total:
          </Grid>
          <Grid item md={4} xs={4} sx={{ textAlign: "right" }}>
            $ {totalPrice.toFixed(2)}
          </Grid>
          <Grid item md={8} xs={8}>
            Grand Total:
          </Grid>
          <Grid item md={4} xs={4} sx={{ textAlign: "right" }}>
            $ {grandTotalPrice.toFixed(2)}
          </Grid>
          <Grid item md={12} xs={12}>
            <Link to="/checkout">
              <button className="btnButton">Checkout Now</button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CartTotalCard;
