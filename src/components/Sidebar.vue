<template>
    <aside>
        <form @submit.prevent="addList()">
            <input type="text" v-model="newList">
            <input type="submit" value="Add list">
        </form>
        <ul>
            <li v-for="list in lists" 
                :key="list.id"
                :class="{'activeList': list.id === activeList}"
                @click="loadList(list.id)"
            >
                {{ list.name }}
            </li>
        </ul>
    </aside>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    name: 'Sidebar',
    props: {
        activeList: {type: Number}
    },
    computed: {
        ...mapState('todoList', ['lists']),
        newList: {
            get() {
                return this.$store.state.newList
            },
            set(value) {
                this.$store.commit('todoList/SET_NEW_LIST', value)
            }
        },
    },
    methods: {
        ...mapActions('todoList', ['addList']),
        loadList (id) {
            this.$emit('loadList', id)
        }
    }
}
</script>

<style scoped>
aside {
  grid-area: sidebar;
}
li {
  color: DodgerBlue;
}
li:hover {
  font-weight: bold;
  cursor: pointer;
}
.activeList {
    color: Tomato;
    font-weight: bold;
}
</style>