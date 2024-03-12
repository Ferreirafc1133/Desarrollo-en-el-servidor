const express = require('express');
const router = express.Router();
const noticiasController = require('../controllers/apiCont');

router.get('/buscar', noticiasController.buscarNoticias);

module.exports = router;
