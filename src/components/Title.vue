<template>
    <header>
        <h1>{{ listName(activeList) }}</h1>
    </header>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'Title',
    props: {
      activeList: {type: Number}
    },
    computed: {
      ...mapGetters('todoList', ['listName']),
    }
}
</script>

<style scoped>
header {
  grid-area: header;
}
header h1 {
    color: Tomato;
}
</style>