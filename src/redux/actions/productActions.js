import { ActionTypes } from '../contants/action-types';

export const setProducts = (products) => {
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const setWishListProducts = (products) => {
    return{
        type: ActionTypes.SET_WISHLIST_PRODUCTS,
        payload: products
    }
}

// export const addToWishListProducts = (products) => {
//     return{
//         type: ActionTypes.ADD_WISHLIST_PRODUCTS,
//         payload: products
//     }
// }


export  const selectedProducts = (products) => {
    return{
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: products
    }
} 

export  const removeSelectedProducts = (products) => {
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    }
}