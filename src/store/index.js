//index.js

import {createStore} from 'vuex'

import todoList from './todolist';
import account from './account';

export default createStore({
    modules: {
        namespaced: true,
        todoList,
        account
      },
  })