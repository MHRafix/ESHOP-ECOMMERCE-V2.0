import { Alert, Grid, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import useAuth from "../../../../CustomHooks/useAuth";
import usePost from "../../../../CustomHooks/usePost";
import GifLoader from "../../../../Images/ICONS/loadingGif.gif";
import Table from "../CheckoutTable/Table";

const Form = () => {
  // Import react hook form functionality here
  const { register, handleSubmit } = useForm();
  const [districts, setDistricts] = useState([]);
  const { user } = useAuth();

  // Get all cartlist data from redux
  const gotData = useSelector(
    (state) => state.cartlistAllProducts.cartlistProducts
  );

  // Total price count here
  let totalPrice = 0;
  for (const data of gotData) {
    const price = Number(data?.cartedProduct?.salePrice * data?.quantity);
    totalPrice = totalPrice + price;
  }

  // Import usePost from custom hooks
  const { handlePost, posting, success, setSuccess, alertText } = usePost();

  // Handle customer address form here
  const onSubmit = (data) => {
    const orderedData = {
      orderedProducts: gotData,
      customerInfo: data,
      userEmail: user?.email,
      grandTotalPrice: totalPrice,
      status: "pendding",
    };

    handlePost(orderedData, "allCustomersOrders");
  };

  // Handle districts api of Bangladesh
  useEffect(() => {
    fetch("../districts.json")
      .then((res) => res.json())
      .then((data) => {
        setDistricts(data);
      });
  }, []);

  // Hide alert here
  function hideAlert() {
    setSuccess(false);
  }

  if (success) {
    setTimeout(hideAlert, 5000);
  }

  return (
    <div className="userInformationForm">
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Billing Details</h2> <br />
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid item xs={12} md={6} sx={{ width: "58%" }}>
            <label>First Name*</label> <br />
            <input
              id="inputFiled"
              type="text"
              {...register("firstName", { required: true, maxLength: 20 })}
              required
            />{" "}
            <br />
            <label>Last Name*</label>
            <br />
            <input
              id="inputFiled"
              type="text"
              {...register("lastName", { required: true })}
              required
            />
            <br />
            <label>Email*</label>
            <br />
            <input
              id="inputFiled"
              type="email"
              {...register("customerValidEmail", { required: true })}
              required
            />
            <br />
            <label>Phone*</label>
            <br />
            <input
              id="inputFiled"
              type="tel"
              {...register("phoneNumber", { required: true })}
              required
            />{" "}
            <br />
            <label>District*</label>
            <br />
            <select
              id="inputFiled"
              style={{ width: "99%" }}
              {...register("district", { required: true })}
            >
              <option selected>Select your district</option>
              {districts?.map((district) => (
                <option value={district.name}>{district.name}</option>
              ))}
            </select>
            <br />
            <label>Street/Village*</label>
            <br />
            <input
              id="inputFiled"
              type="text"
              {...register("streetVillage", { required: true })}
              required
            />
            <br />
            <label>Note</label>
            <br />
            <textarea
              id="inputFiled"
              type="text"
              {...register("customerNote")}
            ></textarea>
            <br />
          </Grid>
          <Grid xs={12} md={5} sx={{ width: "38%" }}>
            <Table totalPrice={totalPrice} />
            <button className="btnButton" type="submit">
              Place Order
            </button>
          </Grid>
        </Grid>
      </form>
      {posting && (
        <div className="gifLoader">
          <img className="gif" src={GifLoader} alt="loader" />
        </div>
      )}
    </div>
  );
};

export default Form;
