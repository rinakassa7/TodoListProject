<template>

  <div id="register-section" class="container p-4 shadow-lg p-3 mb-5 bg-body rounded mt-5">
  <h3>Register</h3>
   <form @submit.prevent="register({name,email,password})">
       <div class="mb-3">
          <label for="register_name" class="form-label">Name</label>
          <input type="text" class="form-control" id="register_name" v-model="name">
      </div>
       <div class="mb-3">
          <label for="register_email" class="form-label">Email</label>
          <input type="email" class="form-control" id="register_email" aria-describedby="emailHelp" v-model="email">
      </div>
      <div class="mb-3">
          <label for="register_password" class="form-label">Password</label>
          <input type="password" class="form-control" id="register_password" v-model="password">
      </div>

      <button type="submit" class="btn btn-primary">Register</button>
  </form>
</div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Register",

  data() {
    return {
        name: "",
        email: "",
        password: "",
    };
  },

  methods: {
      ...mapActions('account', ['register']),
  },

  computed:{
    ...mapGetters('account',['getToken','getDataUser']),
  }
};
</script>
