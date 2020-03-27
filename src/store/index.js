import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import User from "./modules/user/user";
import Misc from "./modules/misc/misc";


Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "vuex",
  storage: localStorage,
  reducer: state => ({
    User: state.User, //only saves the user module
  })
});

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    User,
    Misc
  },
  plugins: [vuexPersist.plugin]
});
