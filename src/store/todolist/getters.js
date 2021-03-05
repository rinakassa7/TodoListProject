export const filteredTodos = (state) => (id) => {
    if (state.filter === 'completed') {
        return state.lists[id].todos.filter(t => t.completed)
    } else if (state.filter === 'not-completed') {
        return state.lists[id].todos.filter(t => !t.completed)
    } else {
        return state.lists[id].todos
    }
}

export const remainingTodos = (state) => id => {
    return state.lists[id].todos.filter(t => !t.completed).length
}

export const listName = (state) => id => {
    return state.lists[id].name
}