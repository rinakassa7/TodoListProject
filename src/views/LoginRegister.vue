<template>
  <div class="w-50 p-3 mx-auto">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="login" aria-selected="true">Login</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="register-tab" data-bs-toggle="tab" data-bs-target="#register" type="button" role="tab" aria-controls="register" aria-selected="false">Register</button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab"><Login/></div>
      <div class="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab"><Register/></div>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import {mapGetters} from "vuex";

export default {
  name: 'LoginRegister',
  components: {
    Login,
    Register    
  },
  computed: {
    ...mapGetters('account', ['isAuthentificated']),
  },
  mounted() {
    if(localStorage.getItem('token')) {
      this.$router.push({name: 'Home', query: {redirect: '/Home'}});
    }
  }
}
</script>