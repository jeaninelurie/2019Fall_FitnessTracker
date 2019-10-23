const express = require('express');
const exercises = require('../models/Exercises');
const users = require('../models/Users');

const app = express.Router();

var num = 3;

// get all exercises
app.get('/', (req, res) => res.send(exercises));

// get a specific exercise
app.get('/:id', (req, res) => {
    const found = exercises.some(exercise => exercise.id === parseInt(req.params.id));

    if(found) {
        res.send(exercises.filter(exercise => exercise.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `No exercise with the id of ${req.params.id}`});
    }
});

// add a exercise
app.post('/', (req, res) => {
    const newExercise = {
        id: num,
        title: req.query.title,
        time: req.query.time,
        type: req.query.type
    }

    if(!newExercise.title || !newExercise.time || !newExercise.type) {
        return res.status(400).json ({ msg: 'Please include a title, time, and type'});
    }

    num++;

    exercises.push(newExercise);
    res.send(exercises[exercises.length-1]);
});

// edit exercise
app.put('/:id', (req, res) => {
    const found = exercises.some(exercise => exercise.id === parseInt(req.params.id));

    if(found) {
        const updExercise = req.query;
        exercises.forEach(exercise => {
            if(exercise.id === parseInt(req.params.id)) {
                exercise.title = updExercise.title ? updExercise.title : exercise.title;

                exercise.time = updExercise.time ? updExercise.time : exercise.time;
                exercise.type = updExercise.type ? updExercise.type: exercise.type;

            }
        });
        res.send(exercises[req.params.id-1]);
    } else {
        res.status(400).json({msg: `No exercise with the id of ${req.params.id}`});
    }
})


// delete a exercise
app.delete('/:id', (req, res) => {
    const found = exercises.some(exercise => exercise.id === parseInt(req.params.id));

    if(found) {
        res.send( {msg: 'Exercise deleted', exercises:
        exercises.filter(exercise => exercise.id !== parseInt(req.params.id))});
    } else {
        res.status(400).json({msg: `No exercise with the id of ${req.params.id}`});
    }
});

// add exercise to a user
app.put('/:idUser/:idExercise', (req, res) => {
    const found1 = users.some(user => user.id === parseInt(req.params.idUser));
    const found2 = exercises.some(exercise => exercise.id === parseInt(req.params.idExercise));

    if(found1 && found2){
        users.forEach(user => {
            if(user.id === parseInt(req.params.idUser)) {
                user.exerciseList.push(req.params.idExercise);
            }
        });
        res.send(users);
    }
    else{
        if(found1){
            res.status(400).json({msg: `No exercise with the id of ${req.params.idExercise}`});
        }
        else if(found2){
            res.status(400).json({msg: `No user with the id of ${req.params.idUser}`});
        }
        else{
            res.status(400).json({msg: `No user with the id of ${req.params.idUser} or exercise with id of ${req.params.idExercise}`});
        }
    }
});

// delete exercise
app.delete('/:idUser/:idExercise', (req, res) => {
    const found1 = users.some(user => user.id === parseInt(req.params.idUser));
    const found2 = exercises.some(exercise => exercise.id === parseInt(req.params.idExercise));

    if(found1 && found2){
        users.forEach(user => {
            if(user.id === parseInt(req.params.idUser)) {
                var i = user.exerciseList.indexOf(req.params.idExercise);
                if( i => 0)
                {
                    user.exerciseList.splice(i, 1);
                }
            }
        });
        res.send(users);
    }
    else{
        if(found1){
            res.status(400).json({msg: `No exercise with the id of ${req.params.idExercise}`});
        }
        else if(found2){
            res.status(400).json({msg: `No user with the id of ${req.params.idUser}`});
        }
        else{
            res.status(400).json({msg: `No user with the id of ${req.params.idUser} or exercise with id of ${req.params.idExercise}`});
        }
    }
});

module.exports = app;