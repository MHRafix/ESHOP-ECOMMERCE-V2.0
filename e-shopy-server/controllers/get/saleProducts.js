const productsCollection = require('../../models/productsModel');

exports.saleProducts = async (req, res, next) => {
	try {
		const all_products = await productsCollection.find();
		const sale_products = all_products.filter(
			(product) => product.salePrice !== '0'
		);
		res.status(200).json(sale_products);
	} catch (err) {
		next(err);
	}
};
