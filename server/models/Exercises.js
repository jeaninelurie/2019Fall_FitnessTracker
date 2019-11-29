const { CustomError } = require('../models/CustomError');

module.exports.Exercises = {
    availableExcercises: [
        {title: "Mile Run", type: "Cardio"}, 
        {title: "Arm Workouts", type: "Weights"}, 
        {title: "Yoga Routine", type:"Balance and Flexibility"}, 
        {title: "Ab Workouts", type: "Muscle Training"}, 
        {title: "Leg Workouts", type: "Muscle Training"},
        {title: "Sprints", type: "Cardio"},
        {title: "Planks", type:"Muscle Training"},
        {title: "Long Distance Run", type: "Cardio"},
        {title: "Bench Press", type: "Weights"}
    ],
    Get_Excercises(){
        return {
            Exercises: this.availableExcercises
        };
    }
};
