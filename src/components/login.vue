<template>
 <div>
 <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-grey">Login</h3>
                    <p class="subtitle has-text-grey">Please login to proceed.</p>
                    <div class="box">
                        <figure class="avatar">
                            <!--<img src="https://placehold.it/128x128">-->
                        </figure>
                        <form v-on:submit.prevent="login">
                            <div class="field">
                                <div class="control">
                                    <input type="email" v-model="email" placeholder="Your Email" autofocus>
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input type="password" v-model="password" placeholder="Your Password">
                                </div>
                            </div>
                            <div class="field">
                                
                                    <p><input class="checkbox" value="Remember Me" type="checkbox">Remember me</p>
                                
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth">Login</button>
                        </form>
                    </div>
                    <p class="has-text-grey">
                        <router-link to="../signup">Sign Up</router-link> &nbsp;·&nbsp;
                        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                        <a href="../">Need Help?</a>
                    </p>
                </div>
            </div>
 </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    login: function() {
       this.$store.dispatch('login',{
         email: this.email,
         password: this.password,
       }).then(user => {
	        this.email = '';
	         this.password = '';
       });
     },
     logout: function() {
       this.$store.dispatch('logout');
     }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      email: '',
      password: '',
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.checkbox {

}
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
