<template>
    <div>
        <form @submit.prevent="addTodo(idList)">
            <input type="text" v-model="newTodo">
            <input type="submit" value="Add todo">
        </form>
        <select v-model="filter">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not Completed</option>
        </select>
        <ul>
            <li v-for="todo in todos" :key="todo.id" @click="todoCompleted(idList, todo.id)">
                <span :class="{ completed: todo.completed }"><input type="checkbox" :checked="todo.completed">{{todo.name}}</span>
                <button @click.stop="removeTodo(idList, todo.id)">&times;</button>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  name: 'TodoList',
  props: {
    idList: {type: Number, default: 0}
  },
  methods: {
    ...mapActions(['addTodo', 'removeTodo', 'todoCompleted'])
  },
  computed: {
    ...mapState(['todos']),
    ...mapGetters(['filteredTodos']),
    todos() {
      return this.filteredTodos(this.idList)
    },
    newTodo: {
      get() {
        return this.$store.state.newTodo
      },
      set(value) {
        this.$store.commit('SET_NEW_TODO', value)
      }
    },
    filter: {
      get() {
        return this.$store.state.filter
      },
      set(value) {
        this.$store.commit('SET_FILTER', value)
      }
    }   
  }
}
</script>

<style scoped>
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
    margin-bottom: .5rem;
}
li:hover {
    background: #eee;
}
input[type="checkbox"] {
    margin-right: .5rem;
}
.completed {
    text-decoration: line-through;
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