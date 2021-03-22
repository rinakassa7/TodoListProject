export const getToken = (state) => state.token

export const getUser = (state) => state.user

export const isAuthentificated = (state) => {
    return state.token !== ""
}