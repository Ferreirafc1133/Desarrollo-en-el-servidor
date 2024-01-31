
const User = require("./../models/users");
const ResponseStatus = require("./../utils/response-status");

class UsersController{
    getUsers(req, res){
        const user = new User();
        user.find().then(response => {
            res.send(response);
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send("something went wrong o sea mamo .|.");
        });
        console.log("here");
    }
    createUsers(){}
}


module.exports = new UsersController();