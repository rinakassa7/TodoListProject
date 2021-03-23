export function SET_LISTS(state, lists) {
    state.lists = lists
    if (lists.length > 0) state.activeList = state.lists[0].id
}

export function SET_TODOS(state, params) {
    const list = state.lists.find(l => l.id === params.listID)
    if (list) list.find(l => l.id === params.listID).todos = params.todos
}

export function CREATE_LIST(state, list) {
    state.lists.push(list)
    state.activeList = list.id
}

export function DELETE_LIST(state, listID) {
    const index = state.lists.findIndex(l => l.id === listID)
    state.lists.splice(index, 1)
    state.activeList = null
}

export function SET_ACTIVE_LIST(state, listID) {
    state.activeList = listID
}

export function CREATE_TODO(state, params) {
    const list = state.lists.find(l => l.id === params.todolist_id)
    if (!list.todos) list["todos"] = []
    list.todos.push(params)
}

export function COMPLETE_TODO(state, params) {
    const list = state.lists.find(l => l.id === params.listId)
    const todo = list.todos.find(t => t.id === params.todoId)
    todo.completed = +!params.completed
}

export function DELETE_TODO(state, params) {
    const list = state.lists.find(l => l.id === params.listId)
    const index = list.todos.findIndex(t => t.id === params.todoId)
    list.todos.splice(index, 1)
}

export function MODIFY_TODO_NAME(state, params) {
    state.lists.find(l => l.id === params.listId).todos.find(t => t.id === params.todoId).name = params.text;
}
