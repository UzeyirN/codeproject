const express = require('express');
const { customer_register, customer_login, forgotPassword, getLoggedInUsers, customer_tokenRequired } = require('../controllers/customerController');

const router = express.Router();

router.post('/customerregister', customer_register);
router.post('/customerlogin', customer_login);
router.post('/customertoken', customer_tokenRequired);
router.post('/forgot-password', forgotPassword);
router.get('/logged-in-users', getLoggedInUsers);


module.exports = router;

