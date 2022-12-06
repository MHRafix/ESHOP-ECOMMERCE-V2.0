const productsCollection = require('../../models/productsModel');

exports.searchResult = async (req, res, next) => {
	try {
		const all_products = await productsCollection.find();
		const search_text = req.params.productTitle;
		const searched_products = all_products.filter((products) =>
			products.productTitle.toLowerCase().includes(search_text.toLowerCase())
		);
		res.status(200).json(searched_products);
	} catch (err) {
		next(err);
	}
};
