const express = require('express');
const authController = require('./Controllers/authController');

const router = express.Router();

router.get('./signup', authController.signUp);
router.get('./login', authController.login);

module.exports = router;