const router = require('express').Router();
const usersController = require('./../controllers/users');


router.get('', usersController.getUsers);
router.post('', usersController.createUsers);

module.exports = router;