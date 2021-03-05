//index.js

import {createStore} from 'vuex'

import todoList from './todolist';

export default createStore({
    modules: {
        namespaced: true,
        todoList
      },
  })