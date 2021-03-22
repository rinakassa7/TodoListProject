<template>
  <div class="wrapper"> 
    <Title class="title" />
    <Sidebar />
    <TodoList />
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import Sidebar from '@/components/Sidebar.vue'
import TodoList from '@/components/TodoList.vue'
import {mapGetters, mapActions} from "vuex";

export default {
  name: 'Home',
  components: {
    Title,
    Sidebar,
    TodoList,
  },
  methods: {
    ...mapActions('todoList', ['getLists']),
  },
  computed:{
    ...mapGetters('account', ['isAuthentificated']),
  },
  mounted() {
    if(!localStorage.getItem('token')) {
      this.$router.push({ name: 'LoginRegister', query: { redirect: '/' } });
    } else {
      this.getLists()
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
  margin: 0 50px 0 50px;
}

.title {
  margin-left: -8rem;
}

form {
    margin-top: 1rem;
}

input[type="submit"] {
    margin-left: .5rem;
}
</style>