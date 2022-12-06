const productsCollection = require('../../models/productsModel');

exports.updateReview = async (req, res, next) => {
	try {
		const selectedProduct = await productsCollection.findOne({
			_id: req.params.id,
		});

		// console.log(typeof req.body);
		const pevReview = selectedProduct.ratingsandreviews;
		const newReview = req.body;
		pevReview.push(newReview);

		selectedProduct.ratingsandreviews = pevReview;

		await selectedProduct.save();
		res.status(203).json({ success: 'Product review successfully updated!' });
	} catch (err) {
		next(err);
	}
};
