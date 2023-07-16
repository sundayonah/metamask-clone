const express = require('express');
const authController = require('./Controllers/authController');

const router = express.Router();

router.get('./allaccount', authController.allaccount);
router.get('./createaccount', authController.createaccount);

module.exports = router;