const express = require('express');
const router = express.Router();

const { catgorizeProducts } = require('../../controllers/get/categoryProducts');

// products get api here
router.get('/products/:category', catgorizeProducts);

module.exports = router;
