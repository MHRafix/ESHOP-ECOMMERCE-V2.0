import { Alert, CircularProgress, Grid, Snackbar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import useGet from "../../../../../CustomHooks/useGet";
import usePost from "../../../../../CustomHooks/usePost";
import useUpdate from "../../../../../CustomHooks/useUpdate";
import GifLoader from "../../../../../Images/ICONS/loadingGif.gif";
import Card from "../ProductCard/Card";
const NewProducts = () => {
  // Import product data from redux using custom hooks
  const gotData = useSelector((state) => state.allProducts.products);
  const { loading } = useGet("newArrivalProducts");

  // Carted product data saved  to the database
  const { handlePost, posting, success, setSuccess, alertText } = usePost();

  // Carted product data update here
  const { handleUpdating, updating, updated, setUpdated, updateText } =
    useUpdate();

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
      <Snackbar open={success || updated} autoHideDuration={6000}>
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
          {success ? alertText : updateText}
        </Alert>
      </Snackbar>
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
      {posting || updating ? (
        <div className="gifLoader2">
          <img className="gif" src={GifLoader} alt="loader" />
        </div>
      ) : (
        <></>
      )}
    </Grid>
  );
};

export default NewProducts;
