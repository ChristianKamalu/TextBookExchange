<template>
 <div class='righty'>
    <a href="#">Sign Up</a> |
    <a href="#">Login</a>
 </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      signup: False,
    }
  },
  methods: {
    modalToggle: function() {
        
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .righty {
        margin-left: 85%;
        
    }
</style>
