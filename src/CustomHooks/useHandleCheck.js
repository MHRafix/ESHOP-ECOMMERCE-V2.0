import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../redux/actions/productActions";
import useAuth from "./useAuth";

const useHandleCheck = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  // check the selected product is exist in cart or not
  const allCartProducts = useSelector(
    (state) => state.cartlistAllProducts.cartlistProducts
  );

  const handleChecker = (
    handleUpdating,
    handlePost,
    cartedProductData,
    _id
  ) => {
    const isExist = allCartProducts.find(
      (cart) => cart.cartedProduct._id === _id
    );

    if (isExist) {
      dispatch(addProductToCart(cartedProductData));
      handleUpdating(`updateCartProduct/${user?.email}/${_id}`);
    } else {
      dispatch(addProductToCart(cartedProductData));
      handlePost(cartedProductData, "addToCartList");
    }
  };
  return { handleChecker };
};

export default useHandleCheck;
