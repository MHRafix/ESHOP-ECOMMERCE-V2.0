import {
  Alert,
  CircularProgress,
  Container,
  Grid,
  Snackbar,
} from "@mui/material";
import React from "react";
import usePost from "../../../CustomHooks/usePost";
import useUpdate from "../../../CustomHooks/useUpdate";
import GifLoader from "../../../Images/ICONS/loadingGif.gif";
import BreadCrumb from "../../SharedComponents/BreadCrumb/BreadCrumb";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductSlider from "./ProductSlider.js/ProductSlider";

const SingleInfo = ({ data, loading }) => {
  const { productTitle, thumbnails } = data;
  const breadcrumbNavigation = {
    first: "Shop",
    middle: "Single Product",
    last: productTitle,
  };

  // Import usePost for posting carted product data to the data base
  const { handlePost, posting, success, setSuccess, alertText } = usePost();

  // import handleUpdating from custom hooks
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
    <section>
      {/* Single product page bredcrumb here */}
      <BreadCrumb breadcrumbNavigation={breadcrumbNavigation} />

      {loading ? (
        <div style={{ margin: "auto", textAlign: "center", marginTop: "50px" }}>
          <CircularProgress
            sx={{ textAlign: "center", margin: "auto" }}
            mt={3}
            color="secondary"
          />
        </div>
      ) : (
        <section style={{ marginTop: "100px" }}>
          <Container>
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
            <Grid
              container
              spacing={2}
              sx={{ justifyContent: "space-between" }}
            >
              {/* Single product slider here */}
              <ProductSlider key="4" slidersThumbnails={thumbnails} />

              {/* Single product detaild here  */}
              <ProductDetails
                key="1"
                productDetails={data}
                handlePost={handlePost}
                handleUpdating={handleUpdating}
              />
            </Grid>
          </Container>
          {posting || updating ? (
            <div className="gifLoader">
              <img className="gif" src={GifLoader} alt="loader" />
            </div>
          ) : (
            <></>
          )}
        </section>
      )}
    </section>
  );
};

export default SingleInfo;
