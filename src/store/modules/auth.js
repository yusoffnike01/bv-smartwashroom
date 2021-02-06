import Axios from "axios";
const state = () => ({
  token: localStorage.getItem("token") || "",
 
 
});

const mutations = {
  saveuser(state, payload) {
    state.token = payload;
//    localstorage.setitem('islogin',payload)
    localStorage.setItem("token", payload);
    Axios.defaults.headers.common["Authorization"] = payload;
  },


  removeUser(state) {
    state.token = ''
    localStorage.removeItem('token')
    delete Axios.defaults.headers.common['Authorization']
}

  
};

const getters = {
  isLoggedIn: (state) => !!state.token,
};

const actions = {
  login({ commit }, payload) {
    return new Promise((resolve, reject) => {
      Axios.post(
        "https://loyalthe-core-staging.herokuapp.com/admin/login",
        payload
      )
        .then((response) => {
          commit("saveuser", response.headers.authorization);
          console.log(response)
          resolve(response);
        })
        .catch((error) => {
          // commit('removeUser')
          reject(error);
        });
    });
  },

  logout({commit})
  {
    return new Promise((resolve) => {
        commit('removeUser')
        resolve()
    })
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
