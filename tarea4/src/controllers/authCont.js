const bcrypt = require('bcryptjs');
const User = require('../models/userModels'); 
const ResponseStatus = require('./../utils/response-status');

const registerUser = async (req, res) => {
    try {
        const { fullname, username, email, password } = req.body;

        let user = await User.findOne({ email });
        if (user) {
            // Usando la constante para BAD_REQUEST
            return res.status(ResponseStatus.BAD_REQUEST).json({ msg: 'El usuario ya existe' });
        }

        user = new User({
            fullname, 
            username, 
            email,
            password
        });

        await user.save();
        console.log("Usuario creado exitosamente: ", user.fullname, user.username, user.email);
        res.redirect('/login');
    } catch (err) {
        console.error(err);
        res.status(ResponseStatus.INTERNAL_SERVER_ERROR).send('Error del servidor');
    }
};

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        let user = await User.findOne({ username });
        if (!user) {
            return res.status(400).render('login', { message: 'El usuario no existe' });
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).render('login', { message: 'Contraseña incorrecta' });
            console.log('Contraseña incorrecta');
        }

        req.session.userId = user._id;  
        console.log("Usuario autenticado: ", user);

        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error del servidor');
    }
};

const logoutUser = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error('Error al cerrar la sesión:', err);
            res.status(ResponseStatus.INTERNAL_SERVER_ERROR).send('Error al cerrar la sesión');
        } else {
            console.log('Sesión cerrada exitosamente');
            res.redirect('/login'); 
        }
    });
};

module.exports = {
    loginUser,
    registerUser,
    logoutUser  
};
