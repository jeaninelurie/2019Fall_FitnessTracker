const express = require('express');
const exercises = require('../models/Exercises');
const app = express.Router();

var num = 3;

// get all exercises
app.get('/', (req, res) => res.send(exercises));

// get a specific exercise
app.get('/:id', (req, res) => {
    const found = exercises.find(exercise => exercise.id === parseInt(req.params.id));

    if(found) {
        res.send(found);
    } else {
        res.status(400).json({msg: `No exercise with the id of ${req.params.id}`});
    }
});

// add an exercise
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

// edit an exercise
app.put('/:id', (req, res) => {
    const found = exercises.find(exercise => exercise.id === parseInt(req.params.id));

    if(found) {
        const updExercise = req.query;
        found.title = updExercise.title ? updExercise.title : found.title;
        found.time = updExercise.time ? updExercise.time : found.time;
        found.type = updExercise.type ? updExercise.type: found.type;
        res.send(exercises[req.params.id-1]);
    } else {
        res.status(400).json({msg: `No exercise with the id of ${req.params.id}`});
    }
})


// delete an exercise
app.delete('/:id', (req, res) => {
    const found = exercises.some(exercise => exercise.id === parseInt(req.params.id));

    if(found) {
        res.send( {msg: 'Exercise deleted', users:
        exercises.filter(exercise => exercise.id !== parseInt(req.params.id))});
    } else {
        res.status(400).json({msg: `No exercise with the id of ${req.params.id}`});
    }
});

module.exports = app;