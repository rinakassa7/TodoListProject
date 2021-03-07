export function TODO_COMPLETED(state, [idList, idTodo]) {
    const t = state.lists[idList].todos[idTodo]
    t.completed = !t.completed
}

export function REMOVE_TODO(state, [idList, idTodo]) {
    state.lists[idList].todos.splice(idTodo, 1)
}

export function REMOVE_LIST(state, [idList]) {
    state.lists.splice(idList, 1)
}

export function ADD_TODO(state, idList) {
    const todo = {
        id: state.lists[idList].todos.length,
        name: state.newTodo,
        completed: false
    }
    state.lists[idList].todos.push(todo)
    state.newTodo = ''
}

export function SET_NEW_TODO(state, value) {
    state.newTodo = value
}

export function SET_NEW_LIST(state, value) {
    state.newList = value
}

export function SET_FILTER(state, value) {
    state.filter = value
}

export function ADD_LIST(state) {
    const list = {
        id: state.lists.length,
        name: state.newList,
        todos: []
    }
    state.lists.push(list)
    state.newList = ''
}