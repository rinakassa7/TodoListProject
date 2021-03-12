<template>
<div id="login-section" class="container p-4 shadow-lg p-3 mb-5 bg-body rounded mt-5">
    <h3 class="mb-3">Login</h3>
   <form @submit.prevent="login({email, password})">
       <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
      </div>
      <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
      </div>

      <button type="submit" class="btn btn-primary">Login</button>
  </form>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Login",

  data() {
    return {
        email: "",
        password: "",
    };
  },

  methods: {
      ...mapActions('account',['login']),
     
  },
  computed:{
      ...mapGetters('account', ['getToken','getDataUser'])
  }
};
</script>

<style scoped>

#login-section{
    width: 30%;
}
</style>
