const allProductsRoute = require('../../routes/get/allProducts');
const shopRoute = require('../../routes/get/shopProducts');
const newArrivalRoute = require('../../routes/get/newArrivalProducts');
const saleProductsRoute = require('../../routes/get/saleProducts');
const cartRoute = require('../../routes/get/cartProducts');
const wishlistRoute = require('../../routes/get/wishlistProducts');
const OrderRoute = require('../../routes/get/orderProducts');
const searchRoute = require('../../routes/get/searchProducts');
const singleProductRoute = require('../../routes/get/singleProduct');
const categoryRoute = require('../../routes/get/categoryProducts');
const sizeRoute = require('../../routes/get/sizeByProducts');
const priceRoute = require('../../routes/get/productsByPrice');

module.exports = {
	allProductsRoute,
	shopRoute,
	newArrivalRoute,
	saleProductsRoute,
	cartRoute,
	wishlistRoute,
	OrderRoute,
	searchRoute,
	singleProductRoute,
	categoryRoute,
	sizeRoute,
	priceRoute,
};
