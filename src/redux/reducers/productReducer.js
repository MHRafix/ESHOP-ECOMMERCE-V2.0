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

// Cartlist all products reducer here
export const cartlistProductReudcer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_CARTLIST_PRODUCTS:
      return { ...state.cartlistProducts, cartlistProducts: payload };

    // add cartlist product here
    case ActionTypes.ADD_TO_CART:
      const isExist = state?.cartlistProducts.find(
        (product) => product.cartedProduct._id === payload.cartedProduct._id
      );

      if (isExist) {
        // update seleceted product quantity here
        const restProducts = state.cartlistProducts.filter(
          (product) => product.cartedProduct._id !== payload.cartedProduct._id
        );

        // define seleceted product here
        let selectedProduct = state.cartlistProducts.find(
          (product) => product.cartedProduct._id === payload.cartedProduct._id
        );

        selectedProduct.quantity = selectedProduct.quantity + 1;
        const updatedCart = [...restProducts, selectedProduct];
        return { ...state.cartlistProducts, cartlistProducts: updatedCart };
      } else {
        const product = payload;
        const newCart = [...state.cartlistProducts, product];
        return { ...state.cartlistProducts, cartlistProducts: newCart };
      }

    // increase cart product quantity here
    case ActionTypes.INCREASE_QUANTITY:
      // update seleceted product quantity here
      const restProducts = state.cartlistProducts.filter(
        (product) => product.uniqueId !== payload.cartedProduct._id
      );

      // define seleceted product here
      let selectedProduct = state.cartlistProducts.find(
        (product) => product.uniqueId === payload.cartedProduct._id
      );
      selectedProduct.quantity = selectedProduct.quantity + 1;
      const updatedCart = [...restProducts, selectedProduct];
      return { ...state.cartlistProducts, cartlistProducts: updatedCart };

    // remove cartlist product here
    case ActionTypes.REMOVE_CART_PRODUCT:
      const restCart = state.cartlistProducts.filter(
        (pd) => pd.cartedProduct._id !== payload
      );

      return { ...state, cartlistProducts: restCart };
    default:
      return state;
  }
};

// Wishlist products reducer here
export const wishlistProductReudcer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_WISHLIST_PRODUCTS:
      return { ...state, wishlistProducts: payload };

    // add wishlist product here
    case ActionTypes.ADD_TO_WISH:
      const isExist = state?.wishlistProducts?.find(
        (product) => product.cartedProduct._id === payload.cartedProduct._id
      );
      if (isExist) {
        return state;
      } else {
        const product = payload;
        const newWish = [...state.wishlistProducts, product];
        return { ...state, wishlistProducts: newWish };
      }

    // remove wishlist product here
    case ActionTypes.REMOVE_WISH_PRODUCT:
      const restWish = state.wishlistProducts.filter(
        (pd) => pd._id !== payload
      );
      return { ...state, wishlistProducts: restWish };

    default:
      return state;
  }
};
