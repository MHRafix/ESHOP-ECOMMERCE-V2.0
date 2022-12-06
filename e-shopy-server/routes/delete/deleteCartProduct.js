const express = require('express');
const router = express.Router();

const {
	deleteCartProduct,
} = require('../../controllers/delete/deleteCartProduct');

// products get api here
router.delete('/deleteCartlistProducts/:uniqueId', deleteCartProduct);

module.exports = router;
