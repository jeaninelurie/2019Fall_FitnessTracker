const express = require('express');
const users = require('../models/Users');

const app = express.Router();

var num = 3;

// get all users
app.get('/', (req, res) => res.send(users));

// get a specific user
app.get('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));

    if(found) {
        res.send(users.filter(user => user.id === parseInt(req.params.id)));
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
    const found = users.some(user => user.id === parseInt(req.params.id));

    if(found) {
        const updUser = req.query;
        users.forEach(user => {
            if(user.id === parseInt(req.params.id)) {
                user.name = updUser.name ? updUser.name : user.name;

                user.username = updUser.username ? updUser.username : user.username;

                user.password = updUser.password ? updUser.password : user.password;

            }
        });
        res.send(users[req.params.id-1]);
    } else {
        res.status(400).json({msg: `No user with the id of ${req.params.id}`});
    }
});

// add friend
app.put('/:id1/:id2', (req, res) => {
    const found1 = users.some(user => user.id === parseInt(req.params.id1));
    const found2 = users.some(user => user.id === parseInt(req.params.id2));
    if(req.params.id1 === req.params.id2){
        res.status(400).json({msg: 'Cannot add yourself as a friend'});
    }

    if(found1 && found2){
        users.forEach(user => {
            if(user.id === parseInt(req.params.id1)) {
                user.friends.push(req.params.id2);
            }
        });
        users.forEach(user => {
            if(user.id === parseInt(req.params.id2)) {
                user.friends.push(req.params.id1);
            }
        });
        res.send(users);
    }
    else{
        if(found1){
            res.status(400).json({msg: `No user with the id of ${req.params.id2}`});
        }
        else if(found2){
            res.status(400).json({msg: `No user with the id of ${req.params.id1}`});
        }
        else{
            res.status(400).json({msg: `No user with the id of ${req.params.id1} or ${req.params.id2}`});
        }
        
    }
});

// delete friend
app.delete('/:id1/:id2', (req, res) => {
    const found1 = users.some(user => user.id === parseInt(req.params.id1));
    const found2 = users.some(user => user.id === parseInt(req.params.id2));
    if(req.params.id1 === req.params.id2){
        res.status(400).json({msg: 'Cannot add yourself as a friend'});
    }

    if(found1 && found2){
        users.forEach(user => {
            if(user.id === parseInt(req.params.id1)) {
                var i = user.friends.indexOf(req.params.id2);
                if( i => 0)
                {
                    user.friends.splice(i, 1);
                }
            }
            
        });
        users.forEach(user => {
            if(user.id === parseInt(req.params.id2)) {
                var i = user.friends.indexOf(req.params.id1);
                if( i => 0)
                {
                    user.friends.splice(i, 1);
                }
            }
            
        });
        res.send(users);
    }
    else{
        if(found1){
            res.status(400).json({msg: `No user with the id of ${req.params.id2}`});
        }
        else if(found2){
            res.status(400).json({msg: `No user with the id of ${req.params.id1}`});
        }
        else{
            res.status(400).json({msg: `No user with the id of ${req.params.id1} or ${req.params.id2}`});
        }
        
    }
});


// delete user
app.delete('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));

    if(found) {
        res.send( {msg: 'User deleted', users:
        users.filter(user => user.id !== parseInt(req.params.id))});
    } else {
        res.status(400).json({msg: `No user with the id of ${req.params.id}`});
    }
});


module.exports = app;