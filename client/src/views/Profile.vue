<template>
  <div>
     <h1 class="is-size-1">
         {{users.Users[me].name}}'s Profile
    </h1>
    <h4>
        Username: {{users.Users[me].username}}
    </h4>

    <div class="columns">
        <div class="column is-two-fifths">
           <ul class="panel">
                <p class="panel-heading">
                    Friends
                </p>
                <li v-for="(f, i) in users.Users[me].friends" :key="i" class="panel-block is-active">
                    <span>
                        <i class="fas fa-user-friends"></i>
                    </span>
                    <div class="column">
                        <div class="is-pulled-left">
                            <p style="padding-left: 10px;">
                                {{users.Users[f].username}}
                            </p>
                        </div>
                        <div class="is-pulled-right">
                            <button class="button is-primary is-pulled-right" @click="deleteFriend(i)">
                                <p style="padding-left: 1px;">
                                    Delete
                                </p>
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="column">
           <ul class="panel">
                <p class="panel-heading">
                    Exercises
                </p>
                <li v-for="(e, i) in users.Users[me].exerciseList" :key="i" class="panel-block is-active">
                    <span>
                        <i class ="fas fa-dumbbell" aria-hidden="true"></i>
                    </span>
                    <div class="column">
                        <div class="is-pulled-left">
                            <p style="padding-left: 10px;">
                                {{exercises.Exercises[e].title}}
                            </p>
                        </div>
                        <div class="is-pulled-right">
                            <div class="buttons">
                            <button class="button is-primary" @click="getExercise(exercises.Exercises[e].title)">
                                View
                            </button>
                            <button class="button is-primary" @click="deleteExercise(i)">
                                <p style="padding-left: 1px;">
                                    Delete
                                </p>
                            </button>
                            </div>
                        </div>
                    </div>
                    
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { Exercise_Server } from "../models/Exercises";
import { User_Server } from "../models/Users";
import { User } from '../models/my-fetch';

export default {
    data: () => ({
        exercises: {},
        users: {},
        me: 0
    }),
    async created(){
        this.exercises = await Exercise_Server.Get_Exercises();
        setInterval( async ()=>  this.users = await User_Server.Get_Users(), 2000);
        this.me = User.User_Id;
    },
    methods: {
        deleteFriend(i){
            User_Server.Delete_Friend(User.User_Id, i);
        },
        deleteExercise(e){
            User_Server.Delete_Exercise(User.User_Id, e);
        },
        getExercise(title){
            Exercise_Server.Get_One_Exercise(title);
        }
    }
}
</script>
