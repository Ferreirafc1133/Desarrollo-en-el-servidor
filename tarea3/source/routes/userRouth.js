const express = require('express');
const router = express.Router();
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('./../controllers/userCont');
const { authMid, authRolMid } = require('./../middlewares/authMidlle');

const adminRole = "admin";

router.get('/users', authMid, getUsers);

router.get('/users/:id', authMid, getUserById);

router.post('/users', [authMid, authRolMid(adminRole)], createUser);

router.put('/users/:id', [authMid, authRolMid(adminRole)], updateUser);

router.delete('/users/:id', [authMid, authRolMid(adminRole)], deleteUser);

module.exports = router;
