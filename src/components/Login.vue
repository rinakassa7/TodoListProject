<template>
<div id="login-section" class="container p-4 shadow-lg p-3 mb-5 bg-body rounded mt-5">
    <h3 class="mb-3">Login</h3>
   <form action="/LoginRegister" method="POST">
       <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
      </div>

      <button type="submit" class="btn btn-primary">Login</button>
  </form>
</div>
{{login}}
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",

  data() {
    return {
      UserData: {
        email: "",
        password: "",
      },
      errorInput: false
    };
  },

  methods: {
      ...mapActions(["Register"]),
      async login(){
          this.Register(this.UserData);      
      }
  }
};
</script>

<style scoped>

#login-section{
    width: 30%;
}
</style>
