import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Badge } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import useAuth from "../../../CustomHooks/useAuth";
import useGet from "../../../CustomHooks/useGet";

const WishListBtn = () => {
  // Import current user data from context api
  const { user } = useAuth();

  // Import data from custom hooks
  const gotData = useSelector(
    (state) => state.wishlistAllProducts.wishlistProducts
  );
  const { loading } = useGet(`getFromWishList/${user?.email}`);

  return (
    <Badge
      badgeContent={gotData?.length && !loading ? gotData?.length : "0"}
      color="secondary"
    >
      <FavoriteBorderOutlinedIcon />
    </Badge>
  );
};

export default WishListBtn;
