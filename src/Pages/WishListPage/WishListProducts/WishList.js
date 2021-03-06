import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../CustomHooks/useAuth";
import useGet from "../../../CustomHooks/useGet";
import CartIcon from "../../../Images/ICONS/cartIcon.png";
import ErrImage from "../../../Images/ICONS/wishlistIcon.png";
import CartTotalCard from "../../CartListPage/CartTotalCard";
import WishListTable from "./WishListTable";

const WishList = ({ gotData }) => {
  const { user } = useAuth();
  const presentPath = window.location.pathname;
  let getUrl;
  if (presentPath === "/wishlist" && user.email) {
    getUrl = `getFromWishList/${user.email}`;
  } else {
    getUrl = `getFromCartList/${user.email}`;
  }

  // Import product data from redux using custom hooks
  const { loading } = useGet(getUrl);

  // Total price count here
  let totalPrice = 0;
  for (const data of gotData) {
    const salePrice = data?.cartedProduct?.salePrice;
    const regularPrice = data?.cartedProduct?.regularPrice;
    const price = Number(
      (salePrice !== "0" ? salePrice : regularPrice) * data?.quantity
    );
    totalPrice = totalPrice + price;
  }

  return (
    <section>
      <div className="wishListWrapper">
        {loading ? (
          <div style={{ textAlign: "center" }}>
            <CircularProgress
              size={40}
              sx={{ textAlign: "center", margin: "auto" }}
              mt={5}
              color="secondary"
            />
          </div>
        ) : (
          <Container>
            {gotData.length ? (
              <>
                <div className="heading">
                  <Typography
                    sx={{
                      fontSize: 25,
                      fontWeight: 500,
                      fontFamily: "Poppins",
                    }}
                  >
                    Your {presentPath === "/wishlist" ? "wishlist" : "cart"}{" "}
                    items
                  </Typography>
                </div>{" "}
                <br />
                <Grid container sx={{ alignItems: "center" }}>
                  <Grid
                    item
                    xs={presentPath === "/wishlist" ? 2.4 : 2}
                    md={presentPath === "/wishlist" ? 2.4 : 2}
                    sx={{
                      textAlign: "center",
                      color: "#555",
                      fontFamily: "Poppins",
                      fontSize: { xs: 10, md: 14 },
                    }}
                  >
                    {"image".toUpperCase()}
                  </Grid>
                  <Grid
                    item
                    xs={presentPath === "/wishlist" ? 2.4 : 2}
                    md={presentPath === "/wishlist" ? 2.4 : 2}
                    sx={{
                      textAlign: "center",
                      color: "#555",
                      fontFamily: "Poppins",
                      fontSize: { xs: 10, md: 14 },
                      display: { md: "block", xs: "none" },
                    }}
                  >
                    {"product name".toUpperCase()}
                  </Grid>
                  <Grid
                    item
                    xs={presentPath === "/wishlist" ? 2.4 : 2}
                    md={presentPath === "/wishlist" ? 2.4 : 2}
                    sx={{
                      textAlign: "center",
                      color: "#555",
                      fontFamily: "Poppins",
                      fontSize: { xs: 10, md: 14 },
                    }}
                  >
                    {"unit price".toUpperCase()}
                  </Grid>
                  {presentPath === "/wishlist" && (
                    <Grid
                      item
                      xs={2.4}
                      md={2.4}
                      sx={{
                        textAlign: "center",
                        color: "#555",
                        fontFamily: "Poppins",
                        fontSize: { xs: 10, md: 14 },
                      }}
                    >
                      {"add to cart".toUpperCase()}
                    </Grid>
                  )}
                  {presentPath === "/cartlist" && (
                    <Grid
                      item
                      xs={2}
                      md={2}
                      sx={{
                        textAlign: "center",
                        color: "#555",
                        fontFamily: "Poppins",
                        fontSize: { xs: 10, md: 14 },
                      }}
                    >
                      {"Quantity".toUpperCase()}
                    </Grid>
                  )}
                  {presentPath === "/cartlist" && (
                    <Grid
                      item
                      xs={2}
                      md={2}
                      sx={{
                        textAlign: "center",
                        color: "#555",
                        fontFamily: "Poppins",
                        fontSize: { xs: 10, md: 14 },
                      }}
                    >
                      {"sub total".toUpperCase()}
                    </Grid>
                  )}
                  <Grid
                    item
                    xs={presentPath === "/wishlist" ? 2.4 : 2}
                    md={presentPath === "/wishlist" ? 2.4 : 2}
                    sx={{
                      textAlign: "center",
                      color: "#555",
                      fontFamily: "Poppins",
                      fontSize: { xs: 10, md: 14 },
                    }}
                  >
                    {"Action".toUpperCase()}
                  </Grid>
                </Grid>
                {gotData.map((data) => (
                  <WishListTable key={data._id} data={data} />
                ))}
                {presentPath === "/cartlist" && (
                  <CartTotalCard totalPrice={totalPrice} />
                )}
              </>
            ) : (
              <div className="errorMessage" style={{ textAlign: "center" }}>
                <img
                  src={presentPath === "/wishlist" ? ErrImage : CartIcon}
                  style={{ width: "20%", height: "100%", margin: "auto" }}
                  alt="errImage"
                />
                <h1 className="errMssg">
                  No items found in{" "}
                  {presentPath === "/wishlist" ? "wishlist" : "cartlist"}...!
                </h1>{" "}
                <br />
                <Link
                  to="/shop"
                  style={{
                    textDecoration: "none",
                    fontFamily: "Poppins",
                    background: "var(--btn-bg)",
                    color: "#fff",
                    padding: "10px 30px",
                    marginTop: "20px",
                  }}
                >
                  Add Items
                </Link>
              </div>
            )}
          </Container>
        )}
      </div>
    </section>
  );
};

export default WishList;
