<template>
    <div>
        <Login/>
        <Register/>
    </div>
</template>

<script>
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'

export default {
  name: 'App',
  
    components: {
    Login,
    Register    
  },
}
</script>

