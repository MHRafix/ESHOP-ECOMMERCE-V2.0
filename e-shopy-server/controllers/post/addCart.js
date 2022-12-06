const cartCollection = require('../../models/cartModel');

exports.addCart = async (req, res, next) => {
	try {
		const product = req.body;
		const addProduct = new cartCollection(product);
		await addProduct.save();
		res.status(201).json({ success: 'Product successfully added to cart!' });
	} catch (err) {
		next(err);
	}
};
