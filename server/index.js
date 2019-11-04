const express = require('express');
const path = require('path');
const userController = require('./controllers/Users');
const exerciseController = require('./controllers/Exercises');
const friendController = require('./controllers/Friends');
const userExerciseController = require('./controllers/UserExercises');


const app = express();
const port = 5000;


app.use('/users', userController);
app.use('/exercises', exerciseController);
app.use('/friend', friendController);
app.use('/userexercises', userExerciseController);

app.listen(port, () => console.log(`Running on http://localhost:${port}`));
