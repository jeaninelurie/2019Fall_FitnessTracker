const { CustomError } = require('../models/CustomError');

module.exports.Users = {
    registeredUsers: [
        {name: "Jeanine", username: "username1", exerciseList: [], friends: [1]},
        {name: "user2", username: "username2", exerciseList: [], friends: [0]}
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
    },
    Add_Friend(user1, user2){
        if(user1 > this.registeredUsers.length-1 || user2 > this.registeredUsers.length-1){
            throw new CustomError(404, "Users do not exist.");
        }
        if(user1 === user2){
            throw new CustomError(409, "Cannot add yourself as a friend");
        }
        if(this.registeredUsers[user1].friends.indexOf(user2) >= 0){
            throw new CustomError(409, "Already have that user as a friend");
        }
        this.registeredUsers[user1].friends.push(user2)
    },
    Delete_Friend(user1, user2){
        if(user1 > this.registeredUsers.length-1 || user2 > this.registeredUsers.length-1){
            throw new CustomError(404, "Users do not exist.");
        }
        this.registeredUsers[user1].friends.splice(user2, 1);
    },
    Add_Exercise(user, exercise){
        if(this.registeredUsers[user].exerciseList.indexOf(exercise) >= 0){
            throw new CustomError(409, "Already have exercise");
        }
        this.registeredUsers[user].exerciseList.push(exercise);
    },
    Delete_Exercise(user, exercise){
        this.registeredUsers[user].exerciseList.splice(exercise, 1);
    }
}