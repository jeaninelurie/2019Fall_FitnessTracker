const express = require('express');
const { Users } = require('../models/Users');
const { Exercises } = require('../models/Exercises');

const app = express.Router();

// add an exercise to a user
app.post('/add', (req, res) => {
   Users.Add_Exercise(req.body.user, req.body.exercise)
   res.send({success: true});     
});

// delete an exercise from a user
app.post('/delete', (req, res) => {
    Users.Delete_Exercise(req.body.user, req.body.exercise)
    res.send({success: true});  
});


module.exports = app;