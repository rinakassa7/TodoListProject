const axios = require('axios');
/*
const config = {
  headers: { Authorization: 'Bearer Token' }
};*/

export function register (UserDetail) {
  axios.post("http://138.68.74.39/api/register?name="+ UserDetail.name +"&email="+UserDetail.email+"&password="+UserDetail.password)
}
export function login(userData){
  axios.post("http://138.68.74.39/api/login?email="+userData.email+"&password="+userData.password)
}