const express = require('express');
const { Exercises } = require('../models/Exercises');
const app = express.Router();

var num = 3;

// get all exercises
app.get('/', (req, res) => {
    res.send({...Exercises.Get_Excercises()});
});

app.get('/filterExercises/:filter', (req, res) => {
    fe = Exercises.Get_Filtered_Exercises(req.params.filter);
    res.send({success: true, fe});
});

// get a specific exercise
app.get('/:title', (req, res) => {
   e = Exercises.Get_One_Exercise(req.params.title);
   console.log(e);
   res.send({success: true, e});
});



// add an exercise
app.post('/', (req, res) => {
    const newExercise = {
        title: req.query.title,
        type: req.query.type
    }

    if(!newExercise.title || !newExercise.type) {
        return res.status(400).json ({ msg: 'Please include a title, and type'});
    }

    num++;

    exercises.push(newExercise);
    res.send(exercises[exercises.length-1]);
});

// edit an exercise
app.put('/:title', (req, res) => {
    const found = exercises.find(exercise => exercise.title === parseInt(req.params.title));

    if(found) {
        const updExercise = req.query;
        found.title = updExercise.title ? updExercise.title : found.title;
        found.type = updExercise.type ? updExercise.type: found.type;
        res.send(exercises[req.params.id-1]);
    } else {
        res.status(400).json({msg: `No exercise with the title of ${req.params.title}`});
    }
})


// delete an exercise
app.delete('/:title', (req, res) => {
    const found = exercises.some(exercise => exercise.title === parseInt(req.params.title));

    if(found) {
        res.send( {msg: 'Exercise deleted', users:
        exercises.filter(exercise => exercise.title !== parseInt(req.params.title))});
    } else {
        res.status(400).json({msg: `No exercise with the title of ${req.params.title}`});
    }
});

module.exports = app;