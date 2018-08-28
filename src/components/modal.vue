<template>
 <div>
    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
        <!-- Any other Bulma elements you want -->
        <signup v-if="signup"/>
        <login v-else/>
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
    </div>
 </div>
</template>

<script>
import signup from './signup'
import login from './login'

export default {
  components: { signup, login },
  name: 'modal',
  props: [signup],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
