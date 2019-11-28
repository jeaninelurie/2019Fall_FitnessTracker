<template>
  <div>
  <h1 class="is-size-1">
    Sign Up
  </h1>

  <div class="columns">
    <div class="column is-three-fifths is-offset-one-fifth">
      
      <ul class="panel">
        <p class="panel-heading">
          Sign Up
        </p>
        <div class="panel-block">

          <div class="field" :class="{ 'is-danger': error }">
            <div class="field has-addons">
              <div class="control has-icons-left has-icons-right">
                <input v-model="name" class="input" type="text" placeholder="Name">
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                  </div>
                  <div class="control has-icons-left has-icons-right">
                <input v-model="username" class="input" type="text" placeholder="Username">
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                  </span>
                  </div>
                  <div class="control">
                    <a class="button is-info" @click.prevent="signup">
                        Sign Up
                    </a>
                </div>
              </div>
              <p class="help is-danger">{{error}}</p>
          </div>
        </div>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import { User_Server } from "../models/Users";
export default {
  data: ()=>({
    name: "",
    username: "",
    error: ""
  }),
  methods: {
    signup(){
      User_Server.signup(this.name, this.username)
          .catch(err => {
            console.error(err)
            this.error = err.message;
          });
    }
  }
}

</script>

<style  lang="scss">
.fas.fa-exclamation-triangle {
    display: none;
  }
  .is-danger {
    .fa-exclamation-triangle {
      display: inline;
      color: red;
    }
    .input {
      border-color: red;
    }
  }
</style>