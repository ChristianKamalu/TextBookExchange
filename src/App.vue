<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <sitefooter/>
  </div>
</template>

<script>
import navbar from './components/navbar'
import modal from './components/modal'
import sitefooter from './components/sitefooter'

export default {
  name: 'App',
  components: { navbar, modal, sitefooter },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  
}
.title {
 font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

</style>
