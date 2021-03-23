export function SET_TOKEN(state, token) {
    state.token = token
}

export function SET_USER(state, user) {
    state.user = user;
}

export function LOGOUT(state, rootState) {
    state.token = ""
    state.user = {}
    rootState.todoList.activeList = null
    rootState.todoList.lists = []
    localStorage.removeItem('token')
}