<template>
 <div>

 <div><h1 style="font-size: 3em; font-weight: bold">Shrubs Textbooks</h1></div>
 <!--<img style="width: 100px" src="../assets/shrubslogo3.png">-->
    

<div style='margin: auto; margin-top: 5em;'>
    <input type='search' placeholder='Search' style='text-align: left; width: 70%; height: 3em; padding: 20px;' autofocus></input>
</div>

 </div>
</template>

<script>
import modal from './modal'
import buttonmenu from './buttonmenu'

export default {
  name: 'HelloWorld',
  components: { modal, buttonmenu },
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
    //border: .5px solid black;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-image: url('');
    background-position: 10px 10px; 
    background-repeat: no-repeat;
}
::-webkit-input-placeholder {
   text-align: left;
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
