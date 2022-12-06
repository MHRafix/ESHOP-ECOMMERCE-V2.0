const productsCollection = require('../../models/productsModel');

exports.priceFilter = async (req, res, next) => {
	try {
		const allProducts = await productsCollection.find();
		const minimum__price = req.params.minPrice;
		const maximum__price = req.params.maxPrice;
		const filteredProducts = allProducts.filter(
			(product) =>
				product.regularPrice >= Number(minimum__price) &&
				product.regularPrice <= Number(maximum__price)
		);
		res.status(200).json(filteredProducts);
	} catch (err) {
		next(err);
	}
};
