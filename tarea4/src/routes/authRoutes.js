const express = require('express');
const router = express.Router();
const { loginUser, registerUser, logoutUser } = require('../controllers/authCont');

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/logout', logoutUser);


module.exports = router;
