const express = require('express');
const router = express.Router();

const { saleProducts } = require('../../controllers/get/saleProducts');

// products get api here
router.get('/saleProducts', saleProducts);

module.exports = router;
