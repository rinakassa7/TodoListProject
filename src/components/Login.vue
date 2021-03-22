<template>
<div class="container p-4 shadow-lg p-3 mb-5 bg-body rounded mt-5">
    <h3 class="mb-3">Login</h3>
    <form @submit.prevent="login({email, password})">
        <div class="input-group flex-nowrap my-2">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" v-model="email">
        </div>
        <div class="input-group flex-nowrap my-2">
            <input type="password" class="form-control" placeholder="Password" aria-label="Password" v-model="password">
        </div>
        <button type="submit" class="btn-lg btn-primary my-2">Login</button>
    </form>
</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",

  data() {
    return {
        email: "",
        password: "",
    };
  },

  methods: {
      ...mapActions('account', ['login']),
     
  }
};
</script>
