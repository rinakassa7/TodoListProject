<template>

    <aside class="shadow-lg p-3 mb-5 bg-body rounded">
        <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="newListName" @keyup.enter="newList()">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="newList()">Add New List</button>
        </div>
        <ul v-if="lists.length > 0" class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center"
                v-for="list in lists" 
                :key="list.id"
                :class="{'active': list.id === activeList}"
                @click="loadList(list.id)"
            >
                {{ listName(list.id) }}
                <button class="btn btn-ligh" @click.stop="removeList(list.id)" title="Remove List"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button>
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
        ...mapActions('todoList', ['createList', 'setActiveList', 'removeList']),
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
