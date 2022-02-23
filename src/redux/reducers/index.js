import { combineReducers } from 'redux';
import { allProductsCategorisAndSizesReducer, cartlistProductReudcer, productReudcer, selectedProductReducer, wishlistProductReudcer, myOrdersReudcer } from './productReducer';

const reducers = combineReducers({
    allProducts: productReudcer,
    wishlistAllProducts: wishlistProductReudcer,
    cartlistAllProducts: cartlistProductReudcer,
    myAllOrders: myOrdersReudcer,
    singleProduct: selectedProductReducer,
    allCatAndSizProducts: allProductsCategorisAndSizesReducer,
});
 
export default reducers;