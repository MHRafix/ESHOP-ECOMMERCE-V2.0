import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setCartListProducts,
  setMyOrders,
  setProducts,
  setWishListProducts,
} from "../redux/actions/productActions";

const useGet = (url) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const getProducts = async () => {
    setLoading(true);
    const res = await axios
      .get(`https://eshopy-server.herokuapp.com/${url}`)
      .catch((err) => {
        console.log("Error", err);
      });

    // conditionaly store data to the state
    if (url.slice(0, 15) === "getFromCartList") {
      dispatch(setCartListProducts(res.data));
    } else if (url.slice(0, 15) === "getFromWishList") {
      dispatch(setWishListProducts(res.data));
    } else if (url.slice(0, 9) === "allOrders") {
      dispatch(setMyOrders(res.data));
    } else {
      dispatch(setProducts(res.data));
    }
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [url]);
  return { loading };
};

export default useGet;
