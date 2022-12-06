const wishlistCollection = require('../../models/wishlistModel');

exports.wishlistProducts = async (req, res, next) => {
	try {
		const query = { userEmail: req.params.email };
		const wishlist_products = await wishlistCollection.find(query);
		res.status(200).json(wishlist_products);
	} catch (err) {
		next(err);
	}
};
