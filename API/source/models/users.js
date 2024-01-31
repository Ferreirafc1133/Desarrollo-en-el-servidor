const mockUsers = [
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