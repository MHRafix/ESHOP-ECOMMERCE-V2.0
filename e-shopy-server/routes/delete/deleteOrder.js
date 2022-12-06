const express = require('express');
const router = express.Router();

const { deleteOrder } = require('../../controllers/delete/deleteOrder');

// products get api here
router.delete('/deleteOrders/:uniqueId', deleteOrder);

module.exports = router;
