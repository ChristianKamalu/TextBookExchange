<template>

<div class='container' style="margin-bottom: 10%;">
    <div class='row'>
        <div class="dropdown btn">
            <button class="dropbtn">Menu</button>
        <div class="dropdown-content">
            <router-link to="/">Home</router-link>
            <router-link to="/buy">Buy</router-link>
            <router-link to="/sell">Sell</router-link>
            <router-link to="/">How It Works</router-link>
        </div>
        </div>
    </div>
        
    <div style="position: absolute; top: 0; right: 0;" class='righty btn'>
        <button class='righty'><router-link to="/signup">Sign Up</router-link></button> 
        <button class='righty'><router-link to="/login">Login</router-link></button>
    </div>
</div>

</template>

<script>
import buttonmenu from './buttonmenu'

export default {
  name: 'navbar',
  components: { buttonmenu },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      
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

    body {
    line-height: 0px;
    }
    .container {
        padding: 4px;

    }
    .row {
        text-align: center;
        position: absolute; 
        top: 0; left: 0; 
        margin-left: 1em;
    }
    .btn {
        display: inline-block; 
    }
    .righty {
        font-size: 18px;
    }
    button {
        padding: .5em;
    }
    button:focus{
        background-color: #4caf500f;
        outline: none;
    }
    button:hover {
        background-color: #4caf500f;
        outline: none;
    }
    .dropbtn {
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    width: 160px;
    
    }

    /* The container <div> - needed to position the dropdown content */
    .dropdown {
        position: relative;
        display: inline-block;
        margin-top: 1em;

    }

    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;

    }

    /* Links inside the dropdown */
    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;

    }

    /* Change color of dropdown links on hover */
    .dropdown-content a:hover {background-color: #f1f1f1}

    /* Show the dropdown menu on hover */
    .dropdown:hover .dropdown-content {
        display: block;
    }

    /* Change the background color of the dropdown button when the dropdown content is shown */
    .dropdown:hover .dropbtn {
        background-color: #3e8e41;
    }
</style>
