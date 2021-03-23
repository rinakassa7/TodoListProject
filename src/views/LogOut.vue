<template>
    <h3>Déconnexion réussie !!</h3>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'LogOut',
  methods: {
    ...mapActions('account', ['logout']),
  },
  mounted() {
    this.logout()
    this.$router.push({ name: 'LoginRegister', query: { redirect: '/' } });
  }
}
</script>
