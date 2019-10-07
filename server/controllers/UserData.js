const express = require('express');
const userData = require('../models/UserData');

const app = express.Router();

app.get('/', (req, res) => res.send(userData));

app.post('/', (req, res) => {
    userData.push(req.query);
    res.send(userData[userData.length-1]);
});


module.exports = app;