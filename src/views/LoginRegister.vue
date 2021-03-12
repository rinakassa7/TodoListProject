<template>
    <div>
        <Login/>
        <Register/>
    </div>
</template>

<script>
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import {  mapGetters } from "vuex";


export default {
  name: 'LoginRegister',
    components: {
    Login,
    Register    
  },
  computed:{
    ...mapGetters('account',['isAuthentificated']),
  },
  mounted () {
    console.log(this.isAuthentificated)
    if(this.isAuthentificated ){
        this.$router.push({ name: 'Home', query: { redirect: '/Home' } });
    }
  }
}
</script>

