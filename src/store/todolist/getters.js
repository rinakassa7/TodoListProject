export const filteredTodos = (state) => (id) => {
    if (state.lists[id].todos.filter === 'completed') {
        return state.lists[id].todos.filter(t => t.completed)
    } else if (state.lists[id].todos.filter === 'not-completed') {
        return state.lists[id].todos.filter(t => !t.completed)
    } else {
        return state.lists[id].todos
    }
}