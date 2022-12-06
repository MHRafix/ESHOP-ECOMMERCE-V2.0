const wishlistCollection = require('../../models/wishlistModel');

exports.deleteWishlistProduct = async (req, res, next) => {
	try {
		const uniqueId = req.params.uniqueId;

		await wishlistCollection.deleteOne({
			_id: uniqueId,
		});

		res.status(200).json({ success: 'Delete wishlist product successfully!' });
	} catch (err) {
		next(err);
	}
};
