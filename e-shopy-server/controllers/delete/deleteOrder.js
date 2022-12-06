const orderCollection = require('../../models/orderModel');

exports.deleteOrder = async (req, res, next) => {
	try {
		const uniqueId = req.params.uniqueId;

		await orderCollection.deleteOne({
			_id: uniqueId,
		});

		res.status(200).json({ success: 'Delete order successfully!' });
	} catch (err) {
		next(err);
	}
};
