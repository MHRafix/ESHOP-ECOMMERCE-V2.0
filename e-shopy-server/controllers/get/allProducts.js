const createError = require('http-errors');
const productsCollection = require('../../models/productsModel');

exports.allProducts = async (req, res, next) => {
	try {
		const products = await productsCollection.find().limit(12);
		res.status(200).json(products);
	} catch (err) {
		next(err);
	}
};
