const express = require('express');
const router = express.Router();

const { wishlistProducts } = require('../../controllers/get/wishlistProducts');

// products get api here
router.get('/getFromWishList/:email', wishlistProducts);

module.exports = router;
