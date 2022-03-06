import { combineReducers } from "redux";
import {
  allProductsCategorisAndSizesReducer,
  cartlistProductReudcer,
  myOrdersReudcer,
  productReudcer,
  selectedProductReducer,
  wishlistProductReudcer,
} from "./productReducer";

const reducers = combineReducers({
  allProducts: productReudcer,
  wishlistAllProducts: wishlistProductReudcer,
  cartlistAllProducts: cartlistProductReudcer,
  myAllOrders: myOrdersReudcer,
  singleProduct: selectedProductReducer,
  allCatAndSizProducts: allProductsCategorisAndSizesReducer,
});

export default reducers;
