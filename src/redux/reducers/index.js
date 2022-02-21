import { combineReducers } from 'redux';
import { allProductsCategorisAndSizesReducer, cartlistProductReudcer, productReudcer, selectedProductReducer, wishlistProductReudcer } from './productReducer';

const reducers = combineReducers({
    allProducts: productReudcer,
    wishlistAllProducts: wishlistProductReudcer,
    cartlistAllProducts: cartlistProductReudcer,
    singleProduct: selectedProductReducer,
    allCatAndSizProducts: allProductsCategorisAndSizesReducer,
});
 
export default reducers;