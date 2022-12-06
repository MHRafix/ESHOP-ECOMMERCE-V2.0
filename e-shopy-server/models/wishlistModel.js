const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
	cartedProduct: {
		type: Object,
		require: true,
	},

	size: {
		type: String,
		enum: ['S', 'M', 'L', 'XL', 'XXL'],
		default: 'M',
		require: true,
	},

	quantity: {
		type: Number,
		default: 1,
		require: true,
	},

	userEmail: {
		type: String,
		trim: true,
		require: true,
		lowercase: true,
	},
});

// make this schema a data model
const WishlistProducts = mongoose.model('wishlist', wishlistSchema);

module.exports = WishlistProducts;
