import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/**
 *  Store
 *  @version 2019/10/01
 *  @author ryo-as
 */
export default new Vuex.Store({
  state: {
    increment: 1,
    todos: [],
  },
  mutations: {
  	insert: (state, comment) => {
      state.todos.push({
        id: state.increment++,
        comment,
        status: false,
      });
    },
    remove: (state, id) => {
      state.todos = state.todos.filter(todo => todo.id !== id)
    },
    achieved: (state, id) => {
      const index = state.todos.findIndex(todo => todo.id === id);
      state.todos[index].status = true;
    },
    unachieved: (state, id) => {
      const index = state.todos.findIndex(todo => todo.id === id);
      state.todos[index].status = false;
    }
  },
  actions: {
    insert({ commit }, data) {
      commit('insert', data);
    },
    remove({ commit }, id) {
      commit('remove', id);
    },
    achieved({ commit }, id) {
      commit('achieved', id);
    },
    unachieved({ commit }, id) {
      commit('unachieved', id);
    },
  },
});
