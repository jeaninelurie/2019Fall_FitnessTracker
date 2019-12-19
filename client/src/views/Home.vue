<template>
  <div class="home">
  <div class="columns">
  <div class="column is-two-thirds">
  <ul class="panel">
    <li><p class="panel-heading">
      Available Exercises
    </p></li>
    <li><div class="search">
      <v-select label:="title" :options="srchexercises" @search="srchChanged"></v-select>
    </div></li>
    <li class="filter">
      <label> <input type="radio" v-model="selectedType" value="All"> All </label>
      <label> <input type="radio" v-model="selectedType" value="Cardio"> Cardio </label>
      <label> <input type="radio" v-model="selectedType" value="Weights"> Weights </label>
      <label> <input type="radio" v-model="selectedType" value="Muscle Training"> Muscle Training </label>
      <label> <input type="radio" v-model="selectedType" value="Balance and Flexibility"> Balance and Flexibility </label>
    </li>

    <li v-for="(e, i) in filteredExercises" :key="i" class="panel-block is-active">
      <i class ="fas fa-dumbbell" aria-hidden="true"></i>
      <div class="column">
        <div class="is-pulled-left">
          <p style="padding-left: 5px;">
            {{e.title}}
          </p>
        </div>
        <div class="is-pulled-right">
          <button class="button is-primary is-pulled-right" @click.prevent="addExercise(e)">
            <span class="icon is-small">
              <i class="fas fa-plus"></i>
            </span>
            <p style="padding-left: 5px;">
                Add Exercise
            </p>
          </button>
        </div>
      </div>
    </li>
  </ul>
  </div>
  <div class="column is-one-third">
    <ul class="panel">
      <p class="panel-heading">All Users</p>
        <li v-for="(u, i) in users.Users" :key="i" class="panel-block is-active">
            <span>
              <i class="fas fa-user"></i>
            </span>
            <div class="column">
              <div class="is-pulled-left">
                <p style="padding-left: 10px;">
                {{u.username}}
                </p>
              </div>
              <div class="is-pulled-right">
                <button class="button is-primary is-pulled-right" @click="addFriend(i)">
                  <span class="icon is-small">
                    <i class="fas fa-plus"></i>
                  </span>
                  <p style="padding-left: 1px;">
                    Add Friend
                  </p>
                </button>
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
import $router from "../router/index";
import toastr from "vanillatoasts/vanillatoasts";

export default {
  data: () => ({
    exercises: {},
    selectedType: "All",
    users: {},
    srchexercises: []
  }),
  async created(){
        setInterval( async ()=>  this.users = await User_Server.Get_Users(), 2000);
        setInterval( async ()=>  this.exercises = await Exercise_Server.Get_Exercises(), 2000);
  },
  computed: {
    filteredExercises: function() {
      var vm = this;
      var type = vm.selectedType;

      if(type === "All") {
        return vm.exercises.Exercises;
      } else{
        return vm.exercises.Exercises.filter(function(exercise) {
          return exercise.type === type;
        });
      }
    }
  },
  methods: {
    addExercise(e){
      if(User.User_Id == null){
        $router.push( { name: 'profile' } );
      }
      else{
        User_Server.Add_Exercise(User.User_Id, this.exercises.Exercises.findIndex(x => x.title == e.title)).catch(err=> toastr.create({ text: err.message, type: 'error', }));
      }
    },
    addFriend(i){
      if(User.User_Id == null){
        $router.push( { name: 'profile' } );
      }
      else{
        User_Server.Add_Friend(User.User_Id, i).catch(err=> toastr.create({ text: err.message, type: 'error', }));
      }
    },
    async srchChanged(search){
      const { fe } = await Exercise_Server.Get_Filtered_Exercises(search);
      console.log("list: " + fe);
    }
  }
};
</script>

<style>
  .filter {
    text-align: center
  }
  .search {
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .end {
    justify-content: flex-end !important;
  }
  #vanillatoasts-container{
    z-index: 100;
  }
</style>
