import { combineReducers } from 'redux';
import { allProductsCategorisAndSizesReducer, productReudcer, selectedProductReducer, wishlistProductReudcer } from './productReducer';

const reducers = combineReducers({
    allProducts: productReudcer,
    wishlistAllProducts: wishlistProductReudcer,
    singleProduct: selectedProductReducer,
    allCatAndSizProducts: allProductsCategorisAndSizesReducer,
});
 
export default reducers;