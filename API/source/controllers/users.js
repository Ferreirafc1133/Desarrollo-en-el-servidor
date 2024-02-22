const jwt = require('jsonwebtoken');
const User = require("./../models/users");
const ResponseStatus = require("./../utils/response-status");
const hashPassword = require("./../utils/hash-password");

class UsersController{
    getUsers(req, res){
        console.log('user: ', req.user); 
        User.find().then(response => {
            res.send(response);
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send("something went wrong o sea mamo .|.");
        });
        console.log("here");
    }

    createUsers(req, res){
        res.send("Sexo ANAAAAL");
    }

    getUserId(req, res){
        const userId = req.params.id
        res.send('get userId: ' + userId);
    }

    getUserRole(req, res) {
        if (req.user) {
            res.send('Get user role: ' + req.user.role);
            console.log("Entro a user role");
        } else {
            res.status(ResponseStatus.UNATHENTICATED).send('Usuario no autenticado');
        }
    } 
    login(req, res) {
        User.findOne({
            email: req.body.email,
            password: hashPassword(req.body.password),
        }).then(response => {
            if (response){
                res.send(response);
            } else {
                res.status(ResponseStatus.UNATHENTICATED);
            }
        }).catch(e => res.status(ResponseStatus.BAD_REQUEST))
    }


}


module.exports = new UsersController();