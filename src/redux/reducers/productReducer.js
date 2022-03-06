import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: [],
  wishlistProducts: [],
  cartlistProducts: [],
  allCategoriesAndSizesProducts: [],
  orders: [],
};

// All products reducer here
export const productReudcer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

// All products categories and sizes for products
export const allProductsCategorisAndSizesReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_CATEGORIES_AND_SIZES_PRODUCTS:
      return { ...state, allCategoriesAndSizesProducts: payload };

    default:
      return state;
  }
};

// Wishlist all products reducer here
export const wishlistProductReudcer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_WISHLIST_PRODUCTS:
      return { ...state, wishlistProducts: payload };

    default:
      return state;
  }
};

// Cartlist all products reducer here
export const cartlistProductReudcer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_CARTLIST_PRODUCTS:
      return { ...state.cartlistProducts, cartlistProducts: payload };

    case ActionTypes.ADD_TO_CART:
      // const isExist = state?.cartlistProducts.find(
      //   (product) => product.cartedProduct._id === payload.cartedProduct._id
      // );
      // if (isExist) {
      //   // increase the product Quantity
      //   return state?.cartlistProducts.map((product) =>
      //     product.cartedProduct._id === payload._id
      //       ? { ...product, quantity: product.quantity + 1 }
      //       : product
      //   );
      // } else {
      const product = payload;
      const newCart = [...state.cartlistProducts, product];
      return { ...state, cartlistProducts: newCart };
    // }

    case ActionTypes.REMOVE_CART_PRODUCT:
      const restCart = state.cartlistProducts.filter(
        (pd) => pd.cartedProduct._id !== payload
      );

      return { ...state, cartlistProducts: restCart };
    default:
      return state;
  }
};

// Myorders data reducer here
export const myOrdersReudcer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MYORDERS:
      return { ...state, orders: payload };

    default:
      return state;
  }
};

// Selected product reducer here for single product page
export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCTS:
      return {};

    default:
      return state;
  }
};

// Selected product reducer here for single product page
// export const increaseQuantityReducer = (
//   state = initialState,
//   { type, payload }
// ) => {
//   console.log(state?.cartlistProducts);
//   switch (type) {

//     default:
//       return state;
//   }
// };
