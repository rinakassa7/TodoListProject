<template>

    <aside class="shadow-lg p-3 mb-5 bg-body rounded">
        <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="newListName" @keyup.enter="newList()">
            <button class="btn btn-primary" type="button" id="button-addon2" @click="newList()">Add New List</button>
        </div>
        <ul v-if="lists.length > 0" class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center"
                v-for="list in lists" 
                :key="list.id"
                :class="{'active': list.id === activeList}"
                @click="loadList(list.id)"
            >
                {{ listName(list.id) }}
                <button class="btn-close btn-close" @click.stop="removeList(list.id)" title="Remove List"></button>
            </li>
        </ul>
        <div class="mt-3">Il vous reste <strong>{{ nbRemainingTodosGlobal }}</strong> tâche(s) à faire.</div>
    </aside>

</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'Sidebar',
    data() {
        return {
            newListName: ""
        }
    },
    computed: {
        ...mapGetters('todoList', ['activeList', 'lists', 'listName', 'nbRemainingTodosGlobal']),
    },
    methods: {
        ...mapActions('todoList', ['createList', 'setActiveList', 'removeList', 'getLists']),
        loadList (id) {
            this.setActiveList(id)
        },
        newList() {
            if (this.newListName !== "") {
                this.createList(this.newListName)
                this.newListName = ""
            }
        }
    },
}
</script>

<style scoped>
aside {
  grid-area: sidebar;
}
.active {
    background-color: tomato;
    border-color: red;
}

li:hover {
    cursor: pointer;
}
</style>
