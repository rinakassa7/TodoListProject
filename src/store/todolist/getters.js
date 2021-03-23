export const lists = (state) => {
    return state.lists
}

export const activeList = (state) => {
    return state.activeList
}

export const listName = (state) => id => {
    const list = state.lists.find(l => l.id === id)
    if (list) return list.name
}

export const todos = (state) => {
    const list = state.lists.find(l => l.id === state.activeList)
    if (list) {
        const todos = list.todos
        if (todos == null) return null
        if (todos.length == 0) return null
        return todos
    }
}

export const filteredTodos = (state) => filter => {
    const list = state.lists.find(l => l.id === state.activeList)
    if (list) {
        if (filter === 'completed') {
            return list.todos.filter(t => t.completed == 1)
        } else if (filter === 'not-completed') {
            return list.todos.filter(t => t.completed == 0)
        } else {
            return list.todos
        }
    }
}

export const nbRemainingTodosGlobal = (state) => {
    let nbRemainingtodos = 0
    for (let i = 0; i < state.lists.length; i++) {
        if(state.lists[i].todos != null){
            nbRemainingtodos += state.lists[i].todos.filter(t => t.completed == 0).length
        }
    }
    return nbRemainingtodos
}
