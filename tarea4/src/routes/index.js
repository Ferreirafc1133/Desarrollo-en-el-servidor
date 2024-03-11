const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const { isAuthenticated } = require('../middlewares/authMidd');
express.urlencoded({ extended: true })
const apiRut = require('./apiRut');

router.use(authRoutes);

router.use('/api', apiRut);

router.get('/', isAuthenticated, (req, res) => {
    res.render('home', {
        title: 'Buscador de noticias',
        customCss: '/public/styles/home.css' 
    });
});

router.get('/register', (req, res) => {
    res.render('register', {
        title: 'Página de Registro',
    });
});

router.get('/login', (req, res) => {
    res.render('login', {
        title: 'Página de Inicio de Sesion',
    });
});


module.exports = router;
