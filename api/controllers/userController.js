const router = require('express').Router();
const userModel = require('../models/users/userModel');
const auth = require('../authentication/auth');

router.post('/register', auth.verifyToken, userModel.registerUser);
router.post('/login', auth.verifyToken, userModel.loginUser);


module.exports = router;

