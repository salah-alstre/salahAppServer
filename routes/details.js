// routes/details.js

const express = require('express');
const router = express.Router();
const detailsController = require('../Controller/detailsController');

// Create a new detail
router.post('/Details', detailsController.createDetail);

module.exports = router;
