<template>
  <div class="wrapper">
    <Title class="title" :activeList="activeList" />
    <Sidebar :activeList="activeList" @loadList="loadList" />
    <TodoList :id="activeList" />
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import Sidebar from '@/components/Sidebar.vue'
import TodoList from '@/components/TodoList.vue'

const axios = require('axios');
/*<p v-if="info != null"> {{info["data"].token}} </p>*/
export default {
  name: 'App',
  data() {
    return {
      activeList: 0,
      info : null
    }
  },
  components: {
    Title,
    Sidebar,
    TodoList,
    
  },
  
  methods: {
    loadList(id) {
      this.activeList = id
    }
  },
  mounted () {
    axios
      .post('http://138.68.74.39/api/login?email=toto@toto.com&password=totototo')
      .then(response => (this.info = response))
      console.log(this.info)
  }
}
</script>

<style>

.wrapper {
  display: grid;
  grid-template-columns: 350px auto;
  grid-template-rows: 50px auto;
  grid-template-areas:
    ". header"
    "sidebar section";
  grid-gap: 1em;
  margin: 0 50px 0 50px;
}

.title {
  margin-left: -8rem;
}
select, input[type="text"], input[type="submit"] {
    padding: .5rem 2rem;
    margin-bottom: 1rem;
}
form {
    margin-top: 1rem;
}
input[type="submit"] {
    margin-left: .5rem;
}
</style>