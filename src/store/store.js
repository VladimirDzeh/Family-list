import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    savedUser: {},
    savedСhildren: [],
    user: {
      name: "",
      age: null,
    },
    child: {
      name: "",
      age: null,
    },
    preliminaryСhildren: [],
    limit: 5,
  },
  getters: {
    setUser(state) {
      return state.user;
    },
    setLimit(state) {
      return state.limit;
    },
    setPreliminaryСhildren(state) {
      return state.preliminaryСhildren;
    },
    setSavedUser(state) {
      return state.savedUser;
    },
    setSavedСhildren(state) {
      return state.savedСhildren;
    },
  },

  mutations: {
    addChild(state) {
      if (state.user.name && state.user.age) {
        state.child.id = Date.now();
        state.preliminaryСhildren.push({ ...state.child });
        state.child.name = "";
        state.child.age = null;
        state.limit -= 1;
      } else {
        alert("Заполните персональные данные!");
      }
    },
    removeChild(state, item) {
      state.preliminaryСhildren = state.preliminaryСhildren.filter(
        (el) => el !== item
      );
      state.limit += 1;
    },
    saveKids(state) {
      state.savedСhildren = state.preliminaryСhildren.filter(
        (item) => item.name && item.age
      );
      state.savedUser = { ...state.user };

      state.preliminaryСhildren = [];

      state.limit = 5;
    },
  },
});

export default store;
