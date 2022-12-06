const orderCollection = require('../../models/orderModel');

exports.placeOrder = async (req, res, next) => {
	try {
		const order__data = req.body;
		const post__order = new orderCollection(order__data);
		await post__order.save();
		res.status(201).json({ success: 'Your order successfully placed!' });
	} catch (err) {
		next(err);
	}
};
