// external improts are here
const express = require('express');
const router = express.Router();

// internal exports are here
const { orderedProducts } = require('../../controllers/get/orderedProducts');

// products get api here
router.get('/allOrders/myOrders/:email', orderedProducts);

module.exports = router;
