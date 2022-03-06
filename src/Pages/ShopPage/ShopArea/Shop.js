import CalendarViewMonthOutlinedIcon from "@mui/icons-material/CalendarViewMonthOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewComfyOutlinedIcon from "@mui/icons-material/ViewComfyOutlined";
import {
  Alert,
  CircularProgress,
  Container,
  Grid,
  Pagination,
  Snackbar,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import useGet from "../../../CustomHooks/useGet";
import usePost from "../../../CustomHooks/usePost";
import GifLoader from "../../../Images/ICONS/loadingGif.gif";
import ErrImage from "../../../Images/ICONS/shopingError.jpg";
// import { SET_QUANTITY } from "../../../redux/contants/action-types";
import Card from "../../HomePage/ProductsTab/TabsProducts/ProductCard/Card";
import MobileSidebar from "../Sidebar/MobileSidebar";
import Sidebar from "../Sidebar/Sidebar";

const Shop = () => {
  // Import data from the customhooks
  const [dependency, setDependency] = useState("products");
  const [layout, setLayout] = useState(4);

  // Import product data from redux using custom hooks
  const gotData = useSelector((state) => state.allProducts.products);
  const { loading } = useGet(dependency);

  // Handle product searching here
  const handleSearchProducts = (e) => {
    if (e.target.value) {
      setDependency(`products/searchedProducts/${e.target.value}`);
    } else {
      setDependency("products");
    }
  };

  // Carted product data saved  to the database
  const { handlePost, posting, success, setSuccess, alertText } = usePost();

  // Set layout btn color
  let layout1Color = "#444";
  let layout2Color = "#444";
  let layout3Color = "#444";
  if (layout === 4) {
    layout1Color = "#a749ff";
    layout3Color = "#444";
    layout2Color = "#444";
  } else if (layout === 3) {
    layout1Color = "#444";
    layout3Color = "#a749ff";
    layout2Color = "#444";
  } else if (layout === 6) {
    layout1Color = "#444";
    layout3Color = "#444";
    layout2Color = "#a749ff";
  }

  // Hide alert here
  function hideAlert() {
    setSuccess(false);
  }

  if (success) {
    setTimeout(hideAlert, 5000);
  }

  return (
    <section>
      <Container>
        <Grid container spacing={2} sx={{ marginTop: 3 }}>
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
          <Grid
            item
            md={3}
            xs={12}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Sidebar dpend={setDependency} dependency={dependency} />
          </Grid>
          <Grid item md={9} xs={12}>
            <div className="shopTopBar">
              <Grid container mb={5}>
                <Grid
                  item
                  md={3}
                  xs={12}
                  mb={2}
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "start", md: "center" },
                    alignItems: "center",
                    paddingTop: "15px",
                  }}
                >
                  <Grid container sx={{ alignItems: "center" }}>
                    <Grid item xs={11} md={12}>
                      <Typography
                        sx={{
                          color: "#444",
                          fontFamily: "Poppins",
                          fontWeight: 500,
                          textAlign: { xs: "left", md: "center" },
                          marginLeft: { xs: "10px", md: "0px" },
                        }}
                      >
                        Showing {gotData.length} products
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={1}
                      sx={{ dispaly: { md: "none", xs: "block" } }}
                    >
                      <MobileSidebar
                        dpend={setDependency}
                        dependency={dependency}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={9} xs={12} sx={{ textAlign: "center" }}>
                  <Grid container>
                    <Grid item md={10} xs={12}>
                      <input
                        onChange={handleSearchProducts}
                        type="search"
                        id="shopTopBarSearchInput"
                        placeholder="Search by products name..."
                      />
                    </Grid>
                    <Grid
                      item
                      md={2}
                      sx={{
                        display: { xs: "none", md: "flex" },
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <GridViewIcon
                        sx={{
                          fontSize: 25,
                          border: `1px solid ${layout2Color}`,
                          cursor: "pointer",
                          color: `${layout2Color}`,
                        }}
                        onClick={() => setLayout(6)}
                      />
                      <CalendarViewMonthOutlinedIcon
                        sx={{
                          fontSize: 25,
                          border: `1px solid ${layout1Color}`,
                          cursor: "pointer",
                          color: `${layout1Color}`,
                        }}
                        onClick={() => setLayout(4)}
                      />
                      <ViewComfyOutlinedIcon
                        sx={{
                          fontSize: 25,
                          border: `1px solid ${layout3Color}`,
                          cursor: "pointer",
                          color: `${layout3Color}`,
                        }}
                        onClick={() => setLayout(3)}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <Grid container spacing={2}>
              {loading ? (
                <CircularProgress
                  size={40}
                  sx={{ textAlign: "center", margin: "auto" }}
                  mt={5}
                  color="secondary"
                />
              ) : (
                <>
                  {gotData.length ? (
                    <>
                      {gotData.map((data) => (
                        <Card
                          key={data._id}
                          data={data}
                          col={layout}
                          handlePost={handlePost}
                        />
                      ))}
                      {gotData.length > 9 && (
                        <div
                          className="pagination"
                          style={{
                            fontFamily: "Poppins",
                            fontWeight: 500,
                            margin: "20px 0px",
                          }}
                        >
                          <Stack spacing={2}>
                            <Pagination
                              count={10}
                              color="secondary"
                              sx={{ margin: "auto" }}
                            />
                          </Stack>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="errorMessage">
                      <img
                        src={ErrImage}
                        width="200"
                        height="200"
                        alt="errImage"
                        className="errImg"
                      />
                      <h1 className="errMssg">No Products Matched...!</h1>
                    </div>
                  )}
                </>
              )}
            </Grid>
            {posting && (
              <div className="gifLoader3">
                <img className="gif" src={GifLoader} alt="loader" />
              </div>
            )}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Shop;
// export default Shop;
