const express = require('express');
const router = express.Router();

const { priceFilter } = require('../../controllers/get/productsByPrice');

router.get('/products/filteredProducts/:minPrice/:maxPrice', priceFilter);

module.exports = router;
