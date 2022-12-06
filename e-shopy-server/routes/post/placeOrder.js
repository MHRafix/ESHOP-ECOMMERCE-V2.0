const express = require('express');
const router = express.Router();

const { placeOrder } = require('../../controllers/post/placeOrder');

// products post api here
router.post('/allCustomersOrders', placeOrder);

module.exports = router;
