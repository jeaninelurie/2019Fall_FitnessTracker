<template>
  <div>
  <h1 class="is-size-1">
    Login
  </h1>

  <div class="columns">
    <div class="column is-one-third is-offset-one-third">
      
      <ul class="panel">
        <p class="panel-heading">
          Login
        </p>
        <div class="panel-block">

          <div class="field" :class="{ 'is-danger': error }">
            <div class="field has-addons">
              <div class="control has-icons-left has-icons-right">
                <input v-model="name" class="input" type="text" placeholder="Your Name">
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                  </span>
                  </div>
                  <div class="control">
                    <a class="button is-info" >
                        Login
                    </a>
                </div>
              </div>
              <p class="help is-danger"></p>
          </div>
        </div>
      </ul>
    </div>
  </div>
</div>
</template>

<script>

</script>

<style  lang="scss">
</style>