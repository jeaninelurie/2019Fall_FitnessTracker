<template>
  <div class="container">
    <Header></Header>
    <Nav></Nav>

    <router-view/>
    <MyFooter></MyFooter>
  </div>
</template>

<style lang="scss">
</style>

<script>
import Nav from './components/Nav';
import Header from './components/Header';
import MyFooter from './components/Footer';

export default {
  components: {
    Nav,
    Header,
    MyFooter
  }
}
</script>
