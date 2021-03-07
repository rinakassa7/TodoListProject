export function SET_USER(state, newUser){
    state.user.name = newUser.name;
    state.user.email = newUser.email;
}

export function SET_TOKEN(state, newToken){
    state.token = newToken;
}

export function logOut(state){
    state.user.name = null
    state.user.email = null
    state.token = null
}