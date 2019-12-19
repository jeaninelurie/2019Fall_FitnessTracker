import { api, User } from "./my-fetch-exercises";
import { Exercise } from "./my-fetch-exercises";
import $router from "../router/index";

export const Exercise_Server = {
    Get_Exercises(){
        return api('');
    },
    async Get_One_Exercise(title){
        const { e } = await api(title);    
        Exercise.Exercise = e;
        $router.push( { name: 'exercise' } );
    },
    async Get_Filtered_Exercises(filter){
        const { fe } = await api('filterExercises/' + filter);
        console.log(fe);
        return fe;
        
    }
}
