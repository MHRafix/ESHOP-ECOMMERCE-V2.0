const productsCollection = require('../../models/productsModel');

exports.catgorizeProducts = async (req, res, next) => {
	try {
		const { category } = req.params;
		const categoryProducts = await productsCollection.find({
			category: category,
		});
		res.status(200).json(categoryProducts);
	} catch (err) {
		next(err);
	}
};
