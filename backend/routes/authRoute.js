const express = require('express');
const { register, login, forgotPassword, getLoggedInUsers } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.get('/logged-in-users', getLoggedInUsers);

module.exports = router;
