import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: "lin",
  },
  mutations: {},
  getters: {
    getUserName: (state) => state.userName,
  },
  actions: {},
});
