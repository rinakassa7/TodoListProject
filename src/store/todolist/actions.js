import axios from "axios"

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

export function getTodosLists({commit}){
    let token = localStorage.getItem("token")
    let config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    return axios.get("http://138.68.74.39/api/todolists", config).then(response => {
        commit("SET_LISTS", response.data);
        console.log(response.data);
    }).catch(error => console.log(error))
 }

export function getTodos({commit}, idList) {
    let token = localStorage.getItem("token")
    let config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    return axios.get("http://138.68.74.39/api/todos/" + idList, config).then(response => {
        console.log("getTodos: " + response.data);
        commit("SET_NEW_TODO", idList,response.data);
    }).catch(error => console.log(error))
 }