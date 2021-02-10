import Axios from "axios";
const state = () => ({
  token: localStorage.getItem("token") || "",
  role_id:localStorage.getItem("role_id")||"",

   
 
 
});

const mutations = {
  saveuser(state, payload) {
    state.token = payload;
   
//    localstorage.setitem('islogin',payload)
    localStorage.setItem("token", payload.headers);
    localStorage.setItem("role_id",payload.role_id);
    Axios.defaults.headers.common["Authorization"] = payload;
  },


  removeUser(state) {
    state.token = ''
    localStorage.removeItem('token')
    localStorage.removeItem('role_id')
    delete Axios.defaults.headers.common['Authorization']
}



  
};

const getters = {
  isLoggedIn: (state) => !!state.token,
  isadmin:(state)=>state.role_id==1? false: true
};

const actions = {

  login({ commit }, payload) {
    return new Promise((resolve, reject) => {
      Axios.post(
        "https://loyalthe-core-staging.herokuapp.com/admin/login",
        payload
      )
        .then((response) => {
          let data={
            headers:response.headers.authorization,
            role_id:response.data.role_id
            

          }
          commit("saveuser", data);
         
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
