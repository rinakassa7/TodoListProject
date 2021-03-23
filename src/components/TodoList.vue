<template>
    <main class="shadow-lg p-3 mb-5 bg-body rounded">
        <div v-if="activeList">
            <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="newTodoName" @keyup.enter="newTodo()">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="newTodo()">Add New Todo</button>
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
                            <button class="btn btn-secondary m-1" @click.stop="editingTodo = todo.id" :disabled="editingTodo == todo.id"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></button>
                            <button class="btn btn-danger" @click.stop="removeTodo({listId: activeList, todoId: todo.id})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button>
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
