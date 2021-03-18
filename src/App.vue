<template>
  <div id="nav">
    <router-link to="/">Login / Register</router-link> |
    <router-link to="/Home">Home</router-link> |
    <router-link to="/LogOut">LogOut</router-link>
  </div>
  <router-view />
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px 0;
}

#nav a {
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
  text-decoration: none;
}
</style>
