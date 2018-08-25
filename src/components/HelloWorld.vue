<template>
 <div>
 <navbar/>
 <div><h1>Shrubs Textbooks</h1></div>
 <!--<img style="width: 100px" src="../assets/shrubslogo3.png">-->
    <div class="dropdown">
  <button class="dropbtn">Menu</button>
  <div class="dropdown-content">
    <a href="#">Buy</a>
    <a href="#">Sell</a>
    <a href="#">How it Works</a>

  </div>
</div>

<div style='margin: auto; margin-top: 5em;'>
    <input type='search' placeholder='Click here to search' style='width: 70%; height: 3em; padding: 20px;'></input>
</div>
<footer style='margin: auto; margin-top: 5em;'>
    A simple textbook exchange created for students, by students.
</footer>
 </div>
</template>

<script>
import navbar from './navbar'
import modal from './modal'

export default {
  name: 'HelloWorld',
  components: { navbar, modal },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      
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
    margin-top: 5em;
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
