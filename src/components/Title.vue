<template>
    <header>
        <h1 class="card-subtitle mb-2 text-muted" v-if="activeList">{{ listName(activeList) }}</h1>
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
    color: rgb(150, 140, 139);
    
}
</style>