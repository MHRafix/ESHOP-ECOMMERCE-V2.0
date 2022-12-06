// external improts are here
const express = require('express');
const router = express.Router();

const { allProducts } = require('../../controllers/get/allProducts');

router.get('/products', allProducts);

module.exports = router;
