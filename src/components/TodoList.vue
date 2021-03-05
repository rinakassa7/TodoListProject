<template>
    <main>
        <form @submit.prevent="addTodo(id)">
            <input type="text" v-model="newTodo">
            <input type="submit" value="Add todo">
        </form>
        <p class="filters">
            <button @click="setFilter('all')">All</button>
            <button @click="setFilter('completed')">Completed</button>
            <button @click="setFilter('not-completed')">Not Completed</button>
        </p>
        <ul>
            <li v-for="todo in filteredTodos(id)" :key="todo.id" @click="todoCompleted([id, todo.id])">
                <span :class="{ completed: todo.completed }"><input type="checkbox" :checked="todo.completed">{{todo.name}}</span>
                <button @click.stop="removeTodo([id, todo.id])">&times;</button>
            </li>
        </ul>
        <p>Vous avez <strong>{{ remainingTodos(id) }}</strong> tâche(s) à faire</p>
    </main>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'TodoList',
  props: {
    id: {type: Number}
  },
  methods: {
    ...mapActions('todoList', ['addTodo', 'removeTodo', 'todoCompleted']),
    setFilter(value) {
      this.$store.commit('todoList/SET_FILTER', value)
    }
  },
  computed: {
    ...mapGetters('todoList', ['filteredTodos', 'remainingTodos']),
    newTodo: {
      get() {
        return this.$store.state.newTodo
      },
      set(value) {
        this.$store.commit('todoList/SET_NEW_TODO', value)
      }
    },   
  },
}
</script>

<style scoped>
main {
  grid-area: section;
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
li {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin: .5rem 0;
}
li:hover {
    background: #eee;
}
.filters {
  margin-bottom: .5rem;
}
.filters button {
  margin-right: .5rem;
}
input[type="checkbox"] {
    margin-right: .5rem;
}
.completed {
    text-decoration: line-through;
}
</style>