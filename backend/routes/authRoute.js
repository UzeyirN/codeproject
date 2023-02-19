const router = require('express').Router()
const authController = require("../controllers/authController")


router.get('/login', authController.login_get)
router.post('/login', (req, res) => { })

router.get('/signup', (req, res) => { })
router.post('/signup', (req, res) => { })

router.get('/logout', (req, res) => { })


module.exports = router
