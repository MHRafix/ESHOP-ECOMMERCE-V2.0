import { ActionTypes } from "../contants/action-types";

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

// Add product to cartlist
export const addProductToCart = (product) => {
  return { type: ActionTypes.ADD_TO_CART, payload: product };
};

// Add product to wishlist
export const addProductToWish = (product) => {
  return { type: ActionTypes.ADD_TO_WISH, payload: product };
};

// Remove product from cartlist
export const removeProduct = (id) => {
  return {
    type: ActionTypes.REMOVE_CART_PRODUCT,
    payload: id,
  };
};

// Remove product from wishlist
export const removeWishlistProduct = (id) => {
  return {
    type: ActionTypes.REMOVE_WISH_PRODUCT,
    payload: id,
  };
};
