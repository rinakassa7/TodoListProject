const axios = require('axios');
export function register ({commit},UserData) {
  axios.post("http://138.68.74.39/api/register?name="+ UserData.name +"&email="+ UserData.email+"&password="+UserData.password)
  .then((response) => {commit('ADD_USER', [reponse["data"].token, UserData.name, UserData.email])})
}
export function login(userData){
  axios.post("http://138.68.74.39/api/login?email="+userData.email+"&password="+userData.password)
  .then((response) => {console.log(reponse)})
}
