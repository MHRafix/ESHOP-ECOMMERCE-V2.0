import { ActionTypes } from "../contants/action-types";

export const addProductToCart = (qn) => {
  return { type: ActionTypes.ADD_TO_CART, payload: qn };
};

// All products action here
export const removeProduct = (id) => {
  return {
    type: ActionTypes.REMOVE_CART_PRODUCT,
    payload: id,
  };
};

// All products action here
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

//Wishlist products action here
export const setWishListProducts = (products) => {
  return {
    type: ActionTypes.SET_WISHLIST_PRODUCTS,
    payload: products,
  };
};

//Cartlist products action here
export const setCartListProducts = (products) => {
  return {
    type: ActionTypes.SET_CARTLIST_PRODUCTS,
    payload: products,
  };
};

//Myorders products action here
export const setMyOrders = (products) => {
  return {
    type: ActionTypes.SET_MYORDERS,
    payload: products,
  };
};

// Action for products categories and sizes
export const setProductsForCategoriesAndSizes = (products) => {
  return {
    type: ActionTypes.SET_CATEGORIES_AND_SIZES_PRODUCTS,
    payload: products,
  };
};

// Selected products action on single products page
export const selectedProducts = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: products,
  };
};

// Remove selected products from single product page action here
export const removeSelectedProducts = (products) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
  };
};

// increase quantity
// export const setQuantity = () => {
//   return {
//     type: ActionTypes.SET_QUANTITY,
//     payload: 1,
//   };
// };
