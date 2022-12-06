const productCollection = require('../../models/productsModel');

exports.newArrivalProducts = async (req, res, next) => {
	try {
		const all_products = await productCollection.find();

		// new arrival products
		const new_products = all_products.slice(all_products.length - 12);

		res.status(200).json(new_products);
	} catch (err) {
		next(err);
	}
};
