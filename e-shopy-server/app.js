// external imports here
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');

// internal imports here
const {
	errorHandler,
	notFoundError,
} = require('./middleware/common/errorHandler');

// all get api request route import here
const {
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
} = require('./utils/getUrl/importUrl');

// all post api route import here
const {
	addCartRoute,
	addWishlistRoute,
	placeOrderRoute,
} = require('./utils/postUrl/importUrl');

// all update or put api here
const {
	increaseQtyRoute,
	updateReviewRoute,
	decreaseQtyRoute,
} = require('./utils/updateUrl/importUrl');

// all delete api route import here
const {
	deleteCartProductRoute,
	deleteWishlistProductRoute,
	deleteOrderRoute,
} = require('./utils/deleteUrl/importUrl');

// MidleWere and request parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection here
mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Database connection successfully!'))
	.catch((err) => console.log(err));

// application all routes here

// all get api routes here
app.use(allProductsRoute);
app.use(shopRoute);
app.use(newArrivalRoute);
app.use(saleProductsRoute);
app.use(cartRoute);
app.use(wishlistRoute);
app.use(OrderRoute);
app.use(searchRoute);
app.use(singleProductRoute);
app.use(categoryRoute);
app.use(sizeRoute);
app.use(priceRoute);

// all post api here
app.use(addCartRoute);
app.use(addWishlistRoute);
app.use(placeOrderRoute);

// all update or put api here
app.use(increaseQtyRoute);
app.use(updateReviewRoute);
app.use(decreaseQtyRoute);

// all delete api here
app.use(deleteCartProductRoute);
app.use(deleteWishlistProductRoute);
app.use(deleteOrderRoute);

// server home route
app.get('/', (req, res) => {
	res.send('RUNNIG ESHOP SERVER!');
});

// 404 not found route here
app.use(notFoundError);

// common error handler here
app.use(errorHandler);

// Listen server what we do here
app.listen(PORT, () => {
	console.log('ESHOP app is listenning.');
});
