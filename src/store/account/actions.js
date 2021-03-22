import router from "@/router"
const axios = require('axios')

export function register ({commit},userData) {
  const name = userData.name;
  const email = userData.email;
  const password = userData.password

  axios.post("http://138.68.74.39/api/register", {name,email,password}).then((response) => {
    if(response.status == 200){
      commit('SET_TOKEN', response["data"].token)
      localStorage.setItem("token", response["data"].token)
      commit('SET_NAME', name);
      commit('SET_EMAIL', email);
      router.push("/Home");
    }
  }).catch(console.error);
}

export function login({commit}, userData) {
  const email = userData.email;
  const password = userData.password;
  
  axios.post("http://138.68.74.39/api/login", {email, password}).then(response => {
    commit('SET_TOKEN', response["data"].token)
    localStorage.setItem("token", response["data"].token)
    router.push("/Home");
  }).catch(console.error);
}

export function logout({commit, rootState}) {
  commit('LOGOUT', rootState)
}

export function getUser({commit}) {
  let token = localStorage.getItem("token");
  axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ token
    }
    }).get('http://138.68.74.39/api/user').then((response) => {
    commit("SET_USER", response.data)
  }).catch(console.error)
}