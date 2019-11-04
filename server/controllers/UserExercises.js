const express = require('express');
const users = require('../models/Users');
const exercises = require('../models/Exercises');

const app = express.Router();

// add an exercise to a user
app.put('/:idUser/:idExercise', (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.idUser));
    const found2 = exercises.find(exercise => exercise.id === parseInt(req.params.idExercise));

    if(user && found2){
        user.exerciseList.push(req.params.idExercise);
        res.send(users);
    }
    else if(user){
            res.status(400).json({msg: `No exercise with the id of ${req.params.idExercise}`});
    }
    else if(found2){
            res.status(400).json({msg: `No user with the id of ${req.params.idUser}`});
    }
    else{
            res.status(400).json({msg: `No user with the id of ${req.params.idUser} or exercise with id of ${req.params.idExercise}`});
    }
});

// delete an exercise from a user
app.delete('/:idUser/:idExercise', (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.idUser));

    if(user){
                const i = user.exerciseList.indexOf(req.params.idExercise);
                if( i >= 0)
                {
                    user.exerciseList.splice(i, 1);
                    res.send(user);
                }else{
                    res.status(400).json({msg: `No exercise with the id of ${req.params.idExercise}`});
                }
    }
    else{
            res.status(400).json({msg: `No user with the id of ${req.params.idUser}`});
    }
});


module.exports = app;