import Vue from "vue";
import Vuex from "vuex";
import users from './modules/users';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    users
  },
  strict: {
    debug
  }
});
