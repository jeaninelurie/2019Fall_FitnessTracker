<template>
  <div>
     <h1 class="is-size-1">
         {{users[currentUser].name}}
    </h1>

    <div class="columns">
        <div class="column is-one-quarter">
            <ul class="panel">
                <p class="panel-heading">
                    Friends
                </p>
                <li v-for="(f, i) in users[currentUser].friends" :key="i">
                    <span>
                        <i class="fas fa-user-friends"></i>
                    </span>
                    {{f}}
                </li>
            </ul>
        </div>
        <div class="column">
            <ul class="panel">
                <p class="panel-heading">
                    Exercises
                </p>
                <li v-for="(e, i) in users[currentUser].exercises" :key="i">
                    <span>
                        <i class ="fas fa-dumbbell" aria-hidden="true"></i>
                    </span>
                    {{e}}
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { User_Server } from "../models/Users";
import { User } from '../models/my-fetch';

export default {
    data: () => ({
        users: []
    }),
    async created(){
        setInterval( async ()=> this.users = await User_Server.Get_Users(), 2000)
    }
}
</script>
