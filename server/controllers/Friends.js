const express = require('express');
const users = require('../models/Users');

const app = express.Router();

// add friend
app.put('/:id1/:id2', (req, res) => {
    const user1 = users.find(user => user.id === parseInt(req.params.id1));
    const user2 = users.find(user => user.id === parseInt(req.params.id2));
    if(req.params.id1 === req.params.id2){
        res.status(400).json({msg: 'Cannot add yourself as a friend'});
    }else{
        if(user1 && user2){
            user1.friends.push(req.params.id2);
            res.send(users);
        }
        else if(user1){
                res.status(400).json({msg: `No user with the id of ${req.params.id2}`});
        }
        else if(user2){
            res.status(400).json({msg: `No user with the id of ${req.params.id1}`});
        }
        else{
            res.status(400).json({msg: `No user with the id of ${req.params.id1} or ${req.params.id2}`});
        }
    }
        
});

// delete friend
app.delete('/:id1/:id2', (req, res) => {
    const user1 = users.find(user => user.id === parseInt(req.params.id1));
    
    if(user1){
        const i = user.friends.indexOf(req.params.id2);
        if( i >= 0){
            user.friends.splice(i, 1);
            res.send(user);
        }else{
            res.status(400).json({msg: ` ${req.params.id2} not on friends list`})
        }
    }
    else{
        res.status(400).json({msg: `No user with the id of ${req.params.id1}`});
    }
        
});

module.exports = app;