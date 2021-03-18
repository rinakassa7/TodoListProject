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
import {mapGetters, mapActions} from "vuex";

export default {
  name: 'Home',
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
    ...mapActions('todoList', ['getTodosLists']),
    loadList(id) {
      this.activeList = id
    }
  },
  computed:{
    ...mapGetters('account', ['isAuthentificated']),
  },
  mounted() {
    if(!this.isAuthentificated) {
      this.$router.push({ name: 'LoginRegister', query: { redirect: '/' } });
    } else {
      this.getTodosLists()
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