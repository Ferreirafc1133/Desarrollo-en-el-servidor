
const User = require("./../models/users");
const ResponseStatus = require("./../utils/response-status");

class UsersController{
    getUsers(req, res){
        const user = new User();
        console.log('user: ', req.user); 
        user.find().then(response => {
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

}


module.exports = new UsersController();