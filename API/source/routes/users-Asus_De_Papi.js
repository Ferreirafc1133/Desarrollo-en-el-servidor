const router = require('express').Router();
const {getUsers, createUsers, getUserId, getUserRole} = require('./../controllers/users'); 
const { authMid, authRolMid } = require('./../middlewares/index');

const rol = "admin";

router.get('', authMid, getUsers);
router.get('/role', authMid, authRolMid("admin"), getUserRole); 
router.get('/new', authMid, createUsers);
router.get('/id/:id', authMid, getUserId);


module.exports = router;
