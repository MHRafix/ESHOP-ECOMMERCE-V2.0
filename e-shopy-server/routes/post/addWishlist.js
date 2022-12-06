const express = require('express');
const router = express.Router();

const { addWishlist } = require('../../controllers/post/addWishlist');

// products post api here
router.post('/addToWishList', addWishlist);

module.exports = router;
