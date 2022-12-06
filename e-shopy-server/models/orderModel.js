const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
	orderedProducts: {
		type: Object,
		require: true,
	},

	customerInfo: {
		type: Object,
		require: true,
	},

	userEmail: {
		type: String,
		require: true,
		trim: true,
		lowercase: true,
	},

	grandTotalPrice: {
		type: String,
		trim: true,
		require: true,
	},

	status: {
		type: String,
		enum: ['pendding', 'completed', 'paid'],
		require: true,
	},
});

// make this schema a data model
const Order = mongoose.model('order', orderSchema);

module.exports = Order;
