import { CircularProgress, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import useGet from "../../../../../CustomHooks/useGet";
import usePost from "../../../../../CustomHooks/usePost";
import useUpdate from "../../../../../CustomHooks/useUpdate";
import FancyAlert from "../../../../SharedComponents/FancyAlert";
import Card from "../ProductCard/Card";

const AllProducts = ({ apiDestination }) => {
  // Import product data from redux using custom hooks
  const gotData = useSelector((state) => state.allProducts.products);
  const { loading } = useGet(apiDestination);

  // Carted product data saved  to the database
  const { handlePost, success, setSuccess, alertText } = usePost();

  // Carted product data update here
  const { handleUpdating, updated, setUpdated, updateText } = useUpdate();

  // Hide alert here
  function hideAlert() {
    if (success) {
      setSuccess(false);
    } else {
      setUpdated(false);
    }
  }

  if (success || updated) {
    setTimeout(hideAlert, 5000);
  }

  return (
    <Grid container spacing={2}>
      <FancyAlert
        success={success}
        updated={updated}
        alertText={alertText}
        updateText={updateText}
      />

      {loading ? (
        <CircularProgress
          sx={{ textAlign: "center", margin: "auto" }}
          mt={3}
          color="secondary"
        />
      ) : (
        <>
          {gotData?.map((data) => (
            <Card
              key={data._id}
              data={data}
              col={3}
              handlePost={handlePost}
              handleUpdating={handleUpdating}
            />
          ))}
        </>
      )}
    </Grid>
  );
};

export default AllProducts;
