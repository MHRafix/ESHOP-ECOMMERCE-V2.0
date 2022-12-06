const ObjectId = require('mongodb').ObjectId;
const productsCollection = require('../../models/productsModel');

exports.singleProduct = async (req, res, next) => {
	try {
		const unique_id = req.params.productId;
		const query = { _id: ObjectId(unique_id) };
		const single_product = await productsCollection.find(query);
		let selected_product;
		for (const product of single_product) {
			selected_product = product;
		}

		if (selected_product) {
			res.status(200).json(selected_product);
		}
	} catch (err) {
		next(err);
	}
};
