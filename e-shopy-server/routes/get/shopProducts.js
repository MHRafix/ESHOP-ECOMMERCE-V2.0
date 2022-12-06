const express = require('express');
const router = express.Router();

const { shopProducts } = require('../../controllers/get/shopProducts');

// products get api here
router.get('/shopProducts', shopProducts);

module.exports = router;
