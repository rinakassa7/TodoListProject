<template>
  <Title />
  <Sidebar />
  <TodoList />
</template>

<script>
import Title from './views/Title.vue'
import Sidebar from './views/Sidebar.vue'
import TodoList from './views/TodoList.vue'

export default {
  name: 'App',
  components: {
    Title,
    Sidebar,
    TodoList
  }
}
</script>