<template>
 <div>
    <div style="margin-right: 60%;"><h1>Post your textbook</h1></div>
    <form style="margin: auto; width: 90%; margin-top: 1.5em;">
    <label>Title</label><input type="text" v-model="title" placeholder="" autofocus><br>
    <label>Author</label><input type="text" v-model="author" placeholder="" autofocus><br>
    Subject<input type="text" v-model="subject" placeholder="" autofocus><br>
    Price<input type="text" v-model="price" placeholder="" autofocus><br>
    School<input type="text" v-model="school" placeholder="" autofocus><br>
    Condition<input type="text" v-model="condition" placeholder="" autofocus><br>
    Description<input type="text" v-model="description" placeholder="" autofocus><br>
    <button type="submit" class='submitbtn'>Submit</button>
    </form>
    </div>
 </div>
</template>

<script>
export default {
  name: 'sell',
  methods: {
    
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

label {
    display: block;
    position: relative;
    text-align: left;
    
}
.submitbtn {
    background-color: white;
    color: #4CAF50;
    padding: 8px;
    font-size: 16px;
    cursor: pointer;
    width: 160px;
    border: .5px solid #4CAF50;
    margin-top: 2em;
    }
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
    width: 50%;
    height: 2.25em;
    padding: 1em;
    margin-top: 1em;
    margin-left: 10px;
    background-color: #4caf500f;
}
::-webkit-input-placeholder {
   text-align: center;
}
h1, h2 {
  font-weight: normal;
  font-size: 2em;
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
