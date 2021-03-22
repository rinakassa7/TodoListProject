<template>
    <main class="shadow-lg p-3 mb-5 bg-body rounded">
        <div v-if="activeList">
            <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="newTodoName" @keyup.enter="newTodo()">
                <button class="btn btn-primary" type="button" id="button-addon2" @click="newTodo()">Add New Todo</button>
            </div>
            <div v-if="todos">
                <div class="btn-group my-2" role="group" aria-label="Basic outlined example">
                    <button type="button" class="btn btn-outline-dark" @click="setFilter('all')" :disabled="filter === 'all'">All</button>
                    <button type="button" class="btn btn-outline-dark" @click="setFilter('completed')" :disabled="filter === 'completed'">Completed</button>
                    <button type="button" class="btn btn-outline-dark" @click="setFilter('not-completed')" :disabled="filter === 'not-completed'">Not Completed</button>
                </div>
                <ul>
                    <li v-for="todo in filterAllTodos" :key="todo.id">
                        <div>
                            <div v-if="editingTodo !== todo.id">
                              <input type="checkbox" class="form-check-input mx-2" :checked="todo.completed == 1" @click="completeTodo({todoId: todo.id, name: todo.name, completed: todo.completed, listId: activeList})">
                              <span :class="{ completed: todo.completed == 1 }" @dblclick.stop="editingTodo = todo.id">{{todo.name}}</span>
                            </div>
                            <div class="input-group" v-else>
                                <input type="text" class="form-control"
                                  :value="todo.name"
                                  @change="editTodoName = $event.target.value"
                                  @keyup.enter="modifyTodo(todo.id, todo.name, todo.completed)"
                                >
                                <button class="btn btn-outline-secondary" type="button" @click.stop="clearEdit()">Cancel</button>
                                <button class="btn btn-outline-success" type="button" @click.stop="modifyTodo(todo.id, todo.name, todo.completed)">Apply Changes</button>
                            </div>
                        </div>
                        <div>
                            <button class="btn btn-secondary m-1" @click.stop="editingTodo = todo.id" :disabled="editingTodo == todo.id">Edit</button>
                            <button class="btn btn-danger" @click.stop="removeTodo({listId: activeList, todoId: todo.id})">Delete</button>
                        </div>
                    </li>
                </ul>
                <div>Il y a <strong>{{ todosNumber }}</strong> tâche(s).</div>
            </div>
        </div>
    </main>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'TodoList',
  data() {
    return {
      newTodoName: "",
      filter: "all",
      editingTodo: -1,
      editTodoName: ""
    }
  },
  methods: {
    ...mapActions('todoList', ['addTodo', 'modifyTodoName', 'removeTodo', 'completeTodo', 'getTodos']),
    setFilter(value) {
      this.filter = value
    },
    newTodo() {
      if (this.newTodoName !== "") {
        this.addTodo({name: this.newTodoName, listId: this.activeList})
        this.newTodoName = ""
      }
    },
    modifyTodo(id, name, completed) {
      if (this.editTodoName !== "" && name !== this.editTodoName) {
        this.modifyTodoName({listId: this.activeList, todoId: id, text: this.editTodoName, completed: completed})
      }
      this.clearEdit()
    },
    clearEdit() {
      this.editingTodo = -1
      this.editTodoName = ""
    }
  },
  computed: {
    ...mapGetters('todoList', ['activeList', 'todos', 'filteredTodos']),
    filterAllTodos() {
      return this.filteredTodos(this.filter)
    },
    todosNumber() {
      return this.filterAllTodos.length
    }
  },
  mounted() {
    if (this.activeList !== null) this.getTodos(this.activeList)
  }
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
    align-items: center;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin: .5rem 0;
}
li:hover {
    background: #eee;
}
.completed {
    text-decoration: line-through;
}
</style>