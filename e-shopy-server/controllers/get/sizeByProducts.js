const productsCollection = require('../../models/productsModel');

exports.sizeFilter = async (req, res, next) => {
	try {
		const products = await productsCollection.find();
		const req_size = req.params.size;
		let sizes_arr;
		let matched_products = [];
		for (const product of products) {
			sizes_arr = product.sizes;
			if (sizes_arr.includes(req_size) === true) {
				matched_products.push(product);
			} else {
				//Nothing here
			}
		}
		if (matched_products) {
			res.status(200).json(matched_products);
		}
	} catch (err) {
		next(err);
	}
};
