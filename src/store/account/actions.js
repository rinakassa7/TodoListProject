import router from "@/router";
const axios = require('axios');

export function register ({commit},userData) {
  const name = userData.name;
  const email = userData.email;
  const password = userData.password
  console.log("nom : " + name + " / email : "+ email + " / pwd : " + password);
  axios.post("http://138.68.74.39/api/register", {name,email,password}).then((response) => {
    if(response.status == 200){
      commit('SET_TOKEN', response["data"].token);
      commit('SET_NAME', name);
      commit('SET_EMAIL', email);
      router.push("/LoginRegister");
    }
  }).catch(console.error);
}
export function login({commit},userData){
  const email = userData.email;
  const password = userData.password;
  
  axios.post("http://138.68.74.39/api/login", {email,password}).then(response => {
    if(response.status == 200){
      commit('SET_TOKEN', response["data"].token);
      console.log( "email : "+ email + " / pwd : " + password + "token : " + response["data"].token);
      router.push("/LoginRegister");
      }
    }).catch(console.error);
  }
    

export function logout({commit}){
  commit('LOGOUT');
}
