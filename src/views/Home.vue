<template>
  <div class="wrapper">
    <Title :activeList="activeList" />
    <Sidebar :activeList="activeList" @loadList="loadList" />
    <TodoList :id="activeList" />
  </div>
</template>

<script>
import Title from '../components/Title.vue'
import Sidebar from '../components/Sidebar.vue'
import TodoList from '../components/TodoList.vue'

export default {
  name: 'App',
  data() {
    return {
      activeList: 0
    }
  },
  components: {
    Title,
    Sidebar,
    TodoList
  },
  methods: {
    loadList(id) {
      this.activeList = id
    }
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