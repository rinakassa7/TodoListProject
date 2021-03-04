<template>
    <ul>
        <li v-for="list in lists" :key="list.id">{{ list.name }}</li>
    </ul>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'Sidebar',
    computed: {
        ...mapState(['lists']),
    }
}
</script>

<style scoped>

</style>