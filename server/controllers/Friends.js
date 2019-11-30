const express = require('express');
const { Users } = require('../models/Users');

const app = express.Router();

// add friend
app.post('/add', (req, res) => {
    Users.Add_Friend(req.body.user1, req.body.user2);
    res.send({success: true});       
});

// delete friend
app.post('/delete', (req, res) => {
    Users.Delete_Friend(req.body.user1, req.body.user2);
    res.send({success: true}); 
});

module.exports = app;