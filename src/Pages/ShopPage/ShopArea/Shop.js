import CalendarViewMonthOutlinedIcon from "@mui/icons-material/CalendarViewMonthOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewComfyOutlinedIcon from "@mui/icons-material/ViewComfyOutlined";
import {
  CircularProgress,
  Container,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import useGet from "../../../CustomHooks/useGet";
import usePost from "../../../CustomHooks/usePost";
import useUpdate from "../../../CustomHooks/useUpdate";
import ErrImage from "../../../Images/ICONS/shopingError.jpg";
import Card from "../../HomePage/ProductsTab/TabsProducts/ProductCard/Card";
import FancyAlert from "../../SharedComponents/FancyAlert";
import MobileSidebar from "../Sidebar/MobileSidebar";
import Sidebar from "../Sidebar/Sidebar";

const Shop = () => {
  // Import data from the customhooks
  const [dependency, setDependency] = useState("shopProducts");
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
  const { handlePost, success, setSuccess, alertText } = usePost();

  // handle update cart product to the database here
  // Carted product data update here
  const { handleUpdating, updated, setUpdated, updateText } = useUpdate();

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
      <Container>
        <Grid container spacing={2} sx={{ marginTop: 3 }}>
          <FancyAlert
            success={success}
            updated={updated}
            alertText={alertText}
            updateText={updateText}
          />
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
                  {gotData?.length ? (
                    <>
                      {gotData.map((data) => (
                        <Card
                          key={data._id}
                          data={data}
                          col={layout}
                          handlePost={handlePost}
                          handleUpdating={handleUpdating}
                        />
                      ))}
                      {gotData.length > 50 && (
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
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Shop;
// export default Shop;
