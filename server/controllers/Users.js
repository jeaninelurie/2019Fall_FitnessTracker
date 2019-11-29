const express = require('express');
const { Users } = require('../models/Users');
const { CustomError } = require('../models/CustomError');

const app = express.Router();

// get all users
app.get('/', (req, res) => {
    res.send({...Users.Get_Users()});
});

// get a specific user
app.get('/:username', (req, res) => {
    const found = Users.registeredUsers.find(user => user.username === req.params.username);

    if(found) {
        res.send(found);
    } else {
        res.status(400).json({msg: `No user with the username of ${req.params.username}`});
    }
});

// login user
app.post('/loginUser', (req, res) => {
    const user_id = Users.login(req.body.username);
    res.send({success: true, user_id});
});

// signup new user
app.post('/signupUser', (req, res) => {
    const user_id = Users.signup(req.body.name, req.body.username);
    res.send({success: true, user_id})
});

// edit user
app.put('/:username', (req, res) => {
    const found = users.find(user => user.username === parseInt(req.params.username));

    if(found) {
        const updUser = req.query;
        user.name = updUser.name ? updUser.name : user.name;
        user.username = updUser.username ? updUser.username : user.username;
        res.send(users[req.params.username-1]);
    } else {
        res.status(400).json({msg: `No user with the username of ${req.params.username}`});
    }
});

// delete user
app.delete('/:username', (req, res) => {
    const foundId = users.some(user => user.username === parseInt(req.params.username));

    if(foundId) {
        res.send( {msg: 'User deleted', users:
        users.filter(user => user.username !== parseInt(req.params.username))});
    } else {
        res.status(400).json({msg: `No user with the username of ${req.params.username}`});
    }
});


module.exports = app;