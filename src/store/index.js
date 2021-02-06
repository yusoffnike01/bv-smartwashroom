import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import cleaner from './modules/cleaner'
Vue.use(Vuex)

const store= new Vuex.Store(
    {
        modules:{
            auth,
            cleaner
        }
        // state: {
        //    user :{
        //        email:'',
        //        password:''
        //    }
        //   },

        //   mutations: {
        //     saveuser(state,payload)
        //     {
        //       state.user=payload
        //     }
            
        //   }
    }
)
export default store