<template>
<div>
     <div style='margin: auto;'>
        <input type='search' placeholder='Search' style='text-align: left; width: 60%; height: 2.5em; padding: 20px;'></input>
    </div>
    <div style="margin-top: 3%;">
        <div class="dropdown btn" style="margin-right: 20%;">
            <button class="dropbtn">School</button>
        <div class="dropdown-content">
            <router-link to="/">Brigham Young University</router-link>
            <router-link to="/buy">Utah Valley University</router-link>
            <a href="#">University of Utah</a>
            <a href="#">Utah State University</a>
            <a href="#">Weber State University</a>
        </div>
        </div>
        <div class="dropdown btn">
            <button class="dropbtn">Subject</button>
        <div class="dropdown-content">
            <router-link to="/">Science</router-link>
            <router-link to="/buy">Math</router-link>
            <a href="#">Technology</a>
            <a href="#">English</a>
            <a href="#">History</a>
        </div>
        </div> 
    </div>
</div>
</template>

<script>
import buttonmenu from './buttonmenu'

export default {
  name: 'buy',
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
    input:focus{
    background-color: #4caf500f;
    outline: none;
    }
    input:hover{
        background-color: #4caf500f;
        outline: none;
    }
    input {
    font-size: 20px;
    //border: .5px solid black;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-image: url('');
    background-position: 10px 10px; 
    background-repeat: no-repeat;
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
    background-color: white;
    color: #4CAF50;
    padding: 8px;
    font-size: 16px;
    cursor: pointer;
    width: 160px;
    border: .5px solid #4CAF50;
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
        background-color: white;
    }
</style>
