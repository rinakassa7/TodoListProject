export function todoCompleted({commit}, [idList, idTodo]) {
    commit('TODO_COMPLETED', [idList, idTodo])
}

export function removeTodo({commit}, [idList, idTodo]) {
    commit('REMOVE_TODO', [idList, idTodo])
}
export function removeList({commit}, [idList]) {
    commit('REMOVE_LIST', [idList])
}

export function addTodo({commit, state}, idList) {
    if (state.newTodo !== "") {
        commit('ADD_TODO', idList)
    }
}

export function addList({commit, state}) {
    if (state.newList !== "") {
        commit('ADD_LIST')
    }
}