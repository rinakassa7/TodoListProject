export const getToken = (state) => state.token;
export const getDataUser = (state) => state.getDataUser;

export const isAuthentificated  = (state) => {
    return state.token !== "";
}