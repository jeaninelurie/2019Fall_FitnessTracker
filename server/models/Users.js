const { CustomError } = require('../models/CustomError');

module.exports.Users = {
    registeredUsers: [
        {name: "Jeanine", username: "username1", exerciseList: ["exercise1"], friends: [1]},
        {name: "user2", username: "username2", exerciseList: ["exercise2"], friends: [0]}
    ],
    signup(name, username){
        if(name == '' || username == ''){
            throw new CustomError(403, 'Please enter both fields.')
        }
        if(this.registeredUsers.find(x => x.username == username))
        {
            throw new CustomError(409, 'Another user already has that username.')
        }
        this.registeredUsers.push({name, username, exerciseList: [], friends: []});
        return this.registeredUsers.length - 1;
    },
    login(username){
        if(this.registeredUsers.find(x => x.username == username)){
            return this.registeredUsers.findIndex(x => x.username == username);
        }
        else{
            throw new CustomError(404, "Username not found.");
        }
    },
    Get_Users(){
        return { 
            Users: this.registeredUsers
        };
    }
}