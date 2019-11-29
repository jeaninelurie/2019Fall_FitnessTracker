<template>
  <div>
     <h1 class="is-size-1">
         {{users.Users[me].name}}'s Profile
    </h1>
    <h4>
        Username: {{users.Users[me].username}}
    </h4>

    <div class="columns">
        <div class="column is-one-quarter">
           <ul class="panel">
                <p class="panel-heading">
                    Friends
                </p>
                <li v-for="(f, i) in users.Users[me].friends" :key="i" class="panel-block is-active">
                    <span>
                        <i class="fas fa-user-friends"></i>
                    </span>
                    <p style="padding-left: 10px;">
                    {{users.Users[f].username}}
                    </p>
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
                    <p style="padding-left: 10px;">
                    {{e}}
                    </p>
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
        users: {},
        me: 0
    }),
    async created(){
        setInterval( async ()=>  this.users = await User_Server.Get_Users(), 2000)
        this.me = User.User_Id;
    }
}
</script>
