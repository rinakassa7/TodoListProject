const axios = require('axios');

export function getLists({commit}) {
    let token = localStorage.getItem("token");
    axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token
        }
        }).get("http://138.68.74.39/api/todolists").then(response => {
        commit("SET_LISTS", response.data)
    }).catch(error => console.log(error))
}

export function createList({commit}, name) {
    let token = localStorage.getItem("token");
    axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token
        }
        }).post('http://138.68.74.39/api/todolist?name=' + name).then(response => {
        commit("CREATE_LIST", response.data)
    }).catch(error => console.log(error))
}

export function removeList({commit}, listID) {
    let token = localStorage.getItem("token");
    axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token
        }
        }).delete('http://138.68.74.39/api/todolist/' + listID).then(() => {
        commit("DELETE_LIST", listID)
    })
}

export function setActiveList({commit}, params) {
    commit("SET_ACTIVE_LIST", params)
}

export function setListsToDefault({commit}) {
    commit("SET_LISTS_TO_DEFAULT")
}

export function getTodos({commit}, listId) {
    let token = localStorage.getItem("token");
    axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token
        }
        }).get("http://138.68.74.39/api/todos/" + listId).then(response => {
        commit("SET_TODOS", listId, response.data);
    }).catch(error => console.log(error))
}

export function addTodo({commit}, params) {
    let token = localStorage.getItem("token");
    axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token
        }
        }).post('http://138.68.74.39/api/todo', null, {params: {name: params.name, completed: 0, todolist_id: params.listId}}).then(response => {
        commit('CREATE_TODO', response.data)
    }).catch(error => console.log(error))
}

export function completeTodo({commit}, params) {
    commit('COMPLETE_TODO', params)
    let token = localStorage.getItem("token");
    axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token
        }
        }).post('http://138.68.74.39/api/completeTodo/' + params.todoId, null, {params: {name: params.name, completed: +!params.completed, todolist_id: params.listId}}).catch(error => console.log(error))
}

export function removeTodo({commit}, params) {
    let token = localStorage.getItem("token");
    axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token
        }
        }).delete('http://138.68.74.39/api/todo/' + params.todoId).then(() => {
        commit("DELETE_TODO", params)
    }).catch(error => console.log(error))
}

export function modifyTodoName({commit}, params) {
    let token = localStorage.getItem("token");
    axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token
        }
        }).patch('http://138.68.74.39/api/todo/' + params.todoId, null, {params: {name: params.text, completed: +params.completed, todolist_id: params.listId}}).then(() => {
        commit("MODIFY_TODO_NAME", params);
    })
}