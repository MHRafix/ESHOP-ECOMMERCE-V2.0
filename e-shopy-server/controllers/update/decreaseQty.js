const cartCollection = require('../../models/cartModel');

exports.decreaseQty = async (req, res, next) => {
	try {
		const selectedProduct = await cartCollection.findOne({
			userEmail: req.params.email,
			uniqueId: req.params.id,
		});

		selectedProduct.quantity = selectedProduct.quantity - 1;

		await selectedProduct.save();
		res.status(203).json({ success: 'Product quantity successfully updated!' });
	} catch (err) {
		next(err);
	}
};
