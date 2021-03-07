<template>

  <div id="register-section" class="container p-4 shadow-lg p-3 mb-5 bg-body rounded mt-5">
  <h3>Register</h3>
   <form action="/LoginRegister" method="POST">
       <div class="mb-3">
          <label for="exampleInputName1" class="form-label">Name</label>
          <input type="text" class="form-control" id="exampleInputName1" >
      </div>
       <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
      </div>

      <button type="submit" class="btn btn-primary">Register</button>
  </form>
</div>

{{signIn}}
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Register",

  data() {
    return {
      UserDetail: {
        name: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
      ...mapActions(["Register"]),
      async signIn(){
          this.Register(this.UserDetail);      
      }
  }
};
</script>
