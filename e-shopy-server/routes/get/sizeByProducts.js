const express = require('express');
const router = express.Router();

const { sizeFilter } = require('../../controllers/get/sizeByProducts');

// products get api here
router.get('/products/sizedProducts/:size', sizeFilter);

module.exports = router;
