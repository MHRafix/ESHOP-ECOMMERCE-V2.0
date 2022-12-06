const cartCollection = require('../../models/cartModel');

exports.cartProducts = async (req, res, next) => {
	try {
		const query = { userEmail: req.params.email };
		const cart_products = await cartCollection.find(query);
		res.status(200).json(cart_products);
	} catch (err) {
		next(err);
	}
};
