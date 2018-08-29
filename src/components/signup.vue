<template>
 <div>
 <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-grey">Signup</h3>
                    <p class="subtitle has-text-grey">Create your account.</p>
                    <div class="box">
                        <figure class="avatar">
                            <!--<img src="https://placehold.it/128x128">-->
                        </figure>
                        <form v-on:submit.prevent="register">
                            <div class="field">
                                <div class="control">
                                    <input type="text" v-model="name" placeholder="Full Name" autofocus>
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input type="text" v-model="username" placeholder="Username" autofocus>
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input type="email" v-model="email" placeholder="Your Email" >
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input type="password" v-model="password" placeholder="Your Password">
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input type="password" placeholder="Confirm Password">
                                </div>
                            </div>
                            
                            <button style="margin-top: 2em" class="button is-block is-info is-large is-fullwidth">Sign Up</button>
                        </form>
                    </div>
                    <p class="has-text-grey">
                        Already have an account? <router-link to="/login">Log in</router-link> &nbsp;·&nbsp
                        <a href="../">Need Help?</a>
                    </p>
                </div>
            </div>
 </div>
</template>

<script>
export default {
  name: 'signup',
  methods: {
    register: function(){
      this.$store.dispatch('register', {
        username: this.username,
        email: this.email,
        password: this.password,
        name: this.name,
      })
    }
   },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: '',
      email: '',
      password: '',
      name: '',
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.button.is-info {
    background-color: #4CAF50;
   
}

input:focus{
    background-color: #4caf500f;
    
    outline: none;
}
input:hover{
    background-color: #4caf500f;
    
    outline: none;
}
input {
    font-size: 1.5em;
    width: 100%;
    height: 2.25em;
    padding: 1em;
}
::-webkit-input-placeholder {
   text-align: center;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


</style>
