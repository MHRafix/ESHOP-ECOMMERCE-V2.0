import { combineReducers } from 'redux';
import { productReudcer, selectedProductReducer, wishlistProductReudcer } from './productReducer';

const reducers = combineReducers({
    allProducts: productReudcer,
    wishlistAllProducts: wishlistProductReudcer,
    singleProduct: selectedProductReducer,
});
 
export default reducers; 