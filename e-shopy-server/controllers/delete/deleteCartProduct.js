const cartCollection = require('../../models/cartModel');

exports.deleteCartProduct = async (req, res, next) => {
	try {
		const uniqueId = req.params.uniqueId;

		await cartCollection.deleteOne({
			_id: uniqueId,
		});

		res.status(200).json({ success: 'Delete cart product successfully!' });
	} catch (err) {
		next(err);
	}
};
