export function ADD_USER (state, [token,name,email]){
    state.user.token = token
    state.user.name = name
    state.user.email = email
}
export function SET_NEW_USER(state, value) {
    state.newUser = value
}
