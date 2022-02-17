import { ActionTypes } from '../contants/action-types';

const initialState = {
    products: [],
    wishlistProducts: [],
}; 

export const productReudcer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};
    
        default:
            return state;
    }
}

export const wishlistProductReudcer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_WISHLIST_PRODUCTS:
            return {...state, wishlistProducts: payload};
    
        default:
            return state;
    }
}

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