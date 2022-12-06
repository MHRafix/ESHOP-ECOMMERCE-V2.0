const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
	productTitle: {
		type: String,
		trim: true,
		require: true,
	},

	category: {
		type: String,
		default: 'Uncategorize',
	},

	sizes: {
		type: Array,
		default: 'Free Size',
	},

	regularPrice: {
		type: String,
		trim: true,
		require: true,
	},

	salePrice: {
		type: String,
		trim: true,
	},

	thumbnail: {
		type: String,
		require: true,
	},

	thumbnails: {
		type: Array,
	},

	ratingsandreviews: {
		type: Array,
	},
});

// make this schema a data model
const Products = mongoose.model('product', productsSchema);

module.exports = Products;
