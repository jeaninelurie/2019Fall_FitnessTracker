const express = require('express');
const users = require('../models/Users');

const app = express.Router();

var num = 3;

// get all users
app.get('/', (req, res) => res.send(users));

// get a specific user
app.get('/:id', (req, res) => {
    const found = users.find(user => user.id === parseInt(req.params.id));

    if(found) {
        res.send(found);
    } else {
        res.status(400).json({msg: `No user with the id of ${req.params.id}`});
    }
});

// add user
app.post('/', (req, res) => {

    const newUser = {
        id: num,
        name: req.query.name,
        username: req.query.username,
        password: req.query.password,
        exerciseList: [],
        friends: []
    }

    if(!newUser.name || !newUser.username || !newUser.password) {
        return res.status(400).json ({ msg: 'Please include a name, username, and password'});
    }

    num++;

    users.push(newUser);
    res.send(users[users.length-1]);
});

// edit user
app.put('/:id', (req, res) => {
    const found = users.find(user => user.id === parseInt(req.params.id));

    if(found) {
        const updUser = req.query;
        user.name = updUser.name ? updUser.name : user.name;
        user.username = updUser.username ? updUser.username : user.username;
        user.password = updUser.password ? updUser.password : user.password;
        res.send(users[req.params.id-1]);
    } else {
        res.status(400).json({msg: `No user with the id of ${req.params.id}`});
    }
});

// delete user
app.delete('/:id', (req, res) => {
    const foundId = users.some(user => user.id === parseInt(req.params.id));

    if(foundId) {
        res.send( {msg: 'User deleted', users:
        users.filter(user => user.id !== parseInt(req.params.id))});
    } else {
        res.status(400).json({msg: `No user with the id of ${req.params.id}`});
    }
});


module.exports = app;