import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { Alert, CircularProgress, Grid, Snackbar } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { useHistory, useParams } from "react-router-dom";
import useAuth from "../../../../../../CustomHooks/useAuth";
import useUpdate from "../../../../../../CustomHooks/useUpdate";

const RatingsAndReviews = ({ ratingsandreviews }) => {
  // save review using react hook form to the database
  const { user } = useAuth();
  const history = useHistory();
  const { productId } = useParams();
  const { register, handleSubmit, reset } = useForm();

  // Import usePost from custom hooks
  const { handleUpdating, updating, updated, setUpdated, updateText } =
    useUpdate();

  // Handle customer review post here
  const onSubmit = (data) => {
    if (user?.email) {
      const { ratting, review } = data;
      const reviewData = {
        customerName: user?.displayName,
        customerImage: user?.photoURL,
        ratting,
        review,
      };

      handleUpdating(`addReview/${productId}`, reviewData);
      reset();
    } else {
      history.replace("/userAccount/user/login");
    }
  };

  // Hide alert here
  function hideAlert() {
    setUpdated(false);
  }

  if (updated) {
    setTimeout(hideAlert, 5000);
  }
  return (
    <div
      style={{
        padding: "0px 10px",
        margin: "20px 0px",
      }}
    >
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item md={5} xs={12}>
          <div className="allReviews">
            <h1>All Reviews : {ratingsandreviews.length}</h1> <br />
            {ratingsandreviews.map((ratingsandreview) => (
              <div className="singleReview">
                <Grid container sx={{ justifyContent: "space-evenly" }}>
                  <Grid item md={2} xs={3}>
                    <img
                      src={
                        ratingsandreview.customerImage
                          ? ratingsandreview.customerImage
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDyDSfTyTv1OK4X17b3gjyfTBzA-Cgg0UcLp1nlrmR_X_eB-eGjGmumX9_HwsafglidzM&usqp=CAU"
                      }
                      alt="reviwerImage"
                      className="reviwerImage"
                    />
                  </Grid>
                  <Grid item md={9} xs={8}>
                    <h2 className="reviwerName">
                      {ratingsandreview.customerName
                        ? ratingsandreview.customerName
                        : "Name not found!"}
                    </h2>
                    <span
                      className="rattis"
                      style={{ color: "#ffa900", textAlign: "center" }}
                    >
                      <Rating
                        // initialRating={averageRating / ratingsandreviews?.length}
                        initialRating={ratingsandreview.ratting}
                        emptySymbol={<StarBorderOutlinedIcon />}
                        fullSymbol={<StarIcon />}
                        readonly
                      />
                    </span>
                    <p className="reviewDesc">{ratingsandreview.review}</p>
                  </Grid>
                </Grid>
              </div>
            ))}
          </div>
        </Grid>
        <Grid item md={5} xs={12}>
          <div className="leaveReViewForm">
            <h1>Leave a Review</h1> <br />
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                id="inputField"
                placeholder="Enter rating point"
                {...register("ratting", { required: true, min: 1, max: 5 })}
              />
              <textarea
                type="text"
                id="inputField"
                placeholder="Enter review description"
                {...register("review", { required: true, maxLength: 100 })}
              ></textarea>
              <button type="submit" className="reviewSubmit">
                {updating ? (
                  <CircularProgress
                    size={16}
                    sx={{
                      color: "black",
                    }}
                  />
                ) : (
                  "Leave Now"
                )}
              </button>
            </form>
          </div>
        </Grid>
      </Grid>

      <Snackbar open={updated} autoHideDuration={6000}>
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
          {updateText}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default RatingsAndReviews;
