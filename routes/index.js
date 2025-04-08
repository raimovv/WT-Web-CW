const express = require('express');
const router = express.Router();

// Home route controller
const homeController = require('../controllers/index');

router.get('/', homeController.home);

module.exports = router;
