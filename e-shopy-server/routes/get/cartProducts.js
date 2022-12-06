const express = require('express');
const router = express.Router();

const { cartProducts } = require('../../controllers/get/cartProducts');

router.get('/getFromCartList/:email', cartProducts);

module.exports = router;
