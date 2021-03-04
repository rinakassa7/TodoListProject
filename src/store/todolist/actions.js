export function todoCompleted({commit}, idList, idTodo) {
    commit('TODO_COMPLETED', idList, idTodo)
}

export function removeTodo({commit}, idList, idTodo) {
    commit('REMOVE_TODO', idList, idTodo)
}

export function addTodo({commit}, idList) {
    commit('ADD_TODO', idList)
}

export function addList({commit}) {
    commit('ADD_LIST')
}