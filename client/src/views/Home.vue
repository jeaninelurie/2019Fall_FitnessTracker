<template>
  <div class="home">
  <div class="column">
  <ul class="panel">
    <li><p class="panel-heading">
      Available Exercises
    </p></li>
    <li><div class="panel-block">
      <p class="control has-icons-left">
        <input class="input" type="text" placeholder="Search">
        <span class="icon is-left">
          <i class="fas fa-search" aria-hidden="true"></i>
        </span>
      </p>
    </div></li>
    <li class="filter">
      <label> <input type="radio" v-model="selectedType" value="All"> All </label>
      <label> <input type="radio" v-model="selectedType" value="Cardio"> Cardio </label>
      <label> <input type="radio" v-model="selectedType" value="Weights"> Weights </label>
      <label> <input type="radio" v-model="selectedType" value="Muscle Training"> Muscle Training </label>
      <label> <input type="radio" v-model="selectedType" value="Balance and Flexibility"> Balance and Flexibility </label>
    </li>

    <li v-for="(e, i) in filteredExercises" :key="i" class="panel-block is-active">
      <span>
        <i class ="fas fa-dumbbell" aria-hidden="true"></i>
      </span>
      {{e.title}}
    </li>
  </ul>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Data_Client } from "../models/Data";

export default {
  data: () => ({
    appData: Data_Client,
    selectedType: "All"
  }),
  computed: {
    filteredExercises: function() {
      var vm = this;
      var type = vm.selectedType;

      if(type === "All") {
        return vm.appData.exercises;
      } else{
        return vm.appData.exercises.filter(function(exercise) {
          console.log(exercise.type);
          return exercise.type === type;
        });
      }
    }
  }
};
</script>

<style>
.filter {
    text-align: center
  }
</style>
