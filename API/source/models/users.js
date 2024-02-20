/*const mockUsers = [
    {
        id: 1,
        name: 'Habib Smith',
        email: 'john@example.com'
    }
]
class User {
    find(){
        return new Promise((resolve, reject) =>{
            setTimeout(() =>{
                resolve([...mockUsers]);
            }, 1000);
        }); 
    }
    insert(newUser){
        mockUsers.push(newUser);
    }
}

module.exports = User;
*/

const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    status: {type: String, default: 'new'},
    role: {type: String, default: 'perrada'}

})

module.exports = model('User', userSchema);