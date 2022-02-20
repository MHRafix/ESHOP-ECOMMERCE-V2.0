import { ActionTypes } from '../contants/action-types';

// All products action here
export const setProducts = (products) => {
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

//Wishlist products action here
export const setWishListProducts = (products) => {
    return{
        type: ActionTypes.SET_WISHLIST_PRODUCTS,
        payload: products
    }
}

// Action for products categories and sizes
export const setProductsForCategoriesAndSizes = (products) => {
    return{
        type: ActionTypes.SET_CATEGORIES_AND_SIZES_PRODUCTS,
        payload: products
    }
}

// Selected products action on single products page
export  const selectedProducts = (products) => {
    return{
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: products
    }
} 

// Remove selected products from single product page action here
export  const removeSelectedProducts = (products) => {
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    }
}