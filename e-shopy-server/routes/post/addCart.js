const express = require('express');
const router = express.Router();

const { addCart } = require('../../controllers/post/addCart');

// products post api here
router.post('/addToCartList', addCart);

module.exports = router;
