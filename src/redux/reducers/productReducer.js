import { ActionTypes } from '../contants/action-types';

const initialState = {
    products: [],
    wishlistProducts: [],
    allCategoriesAndSizesProducts: [],
}; 

// All products reducer here
export const productReudcer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};
    
        default:
            return state;
    }
}

// All products categories and sizes for products 
export const allProductsCategorisAndSizesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_CATEGORIES_AND_SIZES_PRODUCTS:
            return {...state, allCategoriesAndSizesProducts: payload};
    
        default:
            return state;
    }
}

// Wishlist all products reducer here
export const wishlistProductReudcer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_WISHLIST_PRODUCTS:
            return {...state, wishlistProducts: payload};
    
        default:
            return state;
    }
}

// Selected product reducer here for single product page
export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return {};

        default:
            return state;
    }
}