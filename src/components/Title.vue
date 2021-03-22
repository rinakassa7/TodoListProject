<template>
    <header>
        <h1 v-if="activeList">{{ listName(activeList) }}</h1>
    </header>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'Title',
    computed: {
      ...mapGetters('todoList', ['activeList', 'listName']),
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