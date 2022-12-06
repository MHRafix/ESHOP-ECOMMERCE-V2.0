const orderCollection = require('../../models/orderModel');

exports.orderedProducts = async (req, res, next) => {
	try {
		const query = { userEmail: req.params.email };
		const ordered_products = await orderCollection.find(query);
		res.status(200).json(ordered_products);
	} catch (err) {
		next(err);
	}
};
