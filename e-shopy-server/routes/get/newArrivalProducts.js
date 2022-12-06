const express = require('express');
const router = express.Router();

const {
	newArrivalProducts,
} = require('../../controllers/get/newArrivalProducts');

// products get api here
router.get('/newArrivalProducts', newArrivalProducts);

module.exports = router;
