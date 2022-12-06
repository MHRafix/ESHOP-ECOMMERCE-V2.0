const express = require('express');
const router = express.Router();

const { searchResult } = require('../../controllers/get/searchProducts');

// products get api here
router.get('/products/searchedProducts/:productTitle', searchResult);

module.exports = router;
