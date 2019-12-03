const { CustomError } = require('../models/CustomError');

module.exports.Exercises = {
    availableExcercises: [
        {title: "Mile Run", type: "Cardio", time:"5-15 Minutes", link:"https://www.youtube.com/watch?v=IR8_jytt8gQ"}, 
        {title: "Arm Workouts", type: "Weights", time:"20 Minutes", link:"https://www.youtube.com/watch?v=skde8_aWbFo"}, 
        {title: "Yoga Routine", type:"Balance and Flexibility", time:"20 Minutes", link:"https://www.youtube.com/watch?v=W5dkeP3GxtU"}, 
        {title: "Ab Workouts", type: "Muscle Training", time:"10 Minutes", link:"https://www.youtube.com/watch?v=1919eTCoESo"}, 
        {title: "Lower Body Workouts", type: "Muscle Training", time:"10 Minutes", link:"https://www.youtube.com/watch?v=erKJOb51bCI"},
        {title: "Sprints", type: "Cardio", time:"10 Minutes", link:"https://www.youtube.com/watch?v=bSfy6jcgpWY"},
        {title: "Planks", type:"Muscle Training", time:"8 Minutes", link:"https://www.youtube.com/watch?v=_lfR4sl0ZCE"},
        {title: "Long Distance Run", type: "Cardio", time:"30-60 Minutes", link:"https://www.youtube.com/watch?v=jmyLSQ0REmo"},
        {title: "Bench Press", type: "Weights", time:"5-10 Minutes", link:"https://www.youtube.com/watch?v=Xyma7Bkvds0"}
    ],
    Get_Excercises(){
        return {
            Exercises: this.availableExcercises
        };
    },
    Get_One_Exercise(title){
        e = this.availableExcercises.find(x => x.title == title);
        if(e){
            return e;
        }
        throw new CustomError(404, "Exercise not found.");
    }
};
