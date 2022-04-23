import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import http from "@/util/http-common.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jwtToken: null,
    role: null
  },
  mutations: {
    SET_JWT_TOKEN(state, payload) {
      state.jwtToken = payload;
      console.log(state.jwtToken);
    },
    SET_ROLE(state, payload) {
      state.role = payload;
      console.log(state.role);
    }
  },
  actions: {
    signIn({ commit }, member) {
      return http
        .post(`/v1/members/login`, {
          email: member.email,
          password: member.password
        })
        .then(({ data }) => {
          commit("SET_JWT_TOKEN", data.data.jwtToken);
          commit("SET_ROLE", data.data.role);
          return true;
        })
        .catch((error) => {
          console.log("actions.signIn Error");
          console.log(error);
          return false;
        });
    }
  },
  modules: {},
  plugins: [createPersistedState()]
});
