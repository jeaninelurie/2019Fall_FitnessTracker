const express = require('express');
const path = require('path');
const userController = require('./controllers/Users');
const userDataController = require('./controllers/UserData');

const app = express();
const port = 3000;


app.use('/users', userController);

app.use('/userData', userDataController);

app.listen(port, () => console.log(`Running on http://localhost:${port}`));
