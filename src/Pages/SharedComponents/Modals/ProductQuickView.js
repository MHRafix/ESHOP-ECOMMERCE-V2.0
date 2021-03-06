import { Grid } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React from "react";
import usePost from "../../../CustomHooks/usePost";
import useUpdate from "../../../CustomHooks/useUpdate";
import ProductDetails from "../../SingleProductPage/SingleProductInfo/ProductDetails/ProductDetails";
import ProductSlider from "../../SingleProductPage/SingleProductInfo/ProductSlider.js/ProductSlider";
import FancyAlert from "../FancyAlert";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85%",
  height: "90vh",
  overflowX: "auto",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

function ProductQuickView({ open, data, setOpen }) {
  // Import data from custom hooks
  const { handlePost, success, setSuccess, alertText } = usePost();

  // import handleUpdating from custom hooks
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
    <>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <Typography
            id="spring-modal-title"
            sx={{
              textAlign: "right",
              position: "fixed",
              top: "5px",
              left: "5px",
              zIndex: "222",
            }}
          >
            <button className="crossBtn" onClick={() => setOpen(false)}>
              &times;
            </button>
          </Typography>
          <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
            {/* Single product slider here */}
            <ProductSlider
              key={data?.thumbnails}
              slidersThumbnails={data?.thumbnails}
            />

            {/* Single product detaild here  */}
            <ProductDetails
              key={data}
              productDetails={data}
              handlePost={handlePost}
              handleUpdating={handleUpdating}
            />
            <FancyAlert
              success={success}
              updated={updated}
              alertText={alertText}
              updateText={updateText}
            />
          </Grid>
        </Box>
      </Modal>
    </>
  );
}

export default ProductQuickView;
