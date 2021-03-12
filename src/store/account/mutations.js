export function SET_NAME(state, userData) {
    state.user.name = userData.name;
}
export function SET_EMAIL(state, userData) {
    state.user.email = userData.email;
}
export function SET_TOKEN(state, token) {
    state.token = token;
}

export function LOGOUT(state){
    state.token = "";
    state.user.name = "";
    state.user.email = "";
}

